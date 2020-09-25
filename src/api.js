const endpoint = 'https://opentdb.com/api.php?amount=10&category=18';

const getQuestions = async () => {
    return fetch(endpoint)
    .then(res => res.json())
    .then(data => data)
};

export default getQuestions;
