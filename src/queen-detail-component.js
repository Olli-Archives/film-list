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
    console.log(queen);
    const queenTableNode = document.getElementById('queen-table');
    const queenTable = makeQueenTable(queen)
    queenTableNode.appendChild(queenTable);
}