const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const dbconnection = require("./config/db");
const router = require("./router/taskRouter");
const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());

app.get("/tasks",router)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  dbconnection()
});
