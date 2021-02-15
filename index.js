var dogDateOfBirth = 0;
var pictureDateOfBirth = 0;


var fileSelector = $("#dogimg1")[0];
fileSelector.addEventListener('change', function(e) {
  var fileList = e.target.files;
  console.log(fileList.prototype);
});
