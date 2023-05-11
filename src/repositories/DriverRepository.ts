// Retirado de: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjP5Jy1h-z-AhW7pZUCHbUxCdUQFnoECB8QAQ&url=https%3A%2F%2Fblog.risingstack.com%2Fnode-hero-async-programming-in-node-js%2F&usg=AOvVaw2C0fJQXGDrMGaSRoeaX6rC
import { Like, Repository } from "typeorm";
import { Driver } from "../entities/Driver";
import { AppDataSource } from "../database/data-source";
import { IDriverRepository } from "../interfaces/repositories/IDriverRepository";

export class DriverRepository implements IDriverRepository {

    driverRepository: Repository<Driver>;

    constructor() {

        this.driverRepository = AppDataSource.getRepository(Driver);
    }

    async list(name?: string): Promise<Driver[]> {

        return await this.driverRepository.find({
            where: {
                name: name ? Like("%" + name + "%") : undefined
            }
        });
    }

    async detail(id: number): Promise<Driver> {

        return await this.driverRepository.findOneBy({ id });
    }

    async create(driver: Driver): Promise<Driver> {

        return await this.driverRepository.save(driver);
    }

    async update(driver: Driver): Promise<Driver> {

        return await this.driverRepository.save(driver);
    }

    async delete(driver: Driver): Promise<Driver> {

        return this.driverRepository.remove(driver);
    }
}