import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1757821578660 implements MigrationInterface {
    name = 'InitSchema1757821578660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`modulo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`institucion_modulo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`institucionId\` int NULL, \`moduloId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`asistencia\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fecha\` datetime NOT NULL, \`materiaId\` int NULL, \`alumnoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`materia\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`evaluacion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nota\` int NOT NULL, \`materiaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`evaluacion_alumno\` (\`id\` int NOT NULL AUTO_INCREMENT, \`evaluacionesId\` int NULL, \`alumnosId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`alumno\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`apellido\` varchar(255) NOT NULL, \`edad\` int NOT NULL, \`institucionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`institucion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`institucionId\` int NULL, UNIQUE INDEX \`REL_33670c244ed0b0fd734f86e5da\` (\`institucionId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`institucion_modulo\` ADD CONSTRAINT \`FK_c065011c5a9f89f0d3f1341b780\` FOREIGN KEY (\`institucionId\`) REFERENCES \`institucion\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`institucion_modulo\` ADD CONSTRAINT \`FK_3c347e23fffc3359f6f0ddafcff\` FOREIGN KEY (\`moduloId\`) REFERENCES \`modulo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`asistencia\` ADD CONSTRAINT \`FK_3340f5ee5ee38248b9b7c67defb\` FOREIGN KEY (\`materiaId\`) REFERENCES \`materia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`asistencia\` ADD CONSTRAINT \`FK_f07d6398568efae75343340e8e5\` FOREIGN KEY (\`alumnoId\`) REFERENCES \`alumno\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`materia\` ADD CONSTRAINT \`FK_55bdb50ae955e3327a955547d6a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`evaluacion\` ADD CONSTRAINT \`FK_e6b842795167c42345122211d05\` FOREIGN KEY (\`materiaId\`) REFERENCES \`materia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`evaluacion_alumno\` ADD CONSTRAINT \`FK_c8c0fef8f1791f6f4937eb421ac\` FOREIGN KEY (\`evaluacionesId\`) REFERENCES \`evaluacion\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`evaluacion_alumno\` ADD CONSTRAINT \`FK_4124a3b3b19e4c726592e7e1b5d\` FOREIGN KEY (\`alumnosId\`) REFERENCES \`alumno\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`alumno\` ADD CONSTRAINT \`FK_bf2384622ca04f4bdcc84f3d5c4\` FOREIGN KEY (\`institucionId\`) REFERENCES \`institucion\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_33670c244ed0b0fd734f86e5da2\` FOREIGN KEY (\`institucionId\`) REFERENCES \`institucion\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_33670c244ed0b0fd734f86e5da2\``);
        await queryRunner.query(`ALTER TABLE \`alumno\` DROP FOREIGN KEY \`FK_bf2384622ca04f4bdcc84f3d5c4\``);
        await queryRunner.query(`ALTER TABLE \`evaluacion_alumno\` DROP FOREIGN KEY \`FK_4124a3b3b19e4c726592e7e1b5d\``);
        await queryRunner.query(`ALTER TABLE \`evaluacion_alumno\` DROP FOREIGN KEY \`FK_c8c0fef8f1791f6f4937eb421ac\``);
        await queryRunner.query(`ALTER TABLE \`evaluacion\` DROP FOREIGN KEY \`FK_e6b842795167c42345122211d05\``);
        await queryRunner.query(`ALTER TABLE \`materia\` DROP FOREIGN KEY \`FK_55bdb50ae955e3327a955547d6a\``);
        await queryRunner.query(`ALTER TABLE \`asistencia\` DROP FOREIGN KEY \`FK_f07d6398568efae75343340e8e5\``);
        await queryRunner.query(`ALTER TABLE \`asistencia\` DROP FOREIGN KEY \`FK_3340f5ee5ee38248b9b7c67defb\``);
        await queryRunner.query(`ALTER TABLE \`institucion_modulo\` DROP FOREIGN KEY \`FK_3c347e23fffc3359f6f0ddafcff\``);
        await queryRunner.query(`ALTER TABLE \`institucion_modulo\` DROP FOREIGN KEY \`FK_c065011c5a9f89f0d3f1341b780\``);
        await queryRunner.query(`DROP INDEX \`REL_33670c244ed0b0fd734f86e5da\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`institucion\``);
        await queryRunner.query(`DROP TABLE \`alumno\``);
        await queryRunner.query(`DROP TABLE \`evaluacion_alumno\``);
        await queryRunner.query(`DROP TABLE \`evaluacion\``);
        await queryRunner.query(`DROP TABLE \`materia\``);
        await queryRunner.query(`DROP TABLE \`asistencia\``);
        await queryRunner.query(`DROP TABLE \`institucion_modulo\``);
        await queryRunner.query(`DROP TABLE \`modulo\``);
    }

}
