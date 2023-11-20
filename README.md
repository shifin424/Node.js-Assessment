
# Technical Assignment - Node.js Developer


This repository houses a collection of Node.js APIs crafted to evaluate your Node.js development skills. The assessment tasks cover fundamental aspects such as CRUD operations and efficient data handling. Leverage technologies like MongoDB and Express to showcase the proficiency in building robust Node.js applications.

**The following tools were utilized for the project:**

- Backend Framework: Node.js
- Database: MongoDB
- libraries: Mongoose, Morgan, Helmet, cloudinary , multer and Joi.

## API Reference

#### Add a Product

```http
 POST /api/v1/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `productName` | `string` | 	Required. Name of the product. address |
| `productCategory` | `string` | Required. Category of the product. |
| `productDescription` | `string` | Required. Description of the product. |
| `image` | `file` |	Required. Image file of the product. |

#### Get a Product by ID

```http
  GET /api/v1/products/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | 	Required. Unique ID of the product. |


#### Get Filtered Products


```http
 GET /api/v1/productsData
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` |Page number for pagination. |
| `pageSize` | `number` | Number of items per page. |
| `productName` | `string` | 		Filter by product name. |
| `category` | `string` | Filter by product category. |

#### Get Filtered Products


```http
 GET /api/v1/productsData
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` |Page number for pagination. |
| `pageSize` | `number` | Number of items per page. |
| `productName` | `string` | 		Filter by product name. |
| `category` | `string` | Filter by product category. |

#### Delete a Product by ID


```http
 DELETE /api/v1/products/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |Required. Unique ID of the product to delete. |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` The port number that the server will listen on

`MONGO_URI`: The MongoDB connection string or URI that your application will use to connect to the database

`CLIENT_URL`: The URL of the client application that will communicate with the server. This is required for Cross-Origin Resource Sharing (CORS) settings.

`API_SECRET`: The Cloudinary API secret associated with your Cloudinary account.

`CLOUD_NAME`: The Cloudinary cloud name used for media storage and management.

`API_KEY`: The Cloudinary API key associated with your Cloudinary account.

