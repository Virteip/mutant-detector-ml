# Mutant Detector

Mutant Detector is an API that allows you to detect if there's more than one sequence of four characters in a row inside an array of NxN strings that represent the rows in a grid.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed `NODE` and `NPM`.
* You have `Docker` installed.
* You have `Postgres` installed.
* You have installed `Postman` for easy API testing and execution.

## Installation

To install Mutant Detector, follow these steps:

- Clone this repository:
```
$ git clone https://github.com/Virteip/mutant-detector-ml.git
```

- Setup postgres:
```
$ docker pull postgres

$ docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -d -p 6776:5432 postgres

$ docker cp src/dal/queries/initial/initial_setup.sql  $(docker ps -f "name=pg-docker" -q):.

$ docker exec -it pg-docker psql -h localhost -U docker -d postgres -p 5432 -a -f ./initial_setup.sql
```

- Install modules locally:
```
$ npm install
```
## Usage

To use Mutant Detector, follow these steps:

- Run dev script inside the project folder to run locally:
```
$ npm run dev
```
Once the server is running it will be accessible on `localhost:4000`, you can also use the live version on `https://mutant-detector-meli.herokuapp.com/`. 

Mutant Detector has two endpoints for the moment: a **POST** for `/api/mutant` and a **GET** for `/api/mutant/stats`.

####  Example for `/api/mutant`:
```
curl --location --request POST 'localhost:4000/api/mutant/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dna": [
        "ATGCCC",
        "CCGTGC",
        "TTATGT",
        "AAAAGG",
        "CCCCTA",
        "TCACTG"
    ]
}'
```

As you can see it receives a simple json body with an object "dna" that contains an array of strings that represents each row of a grid. These strings must only contain the letters **A, T, C or G**; otherwise an invalid characters error will show.

##### Responses:

- If a "mutant" is detected, meaning more than 1 sequence of 4 consecutive characters are present in any direction, a **200 OK** HTTP response will be returned.
- If a "human" is detected, meaning only 1 or 0 sequences of 4 consecutive characters are present in any direction, a **403 Forbidden** HTTP response wil be returned.
- If an invalid character is present, a **400 Bad Request** HTTP response wil be returned with a message that says **"This DNA sequence contains unreadable characters. Please check."**
- If an invalid body is sent in the post request, like for example it is missing the "dna" key, a **400 Bad Request** HTTP response will be returned with a message explaining what's wrong. In this case: **"should have required property 'dna'"**
- Other checks for invalid body contents include checking if dna value is an array, if the array less than 4 strings, wrong type of data inside array, invalid characters inside strings.


####  Example for `/api/mutant/stats`:

```
curl --location --request GET 'localhost:4000/api/mutant/stats'
```
##### Response:
- The response wil be an object containing the amount of mutants, humans, and the ratio of mutants vs humans present in the database.


## Tests

The tests can be found inside the 'tests' folder. They are unit tests written with Mocha and Chai, and the coverage threshold for the project is 80%.

To run the tests and display file coverage run the following command:

```
$ npm run test
```


If you want to contact me you can reach me at <sergiopietri@gmail.com>.