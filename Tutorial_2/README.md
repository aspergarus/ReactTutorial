Install dependencies for starting react app:

> docker-compose run npm install react react-dom react-router redux react-redux jest -S
> docker-compose run npm install webpack -D

Run webpack:

> docker-compose run node npx webpack

Or using npm:

> docker-compose run npm run build

