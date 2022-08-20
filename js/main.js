function rating(){
    alert("Thank for rating");
}

function loadContent(){
  
    document.getElementById("img_1").innerHTML=" ";
    document.getElementById("img_2").innerHTML=" ";
    document.getElementById("img_3").innerHTML=" ";
    var img_1 = document.getElementById("img_1");
    var img_2 = document.getElementById("img_2");
    var img_3 = document.getElementById("img_3");

    const rndInt = Math.floor(Math.random() * 6) + 1;
    console.log(rndInt)
    if(rndInt<6 && rndInt>1){
         var rndInt2= rndInt+1;
         var rndInt3= rndInt-1;
         console.log(rndInt2)
         console.log(rndInt3)
    }
    else if(rndInt==6){
        var rndInt2= rndInt-1;
        var rndInt3= rndInt-2;
        console.log(rndInt2)
         console.log(rndInt3)
    }
    else if(rndInt==1){
        var rndInt2= rndInt-1;
        var rndInt3= rndInt+2;
        console.log(rndInt2)
         console.log(rndInt3)
    }

    var img= document.createElement("img")
    img.src= Gallary[rndInt].image.src;
    img.alt= Gallary[rndInt].image.alt;
    img.width= Gallary[rndInt].image.width;
    img.height= Gallary[rndInt].image.height;
    img_1.appendChild(img);

    var img2= document.createElement("img")
    img2.src= Gallary[rndInt2].image.src;
    img2.alt= Gallary[rndInt2].image.alt;
    img2.width= Gallary[rndInt2].image.width;
    img2.height= Gallary[rndInt2].image.height;
    img_2.appendChild(img2);
    
    var img3= document.createElement("img")
    img3.src= Gallary[rndInt3].image.src;
    img3.alt= Gallary[rndInt3].image.alt;
    img3.width= Gallary[rndInt3].image.width;
    img3.height= Gallary[rndInt3].image.height;
    img_3.appendChild(img3);

}