describe("romanize", function() {

  it("returns the roman numeral of a number between 1 and 3", function() {
    expect(romanize(3)).to.equal("III");
  })

  it("returns the roman numeral of a number between 5 and 8", function() {
    expect(romanize(8)).to.equal("VIII");
  })

  it("returns the roman numeral of a number between 10 and 18", function() {
    expect(romanize(18)).to.equal("XVIII");
  })

  it("returns a large number with no 4 or 9 digits", function() {
    expect(romanize(1637)).to.equal("MDCXXXVII");
  })

  it("returns a roman numeral of the number 4", function() {
    expect(romanize(4)).to.equal("IV");
  })

  it("returns a roman numeral of the number 40", function() {
    expect(romanize(40)).to.equal("XL");
  })

  it("returns a roman numeral of the number 9", function() {
    expect(romanize(9)).to.equal("IX");
  })

  it("returns a roman numeral of the number 90", function() {
    expect(romanize(90)).to.equal("XC");
  })

  it("returns a large number", function() {
    expect(romanize(949)).to.equal("CMXLIX")
  })

})
