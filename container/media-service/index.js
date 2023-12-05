const express = require('express');
require('dotenv').config()
const uploadRoute = require('./controller/routeUpload');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//the route 
app.use("/api/media" , uploadRoute);

//port connection 
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
