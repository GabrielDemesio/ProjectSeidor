// Retirado de:https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_o_i4iOz-AhXrjZUCHR8UAxAQFnoECBAQAQ&url=https%3A%2F%2Fexpressjs.com%2F&usg=AOvVaw2dzc6U9bu173R4s1d9BYhT
import { Request, Response } from "express";
import { DriverService } from "../services/DriverService";

export class DriverController {

    async list(request: Request, response: Response) {

        const driverService = new DriverService();

        //verifica se o parâmetro do filtro foi atribuído

        const name = request.query.name ? request.query.name.toString() : undefined;

        const drivers = await driverService.list({ name });

        return response.json(drivers);
    }

    async detail(request: Request, response: Response) {

        const driverService = new DriverService();

        const { id } = request.params;

        const driver = await driverService.detail(parseInt(id));

        if (driver)
            return response.json(driver);
        else
            return response.status(404).send();
    }

    async create(request: Request, response: Response) {

        const driverService = new DriverService();

        const { name } = request.body;

        const driver = await driverService.create({ name });

        return response.status(201).json(driver);
    }

    async update(request: Request, response: Response) {

        const driverService = new DriverService();

        const { id, name } = request.body;

        await driverService.update({ id: parseInt(id), name });

        return response.status(204).json();
    }

    async delete(request: Request, response: Response) {

        const driverService = new DriverService();

        const { id } = request.params;

        await driverService.delete(parseInt(id));

        return response.status(204).json();
    }
}