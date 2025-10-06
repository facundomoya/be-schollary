import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1759758524628 implements MigrationInterface {
    name = 'InitSchema1759758524628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`alerta\` ADD \`clienteId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`alerta\` ADD CONSTRAINT \`FK_cb1725729019ded37fa8b8522a6\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`alerta\` DROP FOREIGN KEY \`FK_cb1725729019ded37fa8b8522a6\``);
        await queryRunner.query(`ALTER TABLE \`alerta\` DROP COLUMN \`clienteId\``);
    }

}
