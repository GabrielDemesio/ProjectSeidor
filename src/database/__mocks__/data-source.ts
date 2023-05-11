// Retirado de: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwidoOyjiOz-AhUQkZUCHUW7C04QFnoECAcQAQ&url=https%3A%2F%2Flevelup.gitconnected.com%2Fdatasource-in-typeorm-a-new-way-to-connect-to-your-database-cdc6622f9bbc&usg=AOvVaw1HMYwWjpIeQKHa7iBfYdJu
import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: ":memory:",
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
});

export { AppDataSource }