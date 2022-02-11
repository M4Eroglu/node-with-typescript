import { Request, Response } from 'express'

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

var orders = require('./orders.js');
app.use('/orders', orders);

var seeder = require('./seeder.js');
app.use('/seeder', seeder);

app.get('/', function(req: Request, res: Response) {
    res.send('Hello from root route.');
});

app.post('/', function(req: Request, res: Response) {
    res.json({
        message: req.body 
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})