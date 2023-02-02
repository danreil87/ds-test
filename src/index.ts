/**
 * Creates a forecourt
 * Generates vehicles at a defined random interval
 * Loads generated Vehicles into a queue
 * Processes 
 * 
 * @author Dan Reil <danreil@member.com>
 */
import { Forecourt } from "./forecourt/forecourt";
import { GetRandomNumber } from "./helpers/numbers.helper";

const forecourt = new Forecourt();

/**
 * Imitates vehicles entering the forecourt
 */
setInterval(function() {
    // Increment time since last Vehicle entered forecourt
    forecourt.timeSinceLastVehicle++;
    // Check if vehicle should be generated
    if(forecourt.timeSinceLastVehicle === forecourt.timeToNextVehicle) {
        const vehicle = forecourt.generateNewVehicle();
        console.log('new vehicle enters forecourt', forecourt.runningCount);
        // Ensure queue never exceeds 5
        if(forecourt.queue.length <= forecourt.maxQueueLength) {
            forecourt.queue.push(vehicle);
        }
        console.log(vehicle);
        forecourt.timeToNextVehicle = GetRandomNumber(2200, 1500)
        forecourt.timeSinceLastVehicle = 0;
    }
    forecourt.runningCount++;
    forecourt.processQueue();
}, 1)

// TODO check why is not working, think it's to do with how setInterval works
process.on('SIGINT', function() {
    console.log(`Total Vehicles serviced: ${forecourt.vehiclesServiced.length}`);
    console.table(forecourt.vehiclesServiced)
    process.exit(1)
});