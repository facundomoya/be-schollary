import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Column, Entity } from 'typeorm';

@Entity('modulo')
export class Modulo extends ClaseBaseEntity {
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
}
