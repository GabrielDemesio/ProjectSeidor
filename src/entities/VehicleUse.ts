// Retirado de:https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwimhdWFiOz-AhWLpZUCHUarAfMQFnoECAwQAQ&url=https%3A%2F%2Forkhan.gitbook.io%2Ftypeorm%2Fdocs%2Fentities&usg=AOvVaw3VeMWTcZjeGozMUnkS92G5
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Driver } from "./Driver";
import { Vehicle } from "./Vehicle";

@Entity("vehicle_use")
export class VehicleUse {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "start_date" })
    startDate: Date;

    @Column({ name: "end_date" })
    endDate?: Date;

    @Column()
    reason: string;

    @Column()
    driverId: number;

    @Column()
    vehicleId: number;

    @JoinColumn({name: "driverId"})
    @ManyToOne(() => Driver, (driver) => driver.usedVehicles)
    driver: Driver;

    @JoinColumn({name: "vehicleId"})
    @ManyToOne(() => Vehicle, (vehicle) => vehicle.usedVehicles)
    vehicle: Vehicle;

    @CreateDateColumn({name: "created_at"})
    createdAt?: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt?: Date;
}