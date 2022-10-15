# E-commerce store

## Description

A plant e-commerce store that is not real and no purchases can be made. The page is not responsive. The following pages are included:

- A landing page
- A shop with 6 different products, some information on the products and also the ability to click on these products to get to the single product page.
- The single product pages, where information on the product is included as well as quantity can be chosen and added to the cart.
- A care page, how to care for the products.
- An about page with 'Lorem ipsum'
- A cart page. The total quantity of the chosen products is displayed in the header. The products are displayed in the cart, with the total sum of
  - each product
  - the total cart including shipping
- A checkout page
- A thank you page.

## Technologies

- Next.js
- React
- JavaScript
- Emotion
- Figma
- PostgreSQL
- Typescript
- For testing:
  - End-to-end Tests: Playwright
  - Unit Tests: Jest

## Screenshots

### Homepage

![Screenshot of the homepage](./Homepage.png 'Screenshot of the homepage')

### Single Product Page

![Screenshot of the single product page](./SinglePlantPage.png 'Screenshot of the single product page')

## Setup instructions

- Clone the repository with git clone <repo>
- Setup the database by downloading and installing PostgreSQL
- Create a user and a database
- Create a new file .env
- Copy the environment variables from .env-example into .env
- Replace the placeholders xxxxx with your username, password and name of database
- Install dotenv-cli with yarn add dotenv-cli
- Run yarn install in your command line
- Run the migrations with yarn migrate up
- Start the server by running yarn dev

## Deploy on Fly

- Generate a Fly.io Token, called GitHub Actions Deploy Token and copy the text
- Create a new repository secret in the GitHub repo, named FLY_API_TOKEN
- In the command line, log in to Fly.io.

```
flyctl auth login
```

- Create an app

```
flyctl apps create --name <app name>
```

- Create the Fly.io config files
- Add database credentials using Fly.io secrets

```
flyctl secrets set PGHOST=localhost PGDATABASE=$(openssl rand -hex 16) PGUSERNAME=upleveled$(openssl rand -hex 16) PGPASSWORD=$(openssl rand -base64 32)
```

- Create a 1GB volume for the PostgreSQL database in Frankfurt

```
flyctl volumes create postgres --size 1 --region fra
```

- Deploy

```
flyctl deploy
```
