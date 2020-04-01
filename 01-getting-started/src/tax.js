//JS file for Extra 4-3

"use strict"

var $ = function(id){
    return document.getElementById(id);
};


var processEntry = function(){
    var income = parseFloat($("income").value);

    if(isNaN(income)){
        alert("Taxable income must be a valid numerical entry");
    }
    else if(income < 0){
        alert("Taxable Income must be a valid entry greater than or equal to $0");
    }
    else{
        calcIncomeTax(income);        
    }
}


var calcIncomeTax = function(income){
    if(income <= 48535){
        var taxedIncome = parseFloat(income * .15);        
    }
    else if(income > 48535 && income < 97069){       
       var twenty = parseFloat((income - 48535) * .205);
       var taxedIncome = fifteenPercentTax() + twenty;
    }
    else if(income > 97069 && income < 150473){        
        var twentyfive = parseFloat((income - 97069) * .26);
        var taxedIncome = twentyPercentTax() + twentysix;
    }
    else if(income > 150473 && income < 214368){        
        var twentyeight = parseFloat((income - 150473) * .29);
        var taxedIncome =twentySixPercentTax() + twentynine;
    }    
    else {       
        var thirtythree = parseFloat((income - 214368) * .33);
        var taxedIncome = twentyNinePercentTax() + thirtythree;
    }
   
    $("taxesOwed").value = taxedIncome.toFixed(2);
}

var fifteenPercentTax = function(){
    var fifteen = 48535 * .15;
    return fifteen;
}
var twentyPercentTax = function() {
    var twenty = (97069 - 48535) * .205;
    fifteen += twentyPercentTax();
    return twenty;
}
var twentySixPercentTax = function() {
    var twentysix = (150473 - 97069) * .26;
    twenty += twentySixPercentTax();
    return twentysix;
}
var twentyNinePercentTax = function(){
    var twentynine = (214368 - 150473) * .29;
    twentysix += twentyNinePercentTax();
    return twentynine;
}
var thirtyThreePercentTax = function(){
    var thirtythree = 214368 * .33;
    twentynine += thirtyThreePercentTax();
    return thirtythree;
}

// var thirtyFivePercentTax = function(){
//     var thirtyfive = (415050 - 413350) * .35;
//     thirtyfive += thirtyThreePercentTax();
//     return thirtyfive;
// }

window.onload = function(){
    $("calculate").onclick = processEntry;
    $("income").focus();
}