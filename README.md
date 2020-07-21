# About

This is full stack javascript project, made using nodejs, koa & seqelize on backend, react, redux & redux-saga on frontend.

# Getting started

## To run project using docker compose:
```
> docker compose up
```

## To start project in development mode:

### Backend:

1. install backend dependencies
```
> cd backend
> npm i
```

2. need to have installed mysql, configured db and place all configs in `./backend/.env` file. Example:
```
DB_USER="user"
DB_PASS="pass"
DB_NAME="pizza_dev"
DB_HOST="localhost"
DB_PORT=3306
```

### Frontend:

1. install frontend dependencies
```
> cd frontend
> npm i
```

2. start in dev mode: (all changes would immideately take effect in browser)
```
> npm run start
```