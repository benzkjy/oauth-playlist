const express = require('express');

const authRoute = require('./routes/auth');
const passportSetup = require('./config/passport-setup');

const app = express();

//set up routes
app.use('/auth',authRoute);

const port = process.env.PORT || 4320;

// Home Route
app.get('/',(req,res)=>{
    res.json('test route');
});

app.listen(port, ()=> console.log(`Server running on port ${port}`));