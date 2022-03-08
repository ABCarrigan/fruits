const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const fruits

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.get('/fruits', function(req, res){
    res.render('Index', { fruits: fruits });
});        
module.exports = fruits

app.get('/fruits/new', (req, res)=>{
    res.render('New');
});

app.use(express.urlencoded({extended:true}));

app.post('/fruits/', (req, res)=>{
    res.send(req.body);
});

app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
});

app.listen(PORT, () => {
    console.log('listening');
});