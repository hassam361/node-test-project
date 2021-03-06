const express= require('express');
const hbs=require('hbs');
const PORT =process.env.PORT ;
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('toUpper',(text)=>{
    return text.toUpperCase();
})
// app.use((req,res,next)=>{
//     res.render('maintanance.hbs');
  
// });
app.get('/',(req,res)=>{
  res.render('home.hbs',
  {
    pageTitle:'Home Page',
    message:" Welcome to this page"
  })
});
app.use(express.static(__dirname+'/public'));

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
    }
     );
});
app.get('/hotel',(req,res)=>{
    res.render('hotel.hbs');
})
app.listen((PORT ),()=>{
    console.log(`the server is listening at ${PORT}`);
    console.log(process.env);
    
    
}); 