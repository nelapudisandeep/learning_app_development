let mask = document.getElementById("mask");
window.addEventListener("DOMContentLoaded",(e)=>{
    mask.style.display = "block";
    getData();
});
async function getData(){
    const response = await fetch('/database');
    const data = await response.json();
    if(data){
        setTimeout(()=>{
            mask.style.display = "none";
            createBlock(data);
        },2500);
    }
    
}

function createBlock(details){
    let parent_div = document.getElementById("database");
    for(let i = 0;i<details.length;i++){
    let heading = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.innerHTML = details[i].Description;
    let theDate = new Date(details[i].timeStamp);
    dateString = theDate.toGMTString();
    p2.innerText = details[i].Image;
    heading.innerText = details[i].Heading;
    let enclosure = document.createElement("div");
    enclosure.setAttribute("class","enclosure");
    enclosure.append(heading,p1,p2);
    parent_div.appendChild(enclosure);
    }
}

// function IsValidJSONString(str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }