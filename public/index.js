let mask;
let modal;
let form;
window.addEventListener('load',(e)=>{
    e.preventDefault();
    form = document.getElementById("form");
});

document.getElementById("close").addEventListener("click",(e)=>{
    e.preventDefault();
    modal.style.display = "none";
});

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let heading = document.getElementById("content-heading");
    let description = document.getElementById("content-description");
    let image = document.getElementById("image-holder").files;
    modal = document.getElementById("error");
    // verfiying whether required fields are not empty
    if(heading.value.length!=0  && image.length && description.value.length!=0){
        // opening the loading page
        let loader = document.getElementById("mask");
        let success = document.getElementById("success");
        loader.style.display = "block";
        let dataObject  = {
            Heading:heading.value,
            Description:description.value,
            Image:image[0].name,
        };
        let validDataObject = JSON.stringify(dataObject);
        const options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : validDataObject
        };
        if(fetch("/uploading",options)){
            setTimeout(()=>{
                loader.style.display = "none";
            },1500);
            success.style.display = "block";
            setTimeout(()=>{
                success.style.display = "none";
                form.reset();
            },1500);
            
        }else{
            console.log("sorry!");
            
        }

    }else{
        modal.style.display = "block";
    }
});
