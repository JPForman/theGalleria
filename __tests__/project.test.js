import { ChuckString }  from './../src/chuckString.js' ;

describe ('chuckString', () => {
  let chuckString;

  test('should convert &quot from inputted Chuck Norris quote to actual quotation mark', () => {
    let testString = new ChuckString(`This is a &quot;a joke&quot;`);
    testString.chuckString();
    expect(testString.chuckSponse).toEqual(`This is a "a joke"`);

  });
});
