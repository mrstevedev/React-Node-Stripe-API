const express = require('express');
const path = require('path');
const app = express();
const stripe = require("stripe")("sk_test_jUbeRNgnzxYratPk1OI8CjE1");
app.use(require("body-parser").text());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

// Charge 
app.post('/charge', async (req, res, next) => {
    try {
        let { status } = await stripe.charges.create({
            // $20.00
            amount: 2000,
            currency: 'usd',
            description: 'Reactjs Code Course',
            source: req.body
        });
        res.send('homepage');
    } catch(err) {
        res.status(500).end();
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
