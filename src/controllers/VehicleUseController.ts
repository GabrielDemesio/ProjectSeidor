import { Request, Response } from "express";
import { VehicleUseService } from "../services/VehicleUseService";

// Retirado de:https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_o_i4iOz-AhXrjZUCHR8UAxAQFnoECBAQAQ&url=https%3A%2F%2Fexpressjs.com%2F&usg=AOvVaw2dzc6U9bu173R4s1d9BYhT
export class VehicleUseController {

    async list(request: Request, response: Response) {
       
        const vehicleUseService = new VehicleUseService();
       
        const vehicleUses = await vehicleUseService.list();
        
        return response.json(vehicleUses);
    }

    async create(request: Request, response: Response) {

        const vehicleUseService = new VehicleUseService();

        const { reason, startDate, endDate, driverId, vehicleId } = request.body;

        const vehicleUse = await vehicleUseService.create({ reason, startDate, endDate, driverId, vehicleId });

        return response.status(201).json(vehicleUse);
    }

    async endUse(request: Request, response: Response) {

        const vehicleUseService = new VehicleUseService();

        const { id, endDate } = request.body;

        await vehicleUseService.endUse({ id: parseInt(id), endDate });

        return response.status(204).json();
    }
}