// Retirado de: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiqj6jth-z-AhU8qpUCHTK6AC8QjBB6BAgPEAE&url=https%3A%2F%2Fjestjs.io%2Fdocs%2F25.x%2Fmanual-mocks&usg=AOvVaw3AK7vCW0uWb7GtlrTZ8Y1z
import { Driver } from "../../entities/Driver";
import { IDriverRepository } from "../../interfaces/repositories/IDriverRepository";
                    // Entidade Motorista \\
export class DriverRepository implements IDriverRepository {
    
    drivers: Driver[];

    constructor() {

        this.drivers = new Array();

        const driver0 = new Driver();
        driver0.id = 1;
        driver0.name = "Driver Default";

        this.drivers.push(driver0);

        const driver1 = new Driver();
        driver1.id = 2;
        driver1.name = "Driver to Update";

        this.drivers.push(driver1);

        const driver2 = new Driver();
        driver2.id = 3;
        driver2.name = "Driver to Delete";

        this.drivers.push(driver2);
    }

    async list(name: string = ''): Promise<Driver[]> {

        return new Promise((resolve, reject) => {

            resolve(this.drivers.filter((item) => item.name.includes(name)));
        });
    }

    async detail(id: number): Promise<Driver> {

        return new Promise((resolve, reject) => {

            resolve(this.drivers.find((item) => item.id == id));
        });
    }
    //Criar motorista \\
    async create(driver: Driver): Promise<Driver> {

        driver.id = this.getID();

        this.drivers.push(driver);

        return new Promise((resolve, reject) => resolve(driver));
    }
    //Atualizar motorista \\
    async update(driver: Driver): Promise<Driver> {

        const entityToUpdate = this.drivers.find((current: Driver) => driver.id == current.id);

        entityToUpdate.name = driver.name;

        return new Promise((resolve, rejects) => resolve(entityToUpdate));
    }
    //Deletar motorista \\
    async delete(driver: Driver): Promise<Driver> {

        const entityFound = this.drivers.find((current: Driver) => current.id == driver.id);

        this.drivers = this.drivers.filter((current: Driver) => current.id != driver.id);

        return new Promise((resolve, reject) => resolve(entityFound));
    }

    getID(): number {
        
        return this.drivers.length + 1;
    }
}