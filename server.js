var express = require("express");
var app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connection = require("./connection")
const PORT =8080;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const run = async (app) => {
    const connected = await connection.connect();
    routes.route(app, connected);
}
run(app);
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});