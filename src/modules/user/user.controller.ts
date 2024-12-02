import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('user') 
@Controller()
export class UserController {
  
  constructor(private readonly userService: UserService) {}

  @Get('/user/:id')
  @ApiOperation({ summary: 'Buscar usuário pelo ID' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  findOne(@Param('id') id: string) {
    const userId = parseInt(id, 10); 
    return this.userService.findOne(userId);
  }

  @Post("register")
  @ApiOperation({ summary: 'Registrar um novo usuário' })
  @ApiBody({ type: CreateUserDto })  
  @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao registrar usuário.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Efetuar login de um usuário' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    return this.userService.login(email, password);
  }

  @Put('/user/:id')
  @ApiOperation({ summary: 'Atualizar dados de um usuário' })
  @ApiBody({ type: UpdateUserDto })  
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const userId = parseInt(id, 10); 
    return this.userService.update(userId, updateUserDto);
  }

  @Delete('/user/:id')
  @ApiOperation({ summary: 'Remover usuário pelo ID' })
  @ApiResponse({ status: 200, description: 'Usuário deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
