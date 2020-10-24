# Weather App - Frontend

A weather application to display weather data based on city and it will return information such as temperature, humidity and windspeed of the particular city.  
For every city create the the applciation polls for new weather data every hour and there's possibility to stop polling if needed.

# Technologies

ReactJS  
Apollo  
GraphQL

## Installation

- Git clone repo [DTM-Frontend](https://github.com/Tobzzy/DTM-Frontend)

#### Pre-requisite

- Create .env file in the root folder and it should contain the following. check .env.example for more details.

```JavaScript
REACT_APP_GRAPHQL_URI
REACT_APP_GRAPHQL_WEBSOCKET_URI
```

- Use the package manager [yarn](https://yarnpkg.com/) to install app

```bash
yarn install
```

- To start server

```bash
yarn start
```

- Server will be live on [localhost](http://localhost:4000) port 4000

## License

[MIT](https://choosealicense.com/licenses/mit/)
