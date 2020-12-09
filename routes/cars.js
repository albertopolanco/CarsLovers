const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Car = require("../models/car");
const mongoose = require("mongoose");



// RUTA PARA PODER EDITAR EL COCHE

router.put("/:id/editcar", (req, res, next) => {
    //console.log(req.body, "console.log de req.body")
    Car.findByIdAndUpdate(
        req.params.id,
        {
           brand: req.body.brand,
           model: req.body.model,
           year: req.body.year,
           engine: req.body.engine,
           power: req.body.power,
           traction: req.body.traction,
           fuel: req.body.fuel,
           image: req.body.image 
        },
        { new: true }
    )
        .then((updateCar) => {
            res.locals.currentUserInfo = updateCar;
            res.status(200).json(updateCar);
        })
        .catch((error) => {
            console.log(error);
        });
});


//CREAR EL MODELO CAR

router.post("/:id/createcar", async (req, res, next) => {
    try {
        const newCar = await Car.create({
           brand: req.body.brand,
           model: req.body.model,
           year: req.body.year,
           engine: req.body.engine,
           power: req.body.power,
           traction: req.body.traction,
           fuel: req.body.fuel,
           image: req.body.image,
           owner: req.params.id 
        })
    } catch (error) {
        console.log(error)
    }
});





router.get("/garage/:id", async (req, res, next) => {
    
    let myCars = await Car.find({owner: req.params.id});
    try{
        res.json(myCars)
    } catch(error) {
        console.log(error);
    }
});


// router.get("/cardetail/:id", async (req, res, next) => {
    
//     let myCarDetail = await Car.find({owner: req.params.id});
//     try{
//         res.json(myCarDetail)
//     } catch(error) {
//         console.log(error);
//     }
// });

router.get('/cardetail/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }

    Car.findById(req.params.id).populate('car')
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })


module.exports = router;