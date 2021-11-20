// JavaScript Document



var assert = require("chai").assert;
var Email = require('../app/Email');
var SpecialChar = require('../app/SpecialChar');
var Zipcode = require('../app/Zipcode');

/**
 *  Validate an Email Test Plan
 *  Assumptions - End hyphens are only there to mark data that has been copied to a testing function
 * 
 *  valid emails
 * 
 *  email@email.com-
 *  email1@email.com-
 *  email@email.co-
 *  email1@email.co-
 *  email_email@email.com-
 *  email-email@email.com-
 *  email.email@email.com-
 *  email@email-email.com-
 *  email@email.com.com-
 *  234234@email.com-
 * 
 *  invalid emails
 * 
 *  email$@email.com-
 *  email.com-
 *  email@email..com
 *  email..email@email.com-
 *  .email@email.com-
 *  email@email.c-
 *  email@email#email.com-
 */

describe("Testing Email Validation", function(){

    it("Email: email@email.com, result sb true", function(){
        var obj = new Email("email@email.com");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email1@email.com, result sb true", function(){
        var obj = new Email("email1@email.com");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email@email.co, result sb true", function(){
        var obj = new Email("email@email.co");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email1@email.co, result sb true", function(){
        var obj = new Email("email1@email.co");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email_email@email.com, result sb true", function(){
        var obj = new Email("email_email@email.com");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email-email@email.com, result sb true", function(){
        var obj = new Email("email-email@email.com");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email.email@email.com, result sb true", function(){
        var obj = new Email("email.email@email.com");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email@email-email.com, result sb true", function(){
        var obj = new Email("email@email-email.com");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email@email.com.com, result sb false", function(){
        var obj = new Email("email@email.com.com");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: 234234@email.com, result sb false", function(){
        var obj = new Email("234234@email.com");
        assert.equal(obj.validateEmail(), true);
    });

    it("Email: email$@email.com, result sb false", function(){
        var obj = new Email("email$@email.com");
        assert.equal(obj.validateEmail(), false);
    });

    it("Email: email.com, result sb false", function(){
        var obj = new Email("email.com");
        assert.equal(obj.validateEmail(), false);
    });

    it("Email: email..email@email.com, result sb false", function(){
        var obj = new Email("email..email@email.com");
        assert.equal(obj.validateEmail(), false);
    });

    it("Email: .email@email.com, result sb false", function(){
        var obj = new Email(".email@email.com");
        assert.equal(obj.validateEmail(), false);
    });

    it("Email: email@email.c, result sb false", function(){
        var obj = new Email("email@email.c");
        assert.equal(obj.validateEmail(), false);
    });

    it("Email: email@email#email.com, result sb false", function(){
        var obj = new Email("email@email#email.com");
        assert.equal(obj.validateEmail(), false);
    });

    it("Email: email.email.commmmmmmmmmmm, result sb false", function(){
        var obj = new Email("email.email.commmmmmmmmmmm");
        assert.equal(obj.validateEmail(), false);
    });


});

/**
 *  Validate a zipcode test plan
 *  Assumptions- valid zip codes range from 00001 to 99950.  Valid format can be 11111 or 11111-1111
 *  All zip codes are strings because of the hyphen, this way they aren't treated as an expression
 *  5 digits zip codes ranging from 00001 to 99950 are valid, any value below or above that number are invalid 
 *  End hyphens are only there to mark data that has been copied to a testing function
 * 
 *  valid zip codes
 *  
 *  00001-
 *  99950-
 *  00001-1234-
 *  99950-1234-
 * 
 *  invalid zip codes
 * 
 *  00000-
 *  -12345-
 *  1234-
 *  1234a-
 *  12345-123-
 *  12345-123a-
 *  12345*1234-
 *  99951-
 */

