import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class Bcrypt{
    async encriptar(password: string): Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    };

    async comparar(password: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(password, hash);
    };
}