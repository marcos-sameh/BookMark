var WebsiteName = document.getElementById("WebsiteName");

var WebsiteLink = document.getElementById("WebsiteLink");

// var Websites = [];


if (localStorage.getItem("myWebsites") != null) {
   var  Websites = JSON.parse(localStorage.getItem("myWebsites")) ;
    displayBookMark(); 
}else{
var  Websites = [];

}

function saveBookMark(url) {

// console.log(url);
var Website = {
    name : WebsiteName.value,
    url : WebsiteLink.value,
}
var regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

if(!Website.name  || !Website.url){
    alert("Plz Enter  Vaild Site Name And Url");
    WebsiteName.classList.add("is-invalid");
    WebsiteLink.classList.add("is-invalid");
}else if(regex.test(Website.url) != true){
    alert("Plz Enter  Vaild Url");
    WebsiteLink.classList.add("is-invalid");
 
   WebsiteName.classList.add("is-valid");


}else{
 Websites.push(Website);
  localStorage.setItem("myWebsites", JSON.stringify(Websites));
  WebsiteName.classList.remove("is-invalid");
  WebsiteLink.classList.remove("is-invalid");
  WebsiteName.classList.add("is-valid");
    WebsiteLink.classList.add("is-valid");
}

 
  
 displayBookMark(); 
 clearINnputs();
}

function displayBookMark() {
    var cartona = ``;
 
for (let i = 0; i < Websites.length; i++) {
    cartona += ` <tr>
    <td >${Websites[i].name}</td>
    <td ><a href="https://${Websites[i].url}" target="_blank" >${Websites[i].url}</a></td>
    <td><button class="btn btn-warning text-white"> <a class="btn-visit" href="https://${Websites[i].url}" target="_blank">Visit</a></button></td>
    <td><button class="btn btn-danger text-white" onclick="deleteWebSite(${i})">Delete</button></td>
</tr>
`   
}
document.getElementById("table-info").innerHTML = cartona
    
}


function clearINnputs() {
    WebsiteName.value = "";
    WebsiteLink.value = "";
  WebsiteName.classList.remove("is-valid");
  WebsiteLink.classList.remove("is-valid");

  }
  productList = JSON.parse(localStorage.getItem("myWebsites")) ;
  displayBookMark();

 

function deleteWebSite(index) {
    Websites.splice(index ,1);
  localStorage.setItem("myWebsites", JSON.stringify(Websites));
  displayBookMark();
 }