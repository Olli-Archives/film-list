import { makeQueenList } from '../src/queen-list-component.js';
const test = QUnit.test;

QUnit.module('test list template creation');

const queen = { name: 'Trixie Mattel' };

test('make queen list from data using template', assert => {
    const expected = `<li><a href=\"queen-detail.html?name=Trixie%20Mattel\">Trixie Mattel</a></li>`;

    const result = makeQueenList(queen);

    assert.htmlEqual(result, expected);
});
