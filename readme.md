# Digital Space Software Candidate Challenge

Attempts to solve the problem outlined in [dscs-software-candidate-challenge.pdf](./docs/dscs-software-candidate-challenge.pdf)

## How to run

To run this program, you must have node/npm installed (see [installation guide](https://nodejs.org/en/download))

This was tested on node version `v18.13.0`

First from the command line in the route of the project, install all required node modules

```
npm i
```

To start the program run from the command line in the route of the project

```
npm start
```

## Requirements

- Creates a forecourt with lanes and pumps outlined in the spec
- Creates a queue for entering the forecourt
- Creates random Vehicle with defined parameters at a random interval between 1500ms to 2200ms and adds the vehicle to the queue
- Maximum number of vehicles in the queue outlined in spec
- Processes the queue assigning the vehicle to an available pump, takes into account blocking if a pump at the back is taken
- Fuel car to level at dispensing interval outlined in spec
- Accounts for drivers agitation to drop vehicle off if not entering the forecourt within a randomly generated time between 1 and 2 seconds
- Keeps a running total of vehicles serviced
- Keeps of running total of litres dispatched
- Keeps a running total of vehicles that left before fueling
- Keep detailed list of each fueling transaction, outlined in spec

## Completed

- Creates a forecourt with lanes and pumps outlined in the spec
- Creates a queue for entering the forecourt
- Creates random Vehicle with defined parameters at a random interval between 1500ms to 2200ms and adds the vehicle to the queue
- Maximum number of vehicles in the queue outlined in spec
- Processes the queue assigning the vehicle to an available pump
- Keeps a running total of vehicles serviced
- Keeps a running total of vehicles that left before fueling
- Keep detailed list of each fueling transaction, outlined in spec

## TODO

- Take into account blocking if a pump at the back is taken
- Accounts for drivers agitation to drop vehicle off if not entering the forecourt within a randomly generated time between 1 and 2 seconds
- Keep running total of litres dispatched
- Fuel car to level at dispensing interval outlined in spec

