// Retirado de:https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwimhdWFiOz-AhWLpZUCHUarAfMQFnoECAwQAQ&url=https%3A%2F%2Forkhan.gitbook.io%2Ftypeorm%2Fdocs%2Fentities&usg=AOvVaw3VeMWTcZjeGozMUnkS92G5
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { VehicleUse } from "./VehicleUse";

@Entity("vehicle")
export class Vehicle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "license_plate"})
    licensePlate: string;

    @Column()
    color: string;

    @Column()
    brand: string;    

    @OneToMany(() => VehicleUse, (vehicleUse) => vehicleUse.vehicle)
    usedVehicles: VehicleUse[];

    @CreateDateColumn({name: "created_at"})
    createdAt?: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt?: Date;
}