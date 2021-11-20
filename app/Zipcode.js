// JavaScript Document

var Zipcode = function(inZipcode){
    this.inZipcode = inZipcode;
};

Zipcode.prototype.validateZipcode = function(){
    let pattern = /^[0-9]{5}(?:-[0-9]{4})?$/

    if(parseInt(this.inZipcode) > 99950 || parseInt(this.inZipcode) < 1){
        return false;
    }
    else if(pattern.test(this.inZipcode)){
        return true;
    }
     else{
        return false;
    }
};
 //&& this.inZipcode > 0 && this.inZipcode <= 99950) || (Number.isInteger(this.inZipcode) && this.inZipcode > 0) && this.inZipcode < 99950)
module.exports = Zipcode;