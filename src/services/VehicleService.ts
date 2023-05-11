import { Vehicle } from "../entities/Vehicle";
import { VehicleRepository } from "../repositories/VehicleRepository";

interface IVehicleRequest {
    id?: number;
    brand: string;
    licensePlate: string;
    color: string;
}
export class VehicleService {

    vehicleRepository: VehicleRepository;

    constructor() {

        this.vehicleRepository = new VehicleRepository();
    }

    async list(brand?: string, color?: string): Promise<Vehicle[]> {

        return await this.vehicleRepository.list(brand, color);
    }

    async detail(id: number): Promise<Vehicle> {

        //Checar se o motorista existe \\
        const vehicleFound = await this.vehicleRepository.detail(id);

        if (!vehicleFound)
            throw new Error("Veículo não encontrado!");

        return vehicleFound;
    }

    async create({ brand, licensePlate, color }: IVehicleRequest): Promise<Vehicle> {

        const vehicle = new Vehicle();
        vehicle.brand = brand;
        vehicle.licensePlate = licensePlate;
        vehicle.color = color;

        return await this.vehicleRepository.create(vehicle);
    }

    async update({ id, brand, licensePlate, color }: IVehicleRequest): Promise<Vehicle> {

        //checar se veículo existe \\
        const vehicleFound = await this.vehicleRepository.detail(id);

        if (!vehicleFound)
            throw new Error("Veículo não encontrado!");

        //mudar veículo
        vehicleFound.brand = brand;
        vehicleFound.licensePlate = licensePlate;
        vehicleFound.color = color;

        //salvar mudanças
        return await this.vehicleRepository.update(vehicleFound);
    }

    async delete(id: number): Promise<Vehicle> {

        //checar se vaículo existe \\
        const vehicleFound = await this.vehicleRepository.detail(id);

        if (!vehicleFound)
            throw new Error("Veículo não encontrado!");

        return await this.vehicleRepository.delete(vehicleFound);
    }
}