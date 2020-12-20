# poll-voting-app

Poll Voting App created with the MERN stack.

## User Stories

* As an authenticated user, you can keep your polls and come back later to access them.
* As an authenticated user, you can see the aggregate results of your polls.
* As an authenticated user, you can create a poll with any number of possible items.
* As an unauthenticated or authenticated user, you can see on everyone's polls.
* As an unauthenticated or authenticated user, you can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)

## Getting Started

Include a `.env` file in the `server` directory with the following environment variables.

```
PORT = 3000
DATABASE = 'mongodb://localhost/<DATABASE_NAME>'
SECRET = 'ThisIsATemporarySecretKey'
```

## Built with

* nodejs
* express
* mongodb
* mongoose
* bcrypt
* jsonwebtoken
* react
