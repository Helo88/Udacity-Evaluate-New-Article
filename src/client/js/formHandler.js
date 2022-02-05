
function handleSubmit(event) {
  //clean o/p each time
  document.getElementById("results").innerHTML = "";

  event.preventDefault();
  
  // check what text was put into the form field and if its url proceed
  let formURL = document.getElementById("article_url").value;
  if (Client.checkForURL(formURL) !== true) {
    alert("Please Enter A valid Url For An Article!");
    return;
  }
console.log(formURL)
// send a  post request to backend with the valid url
  fetch("http://localhost:7000/sentiments", {
    method: "POST",
    mode: 'cors',
    credentials: "same-origin",
    headers: {
         "Access-Control-Allow-Origin":"*",
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
    
    body: JSON.stringify({'url':formURL})
})
 .then((res) =>res.json()).then((data)=>{ console.log("-----------------------------------",data)
  const results="<ul>"
  +
  `<li> <span> score_tag :  </span> ${data.score_tag} </li> `
  +
 `<li> <span> agreement : </span> ${data.agreement} </li> `
  +
  `<li> <span> confidence : </span> ${data.confidence} </li> `
  +
  `<li> <span> irony : </span> ${data.irony} </li> `
  +
  `<li> <span> subjectivity : </span> ${data.subjectivity} </li> `
   "</ul>"
   document.getElementById("results").innerHTML = results;
 })
}


export { handleSubmit };
