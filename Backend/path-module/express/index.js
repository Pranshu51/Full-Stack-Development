const express = require('express');
const app = express();
Hostname = 'localhost';
PORT = 3000;

app.get('/', (req,res) =>{
    res.send('Hello World');
});
app.get('/about', (req,res) =>{
    res.send('About Page');
});
app.get('/contact', (req,res) =>{
    res.send('Contact Page');
});

app.listen(PORT,() => {
    console.log(`Server is running on http://${Hostname}:${PORT}`);
});