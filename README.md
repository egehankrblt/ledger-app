postman request
curl --location --request POST 'http://localhost:3001/api/accounts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "name surname"
}'

curl --location --request POST 'http://localhost:3001/api/accounts/:userId/credit
--header 'Content-Type: application/json' \
--data-raw '{
    "account": 100
}'

curl -X GET \
  http://localhost:3001/api/accounts/balances

curl -X GET \
  http://localhost:3001/api/accounts/:userId/balance

before you run the app remember to change
user
password
values to your mysql user and password to in config/db.js
replace :UserId to users id that you need to give credit or see the balance

and change port to your localhost port in app.js
