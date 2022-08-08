// let galleryBtn=document.getElementById("galleryBtn")

// let gallerySection=document.getElementById("galleryContainer")
// galleryBtn.onclick=function(){
//     let newDiv=document.createElement("div")

//     let newHeader=document.createElement("h2")
//     newHeader.className="gallery"
//     newHeader.innerHTML="Gallery"

//     let image=document.createElement("img")
//     image.className="image"
//     image.src="images/Loading_icon.gif"

//     let newP=document.createElement("P")
//     newP.className="datetaken"
//     newP.innerHTML="Date Taken: "

//     let newP1=document.createElement("p")
//     newP1.className="description"
//     newP1.innerHTML="Description: "

//     // let cycleBtn=document.createElement("button")
//     // cycleBtn.className="cycleBtn"
//     // cycleBtn.innerHTML="Cycle"

//     newDiv.appendChild(newHeader)
//     newDiv.appendChild(image)
//     newDiv.appendChild(newP)
//     newDiv.appendChild(newP1)
//     // newDiv.appendChild(cycleBtn)

//     gallerySection.appendChild(newDiv)
// }



//dragging feature
let movesection= document.getElementById("movesection")
let movesection1= document.getElementById("movesection1")
let movesection2= document.getElementById("movesection2")
let movesection3= document.getElementById("movesection3")


//
let isMouseDownWeaponsDiv=false;
movesection.onmousedown=function(){
    isMouseDownWeaponsDiv=true;
}

movesection.onmouseup=function(){
    isMouseDownWeaponsDiv=false;
    movesection.style.backgroundColor="blue"
}

//
let isMouseDownWeaponsDiv1=false;
movesection1.onmousedown=function(){
    isMouseDownWeaponsDiv1=true;
}

movesection1.onmouseup=function(){
    isMouseDownWeaponsDiv1=false;
    movesection1.style.backgroundColor="red"
}

//
let isMouseDownWeaponsDiv2=false;
movesection2.onmousedown=function(){
    isMouseDownWeaponsDiv2=true;
}

movesection2.onmouseup=function(){
    isMouseDownWeaponsDiv2=false;
    movesection2.style.backgroundColor="green"
}

//
let isMouseDownWeaponsDiv3=false;
movesection3.onmousedown=function(){
    isMouseDownWeaponsDiv3=true;
}

movesection3.onmouseup=function(){
    isMouseDownWeaponsDiv3=false;
    movesection3.style.backgroundColor="grey"
}

//
document.onmousemove=function(event){
    if(isMouseDownWeaponsDiv1){
        movesection1.onmousemove=function(){
            movesection1.style.position="absolute"
            movesection1.style.zIndex=1000
            movesection1.style.left= (event.pageX-movesection1.offsetWidth/2)+"px"
            movesection1.style.top= (event.pageY-movesection1.offsetHeight/2)+"px"
            movesection1.style.width="750px"
        }
    }

    if(isMouseDownWeaponsDiv){
        movesection.onmousemove=function(){
            movesection.style.position="absolute"
            movesection.style.zIndex=1000
            movesection.style.left= (event.pageX-movesection.offsetWidth/2)+"px"
            movesection.style.top= (event.pageY-movesection.offsetHeight/2)+"px"
            movesection.style.width="750px"
            }
        }

    if(isMouseDownWeaponsDiv2){
        movesection2.onmousemove=function(){
            movesection2.style.position="absolute"
            movesection2.style.zIndex=1000
            movesection2.style.left= (event.pageX-movesection2.offsetWidth/2)+"px"
            movesection2.style.top= (event.pageY-movesection2.offsetHeight/2)+"px"
            movesection2.style.width="750px"
            }
        }

    if(isMouseDownWeaponsDiv3){
        movesection3.onmousemove=function(){
            movesection3.style.position="absolute"
            movesection3.style.zIndex=1000
            movesection3.style.left= (event.pageX-movesection3.offsetWidth/2)+"px"
            movesection3.style.top= (event.pageY-movesection3.offsetHeight/2)+"px"
            movesection3.style.width="750px"
            }
        }
}

//gallery
let imageselected=document.querySelector(".image");
let datetaken=document.querySelector(".datetaken")
let description=document.querySelector(".description")
let cycleBtn1=document.getElementById("cycleBtn")

cycleBtn1.onclick=function(event){
    event.preventDefault();
    let randomIndex=Math.floor(Math.random()*data.length);

    datetaken.innerHTML="Date Taken: "+ data[randomIndex].date
    description.innerHTML="Description: "+ data[randomIndex].description
    imageselected.src=data[randomIndex].img
}