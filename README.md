# PayBrokers - Technical Challenge

## About

The challenge is about to creating two APIs focused on microservices communication.

The API-A has a POST route, that receives a product (name, description, value), verifies the existence of the product name on the MongoDB database, case exists returns a message warning that the product already exists, case not, saves the product on a MongoDB collection, send this to API-B, and returns the created product.

The API-B receives the product via RabbitMQ, verifies the existence of the product name on the MySQL database, case exists, the product is discarded, case not exists, creates the product on a MySQL database. API-B also has a get product list route, that returns an array of products, and a get product by name route, returning a product selected by his name.

## How to run

For a complete instructions on how to run, see the API-A on this [link](https://github.com/NilsonNetto/paybrokers-apiA)

## Developer

- [Nilson Netto](https://github.com/NilsonNetto)

<a href="mailto:eng.nilsonnetto@gmail.com" target="_blank">
  <img style='margin: 5px;' src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="gmail logo"  />
</a>
<a href="https://www.linkedin.com/in/nilson-netto/" target="_blank">
  <img style='margin: 5px;' src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
</a>
