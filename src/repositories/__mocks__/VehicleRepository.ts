import { Vehicle } from "../../entities/Vehicle";
import { IVehicleRepository } from "../../interfaces/repositories/IVehicleRepository";
                            // Entidade Veículo \\
export class VehicleRepository implements IVehicleRepository {

    vehicles: Vehicle[];

    constructor() {

        this.vehicles = new Array();

        const vehicle1 = new Vehicle();
        vehicle1.id = 1;
        vehicle1.brand = "Impala";
        vehicle1.licensePlate = "ZZT-1967";
        vehicle1.color = "black";

        this.vehicles.push(vehicle1);

        const vehicle2 = new Vehicle();
        vehicle2.id = 2;
        vehicle2.brand = "Opala";
        vehicle2.licensePlate = "ZZY-1975";
        vehicle2.color = "white";

        this.vehicles.push(vehicle2);
    }

    async list(brand: string, color: string): Promise<Vehicle[]> {

        return new Promise((resolve, reject) => {

            resolve(this.vehicles.filter((item) =>
                (brand ? item.brand.includes(brand) : true) && (color ? item.color.includes(color) : true)
            ));
        });
    }

    async detail(id: number): Promise<Vehicle> {

        return new Promise((resolve, reject) => {

            resolve(this.vehicles.find((item) => item.id == id));
        });
    }

    async create(vehicle: Vehicle): Promise<Vehicle> {

        vehicle.id = this.getID();

        this.vehicles.push(vehicle);

        return new Promise((resolve, reject) => resolve(vehicle));
    }

    async update(vehicle: Vehicle): Promise<Vehicle> {

        const entityToUpdate = this.vehicles.find((current: Vehicle) => vehicle.id == current.id);

        entityToUpdate.brand = vehicle.brand;
        entityToUpdate.licensePlate = vehicle.licensePlate;
        entityToUpdate.color = vehicle.color;

        return new Promise((resolve, rejects) => resolve(entityToUpdate));
    }

    async delete(vehicle: Vehicle): Promise<Vehicle> {

        const entityFound = this.vehicles.find((current: Vehicle) => current.id == vehicle.id);

        this.vehicles = this.vehicles.filter((current: Vehicle) => current.id != vehicle.id);

        return new Promise((resolve, reject) => resolve(entityFound));
    }

    getID(): number {

        return this.vehicles.length + 1;
    }
}