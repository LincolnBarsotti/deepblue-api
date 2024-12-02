import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  
  constructor(private readonly userService: UserService) {}

  @Post("register")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    return this.userService.login(email, password);
  }

  @Put('/user/:id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const userId = parseInt(id, 10); // Converte o ID para número
    return this.userService.update(userId, updateUserDto);
  }

  @Delete('/user/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
