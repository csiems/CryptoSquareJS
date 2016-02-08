describe('Cryptosquare', function() {
  it("can create a new instance of cryptosquare", function() {
    var test_cryptosquare = new Cryptosquare("test string");
    expect(test_cryptosquare.string).to.equal("teststring");
  })

  it("finds a square from the length of the string", function() {
    var test_cryptosquare = new Cryptosquare("test string");
    expect(test_cryptosquare.encryptNumber()).to.equal(4);
  })

  it("encrypts a string and outputs in groups of five", function() {
    var test_cryptosquare = new Cryptosquare("test string");
    expect(test_cryptosquare.encrypt()).to.equal("tsnet gsr_t i_");
  })

  it("decrypts an encrypted string and converts it to original string", function() {
    var encrypted = new Cryptosquare("tsnet gsr_t i_");
    var longEncrypt = new Cryptosquare("supercalafragalisticexpialodocious")
    expect(encrypted.decrypt()).to.equal("teststring");
    expect(new Cryptosquare(longEncrypt.encrypt()).decrypt()).to.equal(longEncrypt.string);
  })

})
