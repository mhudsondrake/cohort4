const functions = {
  // define attributes / variables
    // number
    // string
    // boolean
    // array
    // dictionary / objects
    // undefined


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

  // sample if / else

  //NEED TO DO THIS!!!

  // functions
    // parameters
    // returns

  //NEED TO DO THIS

  // arrays
    // add to the front
    // add to the end
    // update values

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

  // update values

  //loops

    // for/in
    // while
    // do while
    // forEach (with array and function)
  
  // Objects / Dictionaries
    // declare object
    // lookup key to retrieve the value


    // declare object

  userDictionary: (prov) => {
    console.log("we're in the function", prov);
    const provinces = {
      "sk": "saskatchewan",
      "ab": "alberta",
    };
    console.log(provinces["sk"]);
    
    return "xyz";

    // name: "Harriet";
  //   age: "35";
  //   hobby: "purusing freedom";
  //   isMarried: true;
  //   abilities: ["strong", "fearless", "methodical", "determined"];
  },

  
};

export default functions;
