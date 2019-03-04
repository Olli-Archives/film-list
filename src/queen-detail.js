import loadQueenTable from '../src/queen-detail-component.js';

const searchParams = new URLSearchParams(window.location.search);
const queenID = searchParams.get('id');
const URL = `http://www.nokeynoshade.party/api/queens/${queenID}`;

fetch(URL) 
    .then(response => response.json())
    .then(queen => {
        loadQueenTable(queen);
    })
    .catch(err => {
        console.log(err.message);
    });








