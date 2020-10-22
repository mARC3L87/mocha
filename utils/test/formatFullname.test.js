const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return error if "fullname" is not a string', () => {
    expect(formatFullname(11)).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return error if "fullName" is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return error if ""fullName has less or more then two words', () => {
    expect(formatFullname('Lorem')).to.equal('Error');
    expect(formatFullname('Lorem ipsum dolor')).to.equal('Error');
  });

  it('should return error if "fullName" has no space between', () => {
    expect(formatFullname('Lorem-ipsum')).to.equal('Error');
  });

  it('should return correct letter format', () => {
    expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('Lorem Ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('LOREM IPSUM')).to.equal('Lorem Ipsum');
    expect(formatFullname('lOrEm iPsUm')).to.equal('Lorem Ipsum');
  });
});