const app=require('./app')
port=3000

app.listen(port, ()=>{
    console.log('Express listening on port',port)
})