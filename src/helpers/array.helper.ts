/**
 * Contains helper functions which can be used to get perform actions on or related to an array
 *
 * @author Dan Reil <danreil@me.com>
 */

/**
 * Returns a valid random index from a given array
 * 
 * @returns number
 */
export const GetRandomArrayIndex = function(arr: unknown[]): number {
    return Math.floor(Math.random() * arr.length);
}