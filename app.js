// const { json } = require('express');
const express = require('express');
const app = express();
// const pg = require(‘pg’)
const morgan = require("morgan");

// const postgresUrl = ‘postgress://localhost/wikistack’
// const client = new pg.Client(postgresUrl)
// client.connect()

app.use(morgan("dev"))
app.use(express.static(`public`))

// app.use(express(json()))
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res,next)=>{
  console.log('Hello World');
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
