import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1759759245848 implements MigrationInterface {
    name = 'InitSchema1759759245848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rol\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`alerta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`mensaje\` varchar(255) NOT NULL, \`fecha_alerta\` datetime NOT NULL, \`tipo_alerta\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`clienteId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`contrato\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`fechaInicio\` datetime NOT NULL, \`fechaFin\` datetime NOT NULL, \`monto\` int NOT NULL, \`estado\` varchar(255) NOT NULL, \`clienteId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`factura\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`fecha_emision\` datetime NOT NULL, \`monto\` int NOT NULL, \`estado_pago\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`clienteId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`proyecto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`nombre_proyecto\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`fecha_inicio\` datetime NOT NULL, \`fecha_fin\` datetime NOT NULL, \`estado\` varchar(255) NOT NULL, \`clienteId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cliente\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`telefono\` varchar(255) NOT NULL, \`direccion\` varchar(255) NOT NULL, \`cuit\` varchar(255) NOT NULL, \`estado\` varchar(255) NOT NULL, \`contratosId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`historial_cliente\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`fecha\` datetime NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`clienteId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`user_name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`rolId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`alerta\` ADD CONSTRAINT \`FK_cb1725729019ded37fa8b8522a6\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`contrato\` ADD CONSTRAINT \`FK_af00d0b492ad1eab600402d9b59\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`factura\` ADD CONSTRAINT \`FK_18f5b9afa9f243da011f27d7763\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_c0ff17656375c1b3ee9bd9ddf9b\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD CONSTRAINT \`FK_826608eaed330943de819b40e84\` FOREIGN KEY (\`contratosId\`) REFERENCES \`contrato\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`historial_cliente\` ADD CONSTRAINT \`FK_728b085358949d653f6f2d2ab1d\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`historial_cliente\` ADD CONSTRAINT \`FK_48ec2035d478135d067476c4658\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_f66058a8f024b32ce70e0d6a929\` FOREIGN KEY (\`rolId\`) REFERENCES \`rol\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_f66058a8f024b32ce70e0d6a929\``);
        await queryRunner.query(`ALTER TABLE \`historial_cliente\` DROP FOREIGN KEY \`FK_48ec2035d478135d067476c4658\``);
        await queryRunner.query(`ALTER TABLE \`historial_cliente\` DROP FOREIGN KEY \`FK_728b085358949d653f6f2d2ab1d\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP FOREIGN KEY \`FK_826608eaed330943de819b40e84\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_c0ff17656375c1b3ee9bd9ddf9b\``);
        await queryRunner.query(`ALTER TABLE \`factura\` DROP FOREIGN KEY \`FK_18f5b9afa9f243da011f27d7763\``);
        await queryRunner.query(`ALTER TABLE \`contrato\` DROP FOREIGN KEY \`FK_af00d0b492ad1eab600402d9b59\``);
        await queryRunner.query(`ALTER TABLE \`alerta\` DROP FOREIGN KEY \`FK_cb1725729019ded37fa8b8522a6\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`historial_cliente\``);
        await queryRunner.query(`DROP TABLE \`cliente\``);
        await queryRunner.query(`DROP TABLE \`proyecto\``);
        await queryRunner.query(`DROP TABLE \`factura\``);
        await queryRunner.query(`DROP TABLE \`contrato\``);
        await queryRunner.query(`DROP TABLE \`alerta\``);
        await queryRunner.query(`DROP TABLE \`rol\``);
    }

}
