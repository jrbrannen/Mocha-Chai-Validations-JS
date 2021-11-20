// JavaScript Document

var SpecialChar = function(inString){
    this.inString = inString;
};

SpecialChar.prototype.replaceSpecChars = function(){
    let newString = "";
    let pattern = /[\/,\<,\>]/;

    for(let i = 0; i < this.inString.length; i++){
        let char = this.inString[i];
        if(char.match(pattern)){
            char = char.replace(pattern, "-");
        }
        newString += char;
    }
    return newString;
};

module.exports = SpecialChar;