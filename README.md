postman curl
curl --location --request POST 'http://localhost:3001/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "name surname"
}'

before you run the app remember to change
user
password
values to you user and password in config/db.js

and change port to your localhost port in app.js
