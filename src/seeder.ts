import { Request, Response } from 'express'
import { schema } from './orders-schema'
import { readFile } from 'fs/promises';
import mongoose from 'mongoose'
var express = require('express');

const orderConnection = mongoose.createConnection('mongodb://localhost:27017/order')
const OrderModel = orderConnection.model('Order', schema)

var seeder = express.Router();

seeder.get('/', async function (req: Request, res: Response){
    await OrderModel.deleteMany({}).exec()
  
    let ordersMock = await readFile('MOCK_DATA_MATERIALS.json', 'utf-8')
    let orderResults = await OrderModel.insertMany(JSON.parse(ordersMock))
  
    res.json({
      orders: {
        ids: orderResults.map(t => t._id),
        cnt: orderResults.length,
      },
    })
});
 
module.exports = seeder;