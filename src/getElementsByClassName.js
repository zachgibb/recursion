// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elementArray = [];
  var elements = document.body.getElementsByTagName("*");
  if (document.body.classList.contains(className)) {
    elementArray.push(document.body);
  };
  for (var i = 0; i != elements.length; i++) {
    if (elements[i].classList.contains(className)) {
      elementArray.push(elements[i]);
    }
  };
  return elementArray;
};
