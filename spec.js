var data = [['a',0,1,2,3,4], ['a',54312,235,5,15,4], ['a',6,7,8,9,232], ['a',54,11235,345,5,6], ['b',0,1,2,3,4], ['b',54312,235,5,15,4], ['c',62,15,754,93,323], ['d',27,11235,425,18,78], ['d',0,1,2,3,4], ['d',54312,235,5,15,4], ['e',6,7,8,9,232], ['e',54,11235,345,5,6], ['e',0,1,2,3,4], ['e',54312,235,5,15,4], ['e',62,15,754,93,323], ['e',27,11235,425,18,78]];

describe("Page Should", () => {
  it("Have an element with a class of 'demo-table'", () => {
    let table = document.getElementById('demo-table');
    expect(table).to.be.ok;
  });

  it("Should have 4 td elements with the class of letter", () => {
    let letterElements = document.getElementsByClassName('letter');
    expect(letterElements.length).to.equal(5)
  });

  it("Should have as many arrays as there are in the data object", () => {
    let arrayElements = document.getElementsByClassName('data-row');
    expect(arrayElements.length).to.equal(data.length);
  });
})