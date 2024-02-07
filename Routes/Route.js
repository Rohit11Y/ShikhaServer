const express = require('express');

const { customerInsert, getCustomer, Editcustomer, getcustomerid, cutomerdelete } = require('../Controller/Customercontroller');

const customer = express.Router();

customer.post('/insertcustomer', customerInsert)
customer.get('/getcustomer', getCustomer)
customer.put('/editcustomer/:id', Editcustomer)
customer.get('/getcustomer/:id', getcustomerid)
customer.delete('/getcustomerdelete/:id', cutomerdelete)

module.exports = customer;