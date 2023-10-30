const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Car = require('./models/Car.js')

require('dotenv').config();

require('./config/db.cjs');

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "dist"))) // how we server our final built version (dist)

app.use(express.json()); // adds .body to the request


// GET all cars
app.get('/cars', async (req, res) => {
    try {
      const carsFromDB = await Car.find();
      res.json(carsFromDB);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
});
  

app.get("/", (req, res) => {
    res.send("Car app")
})


app.get('/cars/:brand', async (req, res) => {
  try {
    const carName = req.params.carName;
    const car = await Car.findOne({ name: carName });

    if (!car) {
      res.status(404).json({ error: 'Car not found' });
    } else {
      res.json(car);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});



app.post('/cars', async (req, res) => {
    try {
      const newCar = req.body;
      const createdCar = await Car.create(newCar);
      res.status(201).json(createdCar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
});
  
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});