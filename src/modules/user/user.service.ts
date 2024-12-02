import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}


  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { login: false }, // Incluir dados de login relacionados
    });

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    return user;
  }


  async create(data: CreateUserDto) {
    const { name, email, password, birthday } = data;
  
    // Verificar se o e-mail já existe no sistema
    const userExist = await this.prisma.login.findFirst({
      where: { email },
    });
  
    if (userExist) {
      throw new Error('Email already in use');
    }
  
    // Criar o login primeiro
    const login = await this.prisma.login.create({
      data: {
        email,
        password,
      },
    });
  
    // Criar o usuário associado ao login
    const user = await this.prisma.user.create({
      data: {
        name,
        birthday: new Date(birthday), // Converter string para Date
        loginId: login.id, // Associar o loginId ao usuário
      },
    });
  
    return {
      message: 'User created successfully',
      user,
      login,
    };
  }
  
  async update(id: number, updateUserDto: UpdateUserDto) {
    const { name, email, password, birthday } = updateUserDto;

    // Verificar se o usuário existe
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { login: true },
    });

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    // Atualizar os dados do usuário
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        name: name || user.name,
        birthday: birthday ? new Date(birthday) : user.birthday,
        login: {
          update: {
            email: email || user.login.email,
            password: password || user.login.password,
          },
        },
      },
      include: { login: true },
    });

    return updatedUser;
  }

  async remove(loginId: number) {
    // Verificar se o login existe
    const login = await this.prisma.login.findUnique({
      where: { id: loginId },
      include: { user: true }, // Incluir usuário relacionado para garantir que existe
    });

    if (!login) {
      throw new Error('Login not found'); // Lançar erro se o login não existir
    }

    // Deletar o login (o user será deletado automaticamente)
    await this.prisma.login.delete({
      where: { id: loginId },
    });

    return {
      message: `Login with ID ${loginId} and associated user deleted successfully`,
    };
  }

  async login(email: string, password: string) {
    // Verificar se o e-mail existe no sistema
    const login = await this.prisma.login.findFirst({
      where: { email },
      include: { user: true }, // Incluir informações de usuário relacionadas
    });

    if (!login || login.password !== password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return {
      message: 'Login successful',
      user: login.user,
    };
  }

}
