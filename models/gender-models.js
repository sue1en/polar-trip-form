const data = [
    {
        id: '1',
        descricao: 'Masculino'
    },
    {
        id: '2',
        descricao: 'Feminino'
    },
    {
        id: '3',
        descricao: 'Outros'
    }
]
const getById = (id) => {

    console.log('Inicio getForId: ' + id);

    const resposta = data.find((item) => {
        return item.id === id
    });

    console.log('resposta metodo getById: ');
    console.log('resposta');


    return resposta;
}

const getAll = () => {
    return data;
}

module.exports = {
    getAllGender: getAll,
    getGenderById: getById
}
