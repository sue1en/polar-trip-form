console.log('teste');

const express = require('express');
const path = require('path');
const formController = require('./controllers/form-controller');
const sobreController = require('./controllers/sobre-controller');
const bodyParse = require('body-parser');
const port = process.env.PORT || 3001

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParse.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParse.urlencoded());


const hendlerRaiz = (req, res, next) => {
    
    console.log('cheguei aqui !!!');

    res.render('index');
}



app.get('/', hendlerRaiz);

app.get('/form', formController.formGet);

// app.get('/pdf', (req, res) => {

//     const user = {nome:'Fulano', email:'fulano@fulano', telefone:'000000', nascimento:'000000', genero:'asdasd', rua:'1', numero:'0', cidade:'alguma', estado:'algum', viagem:'q', data:'00', viajantes:'00'}

//     res.render('form-pdf', user );

// });

app.post('/form', formController.formPost);

app.get('/sobre', sobreController.sobreGet);

// app.get('/'(req, res, next));

app.listen(port, () => {
    console.log('o servidor esta rodando');
});

console.log('fim do index');