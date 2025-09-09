import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('institucion')
export class Institucion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToOne(() => User, (user) => user.institucion, { cascade: true })
    user: User;

};
