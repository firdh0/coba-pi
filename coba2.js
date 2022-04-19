var express = require('express')
var bodyParser = require('body-parser')
var app =  express();
var jsonParser = bodyParser.json()
// const port = 5500
const port = process.env.PORT || 3000;

const customers = [
    {id:1, name:"Firdho"},
    {id:2, name:"Genframen"},
    {id:3, name:"Fernando"}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/customers', (req, res) => {
    res.send(customers)

  })

app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id == parseInt(req.params.id));
    if (!customer) {
        res.status(404).send('Id not found !')
    }
    res.send(customer)
}) 

// POST method
app.post('/api/customers', jsonParser, function (req,res) {
    cur_id = customers.length + 1
    
    const customer = {
        id: cur_id,
        name: req.body.name
    };

    customers.push(customer);
    res.send(customer);

})


// PORT CONF
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})