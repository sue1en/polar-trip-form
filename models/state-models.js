const data = [
    {
        id: '1',
        descricao: 'AC'
    }, 
    {
        id: '2',
        descricao: 'AL'
    }, 
    {
        id: '3',
        descricao: 'AP'
    }, 
    {
        id: '4',
        descricao: 'AM'
    }, 
    {
        id: '5',
        descricao: 'BA'
    }, 
    {
        id: '6',
        descricao: 'CE'
    }, 
    {
        id: '7',
        descricao: 'DF'
    }, 
    {
        id: '8',
        descricao: 'ES'
    }, 
    {
        id: '9',
        descricao: 'GO'
    }, 
    {
        id: '10',
        descricao: 'MA'
    }, 
    {
        id: '11',
        descricao: 'MT'
    }, 
    {
        id: '12',
        descricao: 'MS'
    }, 
    {
        id: '13',
        descricao: 'MG'
    }, 
    {
        id: '14',
        descricao: 'PA'
    }, 
    {
        id: '15',
        descricao: 'PB'
    }, 
    {
        id: '16',
        descricao: 'PR'
    }, 
    {
        id: '17',
        descricao: 'PE'
    }, 
    {
        id: '18',
        descricao: 'PI'
    }, 
    {
        id: '19',
        descricao: 'RJ'
    }, 
    {
        id: '20',
        descricao: 'RN'
    }, 
    {
        id: '21',
        descricao: 'RS'
    }, 
    {
        id: '22',
        descricao: 'RO'
    }, 
    {
        id: '23',
        descricao: 'RR'
    }, 
    {
        id: '24',
        descricao: 'SC'
    }, 
    {
        id: '25',
        descricao: 'SP'
    }, 
    {
        id: '26',
        descricao: 'SE'
    }, 
    {
        id: '27',
        descricao: 'TO'
    }, 
]

const getById = (id) => {

    const resposta = data.find((item) => {
        return item.id === id
    });

    return resposta;

}

const getAll = () =>{
    return data;
}

module.exports = {
    getAllState:getAll,
    getStateById:getById
}
