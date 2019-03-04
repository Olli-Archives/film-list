import queenList from '../data/queen-list.js';

export function makeQueenTable(queen) {
    const html = `
        <dl>
            <dt>Name:</dt>
            <dd>${queen.name}</dd>
            <dt>Seasons:</dt>
            <dd>${queen.seasons}</dd>
            <dt>Winner:</dt>
            <dd>${queen.winner ? 'Yes' : 'No'}</dd>
            <dt>Miss Congeniality:</dt>
            <dd>${queen.missCongeniality ? 'Yes' : 'No'}</dd>
            <dt>Quote:</dt>
            <dd>"${queen.quote}"</dd>
        </dl>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadQueenTable(queen) {
    const queenTableNode = document.getElementById('queen-table');
    const params = new URLSearchParams(window.location.search);
    const queenToFind = params.get('name');
    const queenName = queenList[queenToFind];
    console.log(queenToFind);
    const queenTable = makeQueenTable(queenName);
    queenTableNode.appendChild(queenTable);
}