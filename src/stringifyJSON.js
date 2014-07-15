// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  console.log(obj);
  switch(typeof obj) {
      case "undefined":
          return undefined;

      case "boolean":
          // fall through
      case "number":
          // fall through
      case "function":
          return obj.toString();

      case "string":
          obj = "\"" + obj + "\"";
          return obj;

      case "object":
          if (obj == null) {
            return 'null';
          } else if (Array.isArray(obj)) {

            obj = "["+ obj +"]";
            return obj;
          } else {
            console.log('this is a real object');
          }
  }
};
