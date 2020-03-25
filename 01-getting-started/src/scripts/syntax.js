const functions = {
  
//1. define attributes / variables
    // number
    // string
    // boolean
    // array
    // dictionary / objects
    // undefined

//2. sample if / else

//3. functions
    // parameters
    // returns

//4. arrays
    // add to the front
    // add to the end
    // update values

//5. loops 
    // for
    // for/in
    // while
    // do while
    // forEach (with array and function)

//6. Objects / Dictionaries
    // declare object
    // lookup key to retrieve the value


  
//1. define attributes / variables

  // number

  addFive: num1 => {
    return num1 + 5;
  },

  // string

  changeUpperCase: str => {
    return str.toUpperCase();
  },

  // boolean

  greaterThanTen: num1 => {
    return num1 > 10;
  },

  // array

  letterArray: arr => {
    return arr.length;
  },

  // dictionary / objects

  personTraits: object => {
    return object.eyeColour;
  },

  // undefined

  undefinedProperty: input => {
    return input == 0;
  },

//2. sample if / else

  drinkingAge: () => {
    if (Number < 18) {
      return "you are under the legal drinking age";
    } else {
      (Number >= 18)
      return "enjoy your drink";
    }
  },


//3. functions

  // parameters

  myFunction: (x,y) => {
    return x + y;
 },

  // returns


//4. arrays

  // add to the front

  addFront: (list, str) => {
    list.unshift(str);
    return list;
  },

  // add to the end

  addEnd: (list, str) => {
    list.push(str);
    return list;
  },

  // update values WTF?

  
//5. loops

  // for/in

  simpleLoop: () => {

    for (let i = 0; i < 10; i++) {
      console.log(i);

    }
  },
  
  // while

ageWhile: () => {

while (age < 10) {
    
  console.log ("Your age is less than 10");
  age ++

  } 
},

  // do while

doWhile: () => {

  do {
    return "Hello little one"
  }
  while (age < 10);

},

  // forEach (with array and function)

  forEach: () => {
  function myFunction(item, index, arr) {
    arr[index] = item * 10;
  }
  
},


  //6. Objects / Dictionaries

  // declare object

  personTraits: () => {

    name: "Harriet";
    age: "90";
    hobby: "purusing freedom";
    isMarried: false;
    abilities: ["strategic", "fearless", "methodical", "determined"];
  },

  // lookup key to retrieve the value



};


export default functions;
