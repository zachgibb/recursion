// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  switch(typeof obj) {
      case "function":
      case "undefined":
          return undefined;

      case "boolean":
      case "number":
          return obj.toString();

      case "string": // wrap string in quotes
          obj = "\"" + obj + "\"";
          return obj;

      case "object": 
          if (obj == null) { // if null, return null

            return 'null';

          } else if (Array.isArray(obj)) { // if array, loop through array

            var newObj = []; 
            for (var i = 0; i != obj.length; i++) {   
              newObj.push( stringifyJSON(obj[i]) );
            };
            obj = "["+ newObj.join() +"]";
            return obj;

          } else { // if object, loop through object

            var newObj = '';
            var i = 0; 
            for (var prop in obj) {
              var key = stringifyJSON(prop) + ":";
              var value = stringifyJSON(obj[prop]);
              if (value !== undefined) {
                if(i != 0) {
                  newObj += ",";
                }
                newObj += (key + value);
                i++;
              }
            };
            return "{"+ newObj +"}";
            
          }
  }
};
