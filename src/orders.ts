import { Request, Response } from 'express'
import { schema } from './orders-schema'
import { readFile } from 'fs/promises';
import mongoose from 'mongoose'

var express = require('express');
var orders = express.Router();

const orderConnection = mongoose.createConnection('mongodb://localhost:27017/order')
const OrderModel = orderConnection.model('Order', schema)

orders.get('/', function(req: Request, res: Response){
   res.send('GET route on orders.');
});

orders.post('/', async function(req: Request, res: Response){
  let { id } = await new OrderModel(req.body).save()
  res.json({ id })
});

orders.get('/:uid', (req: Request, res: Response) => {
   const { uid } = req.params;
   res.json({ uid });
});

orders.post('/:uid', (req: Request, res: Response) => {
   const { uid } = req.params;
   res.json({ uid });
});

orders.patch('/:uid', (req: Request, res: Response) => {
   const { uid } = req.params;
   res.json({ uid });
});

orders.delete('/:uid', (req: Request, res: Response) => {
   const { uid } = req.params;
   res.json({ uid });
});

//export this orders to use in our index.js
module.exports = orders;