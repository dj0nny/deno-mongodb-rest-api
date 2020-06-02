# deno-mongodb-rest-api 🐱‍🐉

> A minimal REST server built w/ Deno

## :rocket: Getting started

### Download

Clone the repository using **Git**:
```bash
git clone https://github.com/dj0nny/deno-mongodb-rest-api.git
```
Or download [here](https://github.com/dj0nny/deno-mongodb-rest-api/archive/develop.zip).

### Install

There is no installation this time. 😱

All package are decentralized and they are imported via URL.

### Usage

You must have Deno installed on your local machine. For more info: https://deno.land/.

Before starting rename the `.env.example` file in `.env` and fills it.

Compared to Node.js, Deno provides by default a more secure protection when you run the script. For running correctly this program, you must explicitly grant the permissions:

`deno run --allow-net --allow-write --allow-read --allow-plugin --unstable --allow-env src\index.ts`

## Todo

* [x] project setup
* [x] add `README.md`, `.gitignore` and `.env`
* [x] install [Oak](https://deno.land/x/oak)
* [x] setup router and middlewares
* [x] add Hello World route (`/`)
* [x] install [mongo](https://deno.land/x/mongo)
* [x] setup mongo
* [x] add Users route (`/users`)
  * [x] GET users
  * [x] POST user
  * [x] GET one user
  * [x] PUT user
  * [x] DELETE user

## Author

👤 **Francesco Giambruno**

* Twitter: [@Dj0nny96](https://twitter.com/Dj0nny96)
* Github: [@dj0nny](https://github.com/dj0nny)

## Built with :heart: using
* [Deno](https://deno.land/) - _A secure runtime for JavaScript and TypeScript_

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/dj0nny/deno-mongodb-rest-api/issues).

## Show your support

Give a ⭐️ if this project helped you!