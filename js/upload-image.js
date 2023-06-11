let uploadButton = document.getElementById("upload-button");
let choosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");



uploadButton.onchange = () =>{
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    reader.onload = () =>{
    choosenImage.setAttribute("src", reader.result);
    }
    fileName.textContent= uploadButton.files[0].name;    
}



function myFunction() {
  const element1 = document.getElementById("file-name");
  element1.remove();
  const element2 = document.getElementById("chosen-image");
  element2.remove();

}

