const express = require('express');
const app = express();
const fs = require('fs');

const adrs = JSON.parse(fs.readFileSync('./data.json'));
// console.log(adrs);

app.use(express.json());

app.get('/api/addresses', (req, res)=>{
    res.status(200).send(adrs)
})

app.get('/api/addresses/:id', (req, res)=>{
    const id = +req.params.id;
    const updatedData = adrs.filter(item => item.id === id);
    res.status(200).send(updatedData)
})

app.post('/api/addresses', (req, res) =>{
    const newAdr = req.body;
    adrs.push(newAdr);
    let data = JSON.stringify(adrs, null, 4);
    fs.writeFile('./data.json', data, ()=>{
        if (error) throw error;
        console.log('data added');
    })
    res.status(201).send(adrs);
})

app.put('/api/addresses/:id', (req, res) =>{
    const id = +req.params.id;
    const editedAdr = req.body;
    const updatedData = adrs.map(item => item.id === id? editedAdr : item);
    let data = JSON.stringify(updatedData, null, 4);
    fs.writeFile('./data.json', data, ()=>{
        if (error) throw error;
        console.log('data added');
    })
    res.status(201).send(updatedData);
})

app.patch('/api/addresses/:id', (req, res) =>{
    const id = +req.params.id;
    const editedAdr = req.body;
    const updatedData = adrs.map(item => item.id === id? {...item ,...editedAdr} : item);
    let data = JSON.stringify(updatedData, null, 4);
    fs.writeFile('./data.json', data, ()=>{
        if (error) throw error;
        console.log('data added');
    })
    res.status(201).send(updatedData);
})

app.delete('/api/addresses/:id', (req, res) =>{
    const id = +req.params.id;
    const updatedData = adrs.filter(item => item.id !== id);
    let data = JSON.stringify(updatedData, null, 4);
    fs.writeFile('./data.json', data, ()=>{
        if (error) throw error;
        console.log('data added');
    })
    res.status(206).send(updatedData);
})


app.listen(8000, ()=>{
    console.log('listening to port 8000');
})