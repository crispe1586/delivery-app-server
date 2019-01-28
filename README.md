# Front-end challenge: Delivery app server

## Scripts available

In the project directory, you can run:

### `npm install`

This installs the dependencies.

### `npm run start`

This runs the NodeJS server with the mock data.

### `npm run start-dev`

This runs the NodeJS server with Nodemon for development purposes.

## How to run the server

- `npm install`
- `npm run start`

## REST specifications

### `GET /users`

### `PUT /users`

 Payload sample:

    {
        "id": 1,
        "name": "Biker 1",
        "username": "biker1",
        "password": "biker1pwd",
        "roles": ["biker"]
    }

### `GET /users/:id`

### `GET /orders`

### `PUT /orders`

Payload sample:

    {
        "id": 7,
        "origin": "Germany",
        "destination": "Colombia",
        "assignee": null,
        "status": "WAITING | ASSIGNED | PICKED_UP | DELIVERED",
        "timestampPickup": null,
        "timestampDelivery": null
   }

### `GET /orders/:id` 