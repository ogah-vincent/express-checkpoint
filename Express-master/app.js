
const express = require('express');
const { link } = require('fs');
const app = express();
app.use(express.static('css'));
app.use(checkWorkingHours);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
res.render('home');
});

app.get('/contact', (req, res) => {
res.render('contact');
});

app.get('/services', (req, res) => {
res.render('services');
});

app.listen(3000, () => {
console.log('Server started on port 3000');
});
function checkWorkingHours(req, res, next) {
const now = new Date();
const dayOfWeek = now.getDay();
const hourOfDay = now.getHours();

if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    
    next();
} else {
    
    res.status(503).send('Sorry, the service is only available during working hours (Monday to Friday, from 9 to 17).');
}
}

app.get('/about', function(req, res){
    res.render('about',)
})

app.listen(3001, function() {
    console.log('server started on port 3001....')
})





