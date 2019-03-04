import { makeQueenTable } from '../src/queen-detail-component.js';
const test = QUnit.test;

const queen = {
    name: 'Trixie Mattel',
    seasons: '7, AS3',
    winner: true,
    missCongeniality: false,
    quote: 'Okay, calm down there public school.',
};

test('make table row using template function from queen object', assert => {
    const expected = `
         <dl>
            <dt>Name:</dt>
            <dd>Trixie Mattel</dd>
            <dt>Seasons:</dt>
            <dd>7, AS3</dd>
            <dt>Winner:</dt>
            <dd>Yes</dd>
            <dt>Miss Congeniality:</dt>
            <dd>No</dd>
            <dt>Quote:</dt>
            <dd>"Okay, calm down there public school."</dd>
        </dl>`;

    const result = makeQueenTable(queen);

    assert.htmlEqual(result, expected);
});