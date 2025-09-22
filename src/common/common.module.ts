import { Module } from '@nestjs/common';
import { Bcrypt } from './encriptador/bcrypt';

@Module({
    providers: [Bcrypt],
    exports: [Bcrypt],
    imports: [],
})

export class CommonModule {}