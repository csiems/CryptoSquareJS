function Cryptosquare(string) {
  this.string = string.replace(/[\W\s]+/g, "");
}

Cryptosquare.prototype.encryptNumber = function() {
  return Math.ceil(Math.sqrt(this.string.length));
}

Cryptosquare.prototype.encrypt = function() {
  var splitNumber = this.encryptNumber();
  var stringArray = this.string.match(new RegExp('.{1,'+splitNumber+'}', 'g'));
  var outputString = "";
  for (var i = 0; i <= stringArray.length; i++) {
    stringArray.forEach(function(garble) {
      if(garble[i] !== undefined) {
        outputString = outputString.concat(garble[i]);
      } else {
        outputString = outputString.concat('_');
      }
    })
  }
  return outputString.match(new RegExp('.{1,5}', 'g')).join(" ");
}

Cryptosquare.prototype.decrypt = function() {
  var splitNumber = this.encryptNumber();
  var output = "";
  for(var i = 0; i < splitNumber - 1; i++) {
    for(var j = i; j < this.string.length; j += splitNumber - 1) {
      output = output.concat(this.string[j]);
    }
  }
  return output.replace(/\_/g,'');
}

$(function() {
  $("#encrypt-button").on("click", function(e) {
    e.preventDefault();
    var stringToEncrypt = $("#new-encrypt-line").val();
    console.log(stringToEncrypt);
    var result = new Cryptosquare(stringToEncrypt).encrypt();
    $("#show-result").empty();
    $("#show-result").append('<p>' + result + '</p>');
    $("#new-encrypt-line").val('');
  });

  $("#decrypt-button").on("click", function(e) {
    e.preventDefault();
    var stringToDecrypt = $("#new-decrypt-line").val();
    console.log(stringToDecrypt);
    var result = new Cryptosquare(stringToDecrypt).decrypt();
    $("#show-result").empty();
    $("#show-result").append('<p>' + result + '</p>');
    $("#new-decrypt-line").val('');
  });

});
