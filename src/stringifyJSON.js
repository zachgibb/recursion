// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  console.log(obj);
  switch(typeof obj) {
      case "function":
          // fall through
      case "undefined":
          return undefined;

      case "boolean":
          // fall through
      case "number":
          // fall through
          return obj.toString();

      case "string":
          obj = "\"" + obj + "\"";
          return obj;

      case "object":
          if (obj == null) {
            return 'null';
          } else if (Array.isArray(obj)) {

            var newObj = []; 
            for (var i = 0; i != obj.length; i++) {
              
              var item = stringifyJSON(obj[i]);
              newObj.push(item);
            };
            obj = "["+ newObj.join() +"]";
            return obj;

          } else {

            console.log('this is a real object');
            var newObj = '';
            var i = 0; 

            for (var prop in obj) {

              var key = stringifyJSON(prop) + ":";
              var value = stringifyJSON(obj[prop]);

              if (value !== undefined) {

                if(i != 0) {

                  newObj += ",";

                }

                i++;
                newObj += (key + value);

              }
              
            };
            obj = "{"+ newObj +"}";

            console.log(obj);
            return obj;

          }
  }
};
