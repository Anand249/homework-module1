function footerImages() {
  var photos = []; //Decalre an emty array to store image element
  var fileNames = []; //Decalre an emty array to store image file name
  var imageList = []; //Decalre an emty array to store html list that contains an image
  var image; //Declare an empty variable to store the assembled image list codes
  var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
  var closeList = "</li>"; //Declare a variable to contain close list tag
  var imageType = [
    "bustour",
    "cabinrental",
    "campingadv",
    "collegetours",
    "rentalbike",
    "tourgroup",
  ]; //Declare a variable to push the image type

  //Create a loop to create 6 images string with index of 0
  for (var i = 0; i < 6; i++) {
    fileNames.push("partner" + "-" + imageType[i]); //Create image file name and store in the array
    photos.push("<img src='images/partners/" + fileNames[i] + ".png'>"); //Assemble file name into image element and store in an array
    image = openList + photos[i] + closeList; //Assemble image element from array with list element and store in a variable
    imageList.push(image); //Store(push) the assembled list codes into an array
    console.log("imageList", imageList);
  }

  //Display all six image codes stored in the array
  document.getElementById("partners").innerHTML = imageList;
}
footerImages();
