// JavaScript Document

var Email = function(inEmail){
    this.inEmail = inEmail;
};

Email.prototype.validateEmail = function(){
    let numLetterPattern = /^[0-9a-zA-Z]+$/;
    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let secToLastChar = this.inEmail.charAt(this.inEmail.length - 2);

    for(let i = 0; i < this.inEmail.length; i++){
        if(numLetterPattern.test(this.inEmail.substring(i, i + 1)) == false && (numLetterPattern.test(this.inEmail.substring(i + 1, i + 2)) == false) ){
            return false;
        }
    }
    if(emailPattern.test(this.inEmail) && numLetterPattern.test(this.inEmail.substring(0,1)) && (numLetterPattern.test(secToLastChar)) ){
        return true;
    }else{
        return false;
    }
};

module.exports = Email;