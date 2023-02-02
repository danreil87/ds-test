import { FuelType } from "../fuel/types/fuel-type.type";
import { GetPercentageOfNumber, GetRandomNumber } from "../helpers/numbers.helper";
import { VehicleType } from "./types/vehicle.type";
import { GetFuelType } from "./vehicles";

/**
 * Creates a vehicle for the forecourt
 */
export class Vehicle {
    fuelType: FuelType;
    tankCapacity: number;
    tankLevel: number;
    type: string;

    constructor(
        vehicleType: VehicleType
    ) {
        this.type = vehicleType;
        // Presume Car, mostly likely type
        this.tankCapacity = 10;
        if(vehicleType === 'Van') {
            this.tankCapacity = 80;
        }
        if(vehicleType === 'HGV') {
            this.tankCapacity = 150;
        }
        const randomPercentage = GetRandomNumber(25, 1);
        // Set current tank level as a random number
        this.tankLevel = GetPercentageOfNumber(
            this.tankCapacity,
            randomPercentage
        );
        this.fuelType = GetFuelType(vehicleType);
    }
};