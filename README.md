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

![Screenshot of the homepage](/Users/utipuuh/projects/ecommerce-store-nextjs/Homepage.png 'Screenshot of the homepage')

![Screenshot of the single product page](/Users/utipuuh/projects/ecommerce-store-nextjs/SinglePlantPage.png 'Screenshot of the single product page')

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
