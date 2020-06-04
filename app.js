
const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use('/static', express.static('public'));


const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');


app.use('/', mainRoutes);
app.use('/projects', projectRoutes);


// error handler
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});


// start server
app.listen(3000,() => {
    console.log('The application is running on localhost:3000');
});
