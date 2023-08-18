const express = require('express')
const app = express()

//middleware
const fun =(req ,res,next) =>{
    console.log("In Middleware")
    next();

};

//app.use(fun)

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//route
 app.get('/',(req,res) =>{
    console.log("'/', GET")

    return res.send("This is your Node.js server");
 })

 app.get('/home',fun,(req,res) =>{
    console.log("'/home', GET")

    return res.send("This is your Home Route");
 })

 

 app.post('/home',(req,res)=>{
    return res.send('/home', POST);
 });

 //query
 // /api?key=100
 app.get('/api',(req,res)=>{
   console.log(req.query.key1.split(","));

    return res.send(" Success: /api, GET");
 });


 //params

 /* app.get('/api/backend/:id',(req,res)=>{
    console.log(req.params);
    return res.send("/api/backend/:id, GET")
 })  */

 app.get('/api/backend/:id',(req,res)=>{
    console.log(req.params);
    const value=req.params.id;
    return res.send(`/api/backend/:${value}, GET`)
 });

 app.get("/api1/:id/name",(req,res)=>{
   return res.send(`/api/${req.params.id}/name`);
 });

 app.get("/api/html",(req,res)=>{
   return res.send(`
     <html>
     <body>
     <h1>This is your form</h1>

     <form action="/form_submit" method="POST">
     <label for='name'> Name</label>
     <input type='text' name='name'></input>

     <label for='email'> Email</label>
     <input type='text' name='email'></input>

     <label for='username'> Username</label>
     <input type='text' name='username'></input>
     
     <label for='password'> Password</label>
     <input type='text' name='password'></input>

     <button type='submit'>Submit</button>

     </form>

     </body>
     </html>
   
   `);


 });

 
 app.post("/form_submit",(req,res)=>{
   console.log(req.body);
   return res.send("Form submitted succesfully")
 });


 app.listen(7000,()=>{
     console.log("Server is running on port 7000 ");
 });