describe("Testing Zipcode Validation", function(){

    it("Zipcode: 00001, result sb true", function(){
        var obj = new Zipcode("00001");
        assert.equal(obj.validateZipcode(), true);
    });

    it("Zipcode: 99950, result sb true", function(){
        var obj = new Zipcode("99950");
        assert.equal(obj.validateZipcode(), true);
    })

    it("Zipcode: 00001-1234, result sb true", function(){
        var obj = new Zipcode("00001-1234");
        assert.equal(obj.validateZipcode(), true);
    })

    it("Zipcode: 99950-1234, result sb true", function(){
        var obj = new Zipcode("99950-1234");
        assert.equal(obj.validateZipcode(), true);
    })

    it("Zipcode: 00000, result sb false", function(){
        var obj = new Zipcode("00000");
        assert.equal(obj.validateZipcode(), false);
    })

    it("Zipcode: -12345, result sb false", function(){
        var obj = new Zipcode("-12345");
        assert.equal(obj.validateZipcode(), false);
    })

    it("Zipcode: 1234, result sb false", function(){
        var obj = new Zipcode("1234");
        assert.equal(obj.validateZipcode(), false);
    })

    it("Zipcode: 1234a, result sb false", function(){
        var obj = new Zipcode("1234a");
        assert.equal(obj.validateZipcode(), false);
    })

    it("Zipcode: 12345-123, result sb false", function(){
        var obj = new Zipcode("12345-123");
        assert.equal(obj.validateZipcode(), false);
    })

    it("Zipcode: 12345-123a, result sb false", function(){
        var obj = new Zipcode("12345-123a");
        assert.equal(obj.validateZipcode(), false);
    })

    it("Zipcode: 12345*1234, result sb false", function(){
        var obj = new Zipcode("12345*1234");
        assert.equal(obj.validateZipcode(), false);
    })

    it("Zipcode: 99951, result sb false", function(){
        var obj = new Zipcode("99951");
        assert.equal(obj.validateZipcode(), false);
    })

});

/**
 *  Replace "/<>" with "-" Test Plan
 *  Assumptions - all inputs will be strings
 * 
 *  input      result
 *  
 *  /           -
 *  <           -
 *  >           -
 *  /<>         ---
 *  / < >       - - -
 *  ab/c        ab-c
 *  ab<c        ab-c
 *  ab>c        ab-c
 *  1/2         1-2
 *  1<2         1-2
 *  1>2         1-2
 *  abc         abc
 *  123         123
 *  1#23        1#23
 *  a*bc        a*bc
 *  1>#23       1-#23
 *  a^/bc       a^-bc
 */

describe("Testing Replace Special Characters", function(){

    it("String: /, result sb -", function(){
        var obj = new SpecialChar("/");
        assert.equal(obj.replaceSpecChars(), "-");
    })

    it("String: <, result sb -", function(){
        var obj = new SpecialChar("<");
        assert.equal(obj.replaceSpecChars(), "-");
    })

    it("String: >, result sb -", function(){
        var obj = new SpecialChar(">");
        assert.equal(obj.replaceSpecChars(), "-");
    })

    it("String: /<>, result sb ---", function(){
        var obj = new SpecialChar("/<>");
        assert.equal(obj.replaceSpecChars(), "---");
    })

    it("String: ab/c, result sb ab-c", function(){
        var obj = new SpecialChar("ab/c");
        assert.equal(obj.replaceSpecChars(), "ab-c");
    })

    it("String: ab<c, result sb ab-c", function(){
        var obj = new SpecialChar("ab<c");
        assert.equal(obj.replaceSpecChars(), "ab-c");
    })

    it("String: ab>c, result sb ab-c", function(){
        var obj = new SpecialChar("ab>c");
        assert.equal(obj.replaceSpecChars(), "ab-c");
    })

    it("String: 1/2, result sb 1-2", function(){
        var obj = new SpecialChar("1/2");
        assert.equal(obj.replaceSpecChars(), "1-2");
    })

    it("String: 1<2, result sb 1-2", function(){
        var obj = new SpecialChar("1<2");
        assert.equal(obj.replaceSpecChars(), "1-2");
    })

    it("String: 1>2, result sb 1-2", function(){
        var obj = new SpecialChar("1>2");
        assert.equal(obj.replaceSpecChars(), "1-2");
    })

    it("String: abc, result sb abc", function(){
        var obj = new SpecialChar("abc");
        assert.equal(obj.replaceSpecChars(), "abc");
    })

    it("String: 123, result sb 123", function(){
        var obj = new SpecialChar("123");
        assert.equal(obj.replaceSpecChars(), "123");
    })
    
    it("String: 1#23, result sb 1#23", function(){
        var obj = new SpecialChar("1#23");
        assert.equal(obj.replaceSpecChars(), "1#23");
    })

    it("String: a*bc, result sb a*bc", function(){
        var obj = new SpecialChar("a*bc");
        assert.equal(obj.replaceSpecChars(), "a*bc");
    })

    it("String: 1>#23, result sb 1-#23", function(){
        var obj = new SpecialChar("1>#23");
        assert.equal(obj.replaceSpecChars(), "1-#23");
    })

    it("String: a^/bc, result sb a^-bc", function(){
        var obj = new SpecialChar("a^/bc");
        assert.equal(obj.replaceSpecChars(), "a^-bc");
    })


});

