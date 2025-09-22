import { Injectable } from '@nestjs/common';
import bcryptjs from 'bcryptjs';

@Injectable()
export class Bcrypt{
    async encriptar(password: string): Promise<string>{
        const salt = await bcryptjs.genSalt(10);
        return await bcryptjs.hash(password, salt);
    };

    async comparar(password: string, hash: string): Promise<boolean>{
        return await bcryptjs.compare(password, hash);
    };
}