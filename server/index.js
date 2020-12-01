const express = require('express');
const handle = require('./handlers');

const app = express();
app.use(handle.notFound);
app.use(handle.errors);


const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server running on Port ${port}...`));
