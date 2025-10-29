import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "schollary",
  entities: ["src/**/entities/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  synchronize: false,
  logging: true,
});
