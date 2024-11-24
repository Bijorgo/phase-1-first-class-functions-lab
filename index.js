// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
};
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);


const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
};
(['Antonia', 'Nuru', 'Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ];

function createFareMultiplier(integer){
    //takes one argument, (integer)
    //returns a function
        //multiplies fare for ride by (integer)
    function fn(fare){
        return fare * integer;
    };
    return fn;
};

const fareDoubler = createFareMultiplier(2);

/* alt way that I originally came up with:

const variableName = createFareMultiplier();
const fareDoubler(fare){
    return createFareMultiplier(2)(fare)
    //variableName(2)(fare);
};  */

const fareTripler = createFareMultiplier(3);

//const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function selectDifferentDrivers(array = ['Antonia', 'Nuru', 'Amari', 'Mo'],fn){
    //takes 2 arguments: an array of drivers and fn
    //returns first two or last 2 drivers
    if (fn == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array);
    }else if (fn == returnLastTwoDrivers){
        return returnLastTwoDrivers(array);
    }
}



//function(outer arg),(inner arg)
//createFareMultiplier(integer)(fare)
