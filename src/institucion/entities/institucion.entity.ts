import { Modulo } from 'src/modulo/entities/modulo.entity';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('institucion')
export class Institucion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Alumno, (alumno) => alumno.institucion)
    alumnos: Alumno[];

    @ManyToMany(() => Modulo)
    @JoinTable({
        name: 'institucion_modulo',
        joinColumn: { name: 'institucionId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'moduloId', referencedColumnName: 'id' },
    })
    modulos: Modulo[];
};
