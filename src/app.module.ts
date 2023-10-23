import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { TaskModule } from './module/task/task.module';
import { AuthMOdule } from './auth/auth.module';




@Module({
  imports: [UserModule, TaskModule, AuthMOdule],
  controllers: [],
  providers: [],
})
export class AppModule {}
