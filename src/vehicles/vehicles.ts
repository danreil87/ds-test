/**
 * Contains functions which relate to Vehicles
 * 
 * @author Dan Reil <danreil@me.com>
 */
import { FuelType } from "../fuel/types/fuel-type.type";
import { FuelTypes } from "../fuel/types/fuel-types";
import { GetRandomArrayIndex } from "../helpers/array.helper";
import { VehicleType } from "./types/vehicle.type";

export const PossibleVehicleTypes: VehicleType[] = ['Car', 'HGV', 'Van'];

/**
 * Contains a Map of possible fuel for each vehicle
 */
export const PossibleVehicleFuelTypes = new Map(
    [
        [
            'Car', ['Diesel', 'LPG', 'Unleaded']
        ],
        [
            'Van', ['Diesel', 'LPG']
        ]
    ]
);
/**
 * Returns a type of fuel for a given VehicleType 
 * 
 * @param vehicleType VehicleType
 * @returns FuelType
 */
export const GetFuelType = function(vehicleType: VehicleType): FuelType {
    // Guard clause to prevent a vehicle with incorrect type
    if(!PossibleVehicleTypes.includes(vehicleType)) {
        throw new Error(`Invalid vehicle type, must be of type '${PossibleVehicleTypes.toString()}'`)
    }
    // Can be array if not HGV
    if(vehicleType !== 'HGV') {
        // @ts-ignore guard clause prevents this
        // TODO: try to remove ts-ignore, investigate unknown error
        const vehicleFuelTypes: FuelTypes = PossibleVehicleFuelTypes.get(vehicleType);
        return vehicleFuelTypes[GetRandomArrayIndex(vehicleFuelTypes)];
    }
    // Can only be HGV
    return 'Diesel';
};