'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
        jwksUri: "{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
    issuer: '{YOUR-AUTH0-DOMAIN}',
    algorithms: ['RS256']
});


app.get("/api/projects/1", function(req, res) {
   // Find one Project with the id in req.params.id and return them to the user with res.json
    let dbProject = {
      "project_id": 1,
      "project_name": "161 Newkirk",
      "customer": "Rutgers",
      "address": "161 Newkirk, Jersey City, NJ",
      "contact_name": "John Doe",
      "contact_number": "2015555555",
      "account_number": "101000123",
      "floors": "Basement, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15",
      "scheduled_date": "2017-06-01T00:00:00.000Z",
      "comments": null,
      "createdAt": "2017-06-17T01:24:13.000Z",
      "updatedAt": "2017-06-17T01:24:13.000Z"
    }

    
}).then(function(dbProject) {
      res.json(dbProject);
    });