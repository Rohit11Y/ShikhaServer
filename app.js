const express = require('express');
const cors = require('cors');
 require('./Config/conn');
const bodyParser = require('body-parser');
 const customerInsert = require('./Routes/Route');
 const getCustomer = require('./Routes/Route');
 const customeredit = require('./Routes/Route');
 const getcustomerid = require('./Routes/Route');
 const cutomerdelete = require('./Routes/Route');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: "*" }));
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use('/Api/v',customerInsert);
app.use('/Api/v',getCustomer);
app.use('/Api/v',customeredit);
app.use('/Api/v',getcustomerid);
app.use('/Api/v',cutomerdelete);

const PORT = 4242;
app.listen(PORT,()=>{
    console.log(`running server ${PORT}`);
})
