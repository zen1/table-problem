var data = [['a',0,1,2,3,4], ['a',54312,235,5,15,4], ['a',6,7,8,9,232], ['a',54,11235,345,5,6], ['b',0,1,2,3,4], ['b',54312,235,5,15,4], ['c',62,15,754,93,323], ['d',27,11235,425,18,78], ['d',0,1,2,3,4], ['d',54312,235,5,15,4], ['e',6,7,8,9,232], ['e',54,11235,345,5,6], ['e',0,1,2,3,4], ['e',54312,235,5,15,4], ['e',62,15,754,93,323], ['e',27,11235,425,18,78]];
var columnLetters = []
var letterCounts = {}
var table = document.getElementById('demo-table')

for (array in data) {
  createRow(array, data)
  updateLetterCount();
}

function updateLetterCount() {
  let letterNodes = document.getElementsByClassName('letter');

  [].forEach.call(letterNodes, (item) => {
    item.setAttribute('rowspan', letterCounts[item.textContent])
  });
}

function createRow(array, data) {
  [letter, ...numbers] = data[array];

  let row = document.createElement('tr');
  row.setAttribute('class', 'data-row');
  let rowStr = '';

  for (let number of numbers) {
    rowStr += '<td class="array">' + number.toString() + '</td>';
  }

  if (columnLetters.includes(letter)) {
    letterCounts[letter] += 1;
    row.innerHTML = rowStr;
  } else {
    columnLetters.push(letter);
    letterCounts[letter] = 1;
    row.innerHTML = '<td class="letter">' + letter + '</td>' + rowStr;
  }
  table.appendChild(row);
}