const functions = {
  //1. define attributes / variables
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

  //2. sample if / else

  //NEED TO DO THIS!!!

  //3. functions
      // parameters
      // returns

  //NEED TO DO THIS

  //4. arrays
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

  //5. loops
      // for/in
      // while
      // do while
      // forEach (with array and function)

  //6. Objects / Dictionaries
      // declare object
      // lookup key to retrieve the value

  // declare object

  userDictionary: prov => {
    console.log("we're in the function", prov);
    const provinces = {
      sk: "saskatchewan",
      ab: "alberta"
    };
    console.log(provinces["sk"]);

    return "xyz";

    // name: "Harriet";
    //   age: "90";
    //   hobby: "purusing freedom";
    //   isMarried: false;
    //   abilities: ["strategic", "fearless", "methodical", "determined"];
  }
};

export default functions;
