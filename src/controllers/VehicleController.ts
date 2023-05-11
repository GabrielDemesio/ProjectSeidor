// Retirado de:https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_o_i4iOz-AhXrjZUCHR8UAxAQFnoECBAQAQ&url=https%3A%2F%2Fexpressjs.com%2F&usg=AOvVaw2dzc6U9bu173R4s1d9BYhT
import { Request, Response } from "express";
import { VehicleService } from "../services/VehicleService";

export class VehicleController {

    async list(request: Request, response: Response) {
       
        const vehicleService = new VehicleService();

        //verifica se os parâmetros do filtro foram atribuídos
        const brand = request.query.brand ? request.query.brand.toString() : undefined;
        const color = request.query.color ? request.query.color.toString() : undefined;
       
        const vehicles = await vehicleService.list(brand, color);
        
        return response.json(vehicles);
    }

    async detail(request: Request, response: Response) {

        const vehicleService = new VehicleService();

        const { id } = request.params;

        const vehicle = await vehicleService.detail(parseInt(id));

        if (vehicle)
            return response.json(vehicle);
        else
            return response.status(404).send();
    }

    async create(request: Request, response: Response) {

        const vehicleService = new VehicleService();

        const { brand, licensePlate, color } = request.body;

        const vehicle = await vehicleService.create({ brand, licensePlate, color });

        return response.status(201).json(vehicle);
    }

    async update(request: Request, response: Response) {

        const vehicleService = new VehicleService();

        const { id, brand, licensePlate, color } = request.body;

        await vehicleService.update({ id: parseInt(id), brand, licensePlate, color });

        return response.status(204).json();
    }

    async delete(request: Request, response: Response) {

        const vehicleService = new VehicleService();

        const { id } = request.params;
        
        await vehicleService.delete(parseInt(id));

        return response.status(204).json();
    }
}