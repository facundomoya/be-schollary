import { Modulo } from 'src/modulo/entities/modulo.entity';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
@Entity('institucion')
export class Institucion extends ClaseBaseEntity {
    @Column()
    nombre: string;

    @OneToMany(() => Alumno, (alumno) => alumno.institucion)
    alumnos: Alumno[];

    @ManyToMany(() => Modulo)
    @JoinTable({
        name: 'institucion_modulo',
    })
    modulos: Modulo[];
};
