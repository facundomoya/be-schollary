import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity'
import { CommonModule } from 'src/common/common.module';
import { Rol } from 'src/rol/entities/rol.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Rol]), CommonModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
