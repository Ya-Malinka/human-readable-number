
it('Should return \'number\' when number given', () => {
    const readable = toReadable(number);
  
    assert.equal(readable, 'number');
  });