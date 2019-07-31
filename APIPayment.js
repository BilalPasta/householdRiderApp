/* 
KEY	VALUE
Publishable:
pk_test_kp1eyoLWmXz3xWOs6Zl4WnNH
Secret:
sk_test_rvOat8xh4XHVBJ5g9oBd5bgO*/

var express = require("express");
var stripe = require("stripe")("sk_test_rvOat8xh4XHVBJ5g9oBd5bgO");
var hbs=require("hbs");
var bodyparser= require("body-parser");

var app=express();

app.listen(3000,function(){
console.log("Stripe is running");



})