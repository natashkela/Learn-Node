const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//order matters whichever one is reached  first - that is the one that is executed
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/',(req,res,next)=>{
   res.sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);
