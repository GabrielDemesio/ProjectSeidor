// Retirado de: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj8i4eDh-z-AhXrrZUCHUsbAmMQFnoECA0QAQ&url=https%3A%2F%2Fblog.risingstack.com%2Fmastering-async-await-in-nodejs%2F&usg=AOvVaw3ieTmSFQazFf9ulR-zQlR0
import { VehicleUse } from "../../entities/VehicleUse";
import { IVehicleUseRepository } from "../../interfaces/repositories/IVehicleUseRepository";
import { Driver } from "../../entities/Driver";
import { Vehicle } from "../../entities/Vehicle";
                        // Entidade Veículo em uso \\
export class VehicleUseRepository implements IVehicleUseRepository {
    
    vehiclesUse: VehicleUse[];

    constructor() {

        this.vehiclesUse = new Array();

        //Criar motorista
        const driver = new Driver();
        driver.id = 1;
        driver.name = "Ozzy Osbourne";

        //Criar veículo
        const vehicle = new Vehicle();
        vehicle.id = 1;
        vehicle.brand = "Impala";
        vehicle.licensePlate = "ZZT-1967";
        vehicle.color = "black";        

        //Criar veículo em uso
        const vehicleUse = new VehicleUse();
        vehicleUse.id = 1;
        vehicleUse.reason = "only tester";
        vehicleUse.startDate = new Date();
        
        vehicleUse.driverId = driver.id;
        vehicleUse.driver = driver;
        vehicleUse.vehicleId = vehicle.id;
        vehicleUse.vehicle = vehicle;

        this.vehiclesUse.push(vehicleUse);
    }

    async list(): Promise<VehicleUse[]> {

        return new Promise((resolve, reject) => resolve(this.vehiclesUse));
    }

    async detail(id: number): Promise<VehicleUse> {

        return new Promise((resolve, reject) => {

            resolve(this.vehiclesUse.find((item) => item.id == id));
        });
    }

    async checkVehicleUse(vehicleId: number): Promise<VehicleUse> {

        return new Promise((resolve, reject) => {

            resolve(this.vehiclesUse.find((item) => item.id == vehicleId && !item.endDate));
        });
    }

    async checkDriverBusy(driverId: number): Promise<VehicleUse> {

        return new Promise((resolve, reject) => {

            resolve(this.vehiclesUse.find((item) => item.id == driverId && !item.endDate));
        });
    }

    async create(vehicleUse: VehicleUse): Promise<VehicleUse> {

        vehicleUse.id = this.getID();

        this.vehiclesUse.push(vehicleUse);

        return new Promise((resolve, reject) => resolve(vehicleUse));
    }

    async update(vehicleUse: VehicleUse): Promise<VehicleUse> {

        const entityToUpdate = this.vehiclesUse.find((current: VehicleUse) => vehicleUse.id == current.id);

        entityToUpdate.endDate = vehicleUse.endDate;

        return new Promise((resolve, rejects) => resolve(entityToUpdate));
    }

    getID(): number {
        
        return this.vehiclesUse.length + 1;
    }
}