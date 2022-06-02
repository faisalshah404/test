const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/')
    .all((req , res , next)=>{
        res.setHeader("Content-type","text/html");
        res.statusCode = 200;
        res.write("<h2>Welcome to promotions</h2>");
        next();
    })
    .get((req,res,next)=>{
        res.end("<h3>This is get request to show Promotions</h3>");
    })
    .post((req,res,next)=>{
        res.end("<h3>This is post request to Add new Promotions  to Name :"+req.body.name +" and description to :"+req.body.description +" </h3>");
    })
    .put((req,res,next)=>{
        res.statusCode = 403;
        res.end("<h3>This is put request to update Promotions butt can not do that without id</h3>");
    })
    .delete((req,res,next)=>{
        res.end("<h3>This is delete request to delete all Promotions</h3>");
    });
promoRouter.route('/:promoId')
    .all((req , res , next)=>{
        res.setHeader("Content-type","text/html");
        res.statusCode = 200;
        res.write("<h2>Welcome to single promotions page</h2>");
        next();
    })
    .get((req,res,next)=>{
        res.end("<h3>This is get request to show Promotions at ID : "+req.params.promoId +"</h3>");
    })
    .post((req,res,next)=>{
        res.statusCode = 403;
        res.end("<h3>This is post request to Add new Promotions Butt Can not do it with ID</h3>");
    })
    .put((req,res,next)=>{
        res.end("<h3>This is put request to update Promotions at ID "+req.params.promoId +" to Name :"+req.body.name +" and description to :"+req.body.description +" </h3>");
    })
    .delete((req,res,next)=>{
        res.end("<h3>This is delete request to delete all Promotions at ID : "+req.params.promoId +"</h3>");
    });

module.exports=promoRouter;