const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Home Assignment test",
      description: "Home Assignment test API Information",
      contact: {
        name: "Amazing Developer"
      },
    },
    host: "assignmentnodejsapi.herokuapp.com/api",
    schemes:[
      "http",
      "https"
    ],
    servers : [ {
      "url" : "http://localhost:8080",
      "description" : "example"
    } ]
  },
  // ['.routes/*.js']
  apis: ["app.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /auth/signup:
 *  post:
 *    description: name, email, password insert into field
 *    parameters: [
      {
        "in": "body",
        "name": "body",
        "description": "Create users ",
        "required": false,
         "schema": {
           "properties": {
              "name": {
              "type": "string",
              "example": ""
              },
              "email": {
              "type": "string",
              "example": "" 
              },
              "password": {
              "type": "string",
              "example": ""
              }
            }
          }
      }
    ]
 *    responses:
 *      '200':
 *        description: A successful response
 *      '201':
 *        description: Request data invalid
 */
app.post("auth/signup", (req, res) => {
  res.status(200).send(res);
});

/**
 * @swagger
 * /auth/signin:
 *  post:
 *    description: email, password insert into field
 *    parameters: [
      {
        "in": "body",
        "name": "body",
        "description": "Login API ",
        "required": false,
         "schema": {
           "properties": {
              "email": {
              "type": "string",
              "example": "" 
              },
              "password": {
              "type": "string",
              "example": ""
              }
            }
          }
      }
    ]
 *    responses:
 *      '200':
 *        description: A successful response
 *      '201':
 *        description: Request data invalid
 */
app.post("/auth/signin", (req, res) => {
  res.status(200).send("Successfully logged in");
});

/**
 * @swagger
 * /test/all:
 *  get:
 *    description: Get All user's list API
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/auth/signin", (req, res) => {
  res.status(200).send("Successfully logged in");
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
