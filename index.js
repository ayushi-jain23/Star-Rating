let allstars = document.querySelector("ul");
let individualstar = document.querySelectorAll("li");

//CLICK
function clickme(index){ //3
    for(let i=0; i<index; i++){
        individualstar[i].classList.add("clickcolor");
    }
    for(let i=index; i<individualstar.length; i++){//1
        individualstar[i].classList.remove("clickcolor");
    }
}
allstars.addEventListener("click", function(e){
    let index2 = e.target.getAttribute("data-star-index");
    console.log(index2)
    clickme(index2);
});

//HOVERIN
function hoverIn(index){
    for (let i=0; i<index; i++){
        individualstar[i].classList.add("onHovercolor");
    }
}
allstars.addEventListener("mouseover", function(e){
    let index1 = e.target.getAttribute("data-star-index");
    console.log(index1)
    hoverIn(index1);
})

//HOVEROUT
function hoverOut(index){
    for (let i=0; i<index; i++){
        individualstar[i].classList.remove("onHovercolor");
    }
}
allstars.addEventListener("mouseout", function(e){
    let index = e.target.getAttribute("data-star-index");
    console.log(index)
    hoverOut(index);
})