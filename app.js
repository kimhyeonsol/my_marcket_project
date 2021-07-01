const express= require('express')
const bodyParser=require('body-parser')

class App{
    constructor(){
        this.app=express();
    }
}

module.exports=new App().app