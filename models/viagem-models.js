const data = [
    {
        id: '1',
        descricao: 'Beginer'
    },
    {
        id: '2',
        descricao: 'Expert'
    },
    {
        id: '3',
        descricao: 'Extreme'
    },
]

const getById = ((id) => {
    const resposta = data.find((item) => {
        return item.id === id;
    });
    return resposta;
});

const getAll = () => {
    return data;
};

module.exports = {
    getViagemById: getById,
    getAllViagem: getAll,
};