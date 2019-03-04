import loadQueenList from '../src/queen-list-component.js';

const URL = 'http://www.nokeynoshade.party/api/queens/all';

fetch(URL)
    .then(response => response.json())
    .then(queens => {
        loadQueenList(queens);
    })
    .catch(err => {
        console.log(err.message);
    });
