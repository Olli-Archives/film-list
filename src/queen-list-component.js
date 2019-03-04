export function makeQueenList(queen) { 
    const href = 'queen-detail.html?id=' + encodeURIComponent(queen.id);
    const template = document.createElement('template');
    template.innerHTML = `<li><a href="${href}">${queen.name}</a></li>`;
    return template.content;
}

const queenListNode = document.getElementById('queen-list');
export default function loadQueenList(queenList) {
    queenList.forEach(queen => {
        const queenLI = makeQueenList(queen);
        queenListNode.appendChild(queenLI);
    });
}