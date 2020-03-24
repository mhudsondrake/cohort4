const functions = {
  // define attributes / variables

  // number

  addFive: num1 => {
    // return 6;
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
  // functions
  // parameters
  // returns

  // arrays
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

  // for/in
  // while
  // do while
  // forEach (with array and function)
  
  // Objects / Dictionaries


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

  // declare object
  // lookup key to retrieve value
};

export default functions;
