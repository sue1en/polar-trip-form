const ejs = require('ejs');
const fileSystem = require('fs');
const html_to_pdf = require('html-pdf-node');
const joi = require('joi')

const stateModel = require('../models/state-models');
const viagemModel = require('../models/viagem-models');

const hendlerGetForm = (req, res, next) => {
    
    const stateModelResult = stateModel.getAllState();
    const stateItemViewModel = stateModelResult.map ((item) => {
        return {
            id: 'algumaCoisa',
            value: item.id,
            label: item.descricao,
        }
    });
    
    const viagemModelResult = viagemModel.getAllViagem();
    const viagemItemViewModel = viagemModelResult.map((item) => {
        return{
            value: item.id,
            label: item.descricao
        }
    });

    const getViewModel = {
        countryState: stateItemViewModel,
        viagemEstilo: viagemItemViewModel,
    }

    res.render('form', getViewModel);
    
    
}
const hendlerPostForm = (req, res, next) => {
    
    console.log(req.body);
    
    const body = req.body;
   
    const stateResult = stateModel.getStateById(body.countryState);
    const viagemResult = viagemModel.getViagemById(body.viagemEstilo);

    const viewModel = {
        nome: body.name,
        email: body.email,
        telefone: body.telephone,
        nascimento: body.nascimento,

        rua: body.street,
        numero: body.streetNumber,
        cidade: body.city,
        estado: stateResult.descricao,

        viagem: viagemResult.descricao,
        data: body.departureDate,
        viajantes: body.travellers,
    };

    var htmlText = fileSystem.readFileSync('./views/form-pdf.ejs', 'utf8');

    console.log(htmlText);
    
    var htmlPronto = ejs.render(htmlText, viewModel);
    
    console.log(htmlPronto);

    let file = { content: htmlPronto};
    let options = {
        format: 'A5', landscape:true, printBackground:true};
    
    html_to_pdf.generatePdf(file, options)
    .then(pdfBuffer => {
    
        res.contentType('application/pdf');
        res.send(pdfBuffer);
    });

    // res.send({
    //     mensagem:"teste POST formulario"
    // })
}

module.exports = {

     formGet: hendlerGetForm,
     formPost: hendlerPostForm
} 
