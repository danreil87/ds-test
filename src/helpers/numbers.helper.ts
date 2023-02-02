/**
 * Contains helper functions which can be used to perform actions on or related to an array
 *
 * @author Dan Reil <danreil@me.com>
 */

/**
 * Calculates a number as a provided percentage of a provided total
 * 
 * @param max
 * @param min
 * @returns number
 */
export const GetPercentageOfNumber = function(total: number, percentage: number): number {
    // TODO Investigate using something like Big.js to handle decimal place numbers
    return (percentage / 100) * total;
}
/**
 * Calculates a random whole number from a given maximum, optional minimum
 * 
 * @param max
 * @param min
 * @returns number
 */
export const GetRandomNumber = function(max: number, min = 0): number {
    return Math.floor(Math.random() * (max - min) + min);
}