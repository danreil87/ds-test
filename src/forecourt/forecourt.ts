import { GetRandomNumber } from "../helpers/numbers.helper";
import { Vehicle } from "../vehicles/vehicle"
import { PossibleVehicleTypes } from "../vehicles/vehicles";

/**
 * Create a forecourt with defined lanes and queue for lanes
 * Processes queue into forecourt
 * 
 * @author Dan Reil <danreil@me.com> 
 */
export class Forecourt {
    // Maximum cars that can be in a queue at a time
    maxQueueLength = 0;
    // Running count of milliseconds passed since start
    runningCount = 0;
    // Time since the last vehicle was generated
    timeSinceLastVehicle = 0;
    // Time to next vehicle enters forecourt
    timeToNextVehicle = GetRandomNumber(2200, 1500);
    // Total number of vehicles serviced
    // TODO add type for this
    vehiclesServiced: any[] = [];
    // Running total of drop offs
    vehicleDropOffs = 0;
    // Queue for vehicles entering forecourt
    queue: Vehicle[] = [];
    // Lanes in forecourt
    // Top level = lanes
    // Sub Level = pumps
    // TODO add type for Lanes
    lanes: any = new Map([
        [
            1, {
                name: 'Lane 1',
                pumps: [
                    {
                        name: "Pump 3",
                        car: null
                    },
                    {
                        name: "Pump 2",
                        car: null
                    },
                    {
                        name: "Pump 1",
                        car: null
                    }
                ]
            }
        ],
        [
            2, {
                name: 'Lane 2',
                pumps: [
                    {
                        name: "Pump 6",
                        car: null
                    },
                    {
                        name: "Pump 5",
                        car: null
                    },
                    {
                        name: "Pump 4",
                        car: null
                    }
                ]
            }
        ],
        [
            3, {
                name: 'Lane 3',
                pumps: [
                    {
                        name: "Pump 9",
                        car: null
                    },
                    {
                        name: "Pump 8",
                        car: null
                    },
                    {
                        name: "Pump 7",
                        car: null
                    }
                ]
            }
        ],
    ])
    /**
     * Generates a new Vehicle for the forecourt queue
     * 
     * @returns Vehicle
     */
    generateNewVehicle() {
        return new Vehicle(
            PossibleVehicleTypes[GetRandomNumber(PossibleVehicleTypes.length)]
        );
    }
    /**
     * Processes the queue into the forecourt
     */
    processQueue () {
        let vehicleAdded = false;
        let nextVehicle: Vehicle | null = null;
        // Ensure there is a queue to processes
        if(this.queue.length) {
            // Next the next vehicle in the queue
            // TODO revisit this, might be a more efficient way to manage this
            if(vehicleAdded === false) {
                nextVehicle = this.queue[0];
            }
            // Iterate each lane
            this.lanes.forEach((lane: any) => {
                // Traverse the array in reverse order to ensure lanes are filled
                // Skip Lane is car is in lane
                // TODO check this skip logic works correctly
                let i = lane.pumps.length - 1;
                for(;i >= 0;i--){
                    const pump = lane.pumps[i];
                    if(!pump.car && nextVehicle) {
                        // Set car taking pump
                        pump.car = nextVehicle;
                        // TODO add callback function to fuel car at interval and then 
                        // remove car from pump when full
                        // fuelCar()
                        // Remove car from queue
                        // TODO revisit this, might be a more efficient way to manage this
                        this.queue.shift();
                        console.log(`${nextVehicle.type} in pump ${pump.name}, needs to fill ${nextVehicle.tankCapacity - nextVehicle.tankLevel}`);
                        // TODO move this to the fuel completed function
                        this.vehiclesServiced.push({
                            dateTime: new Date(),
                            fuelType: nextVehicle.fuelType,
                            litresDispensed: nextVehicle.tankCapacity - nextVehicle.tankLevel
                        });
                        vehicleAdded = true;
                        nextVehicle = null;
                        console.log(`Total vehicles serviced: ${this.vehiclesServiced.length}`);
                    }
                }
            })
            if(vehicleAdded === false && nextVehicle) {
                console.log(`${nextVehicle.type} in queue, needs to fill ${nextVehicle.tankCapacity - nextVehicle.tankLevel}`);
            }
            // TODO handle drop offs
            // TODO log drop offs
        }
    }

}