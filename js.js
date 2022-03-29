window.addEventListener("load", init);
var elemek = [];
    
var kat = false;
function ID(elem){
    return document.getElementById(elem);
}

function CLASS(elem){
    return document.getElementsByClassName(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
tabla();
szinezes();
feltoltes();
kattintas();
}

function tabla(){
    var t = "";
    for (let index = 0; index < 64; index++) {
        t =  t + "<div id='"+index+"' class='tablak'><img class='"+index+"'id='k"+index+"' src='#' alt=''></div>";
    }
    ID("tabla").innerHTML = t;
}

function szinezes(){
    var tomb = $(".tablak");
    var nulla = 0;
    var sor = 8;
    for (let index = 0; index < tomb.length; index++) {
            if(index == sor){
                nulla = 1;
            }else if(index == sor+8){
                nulla = 0;
                sor +=16;
            }
            if(index % 2 == nulla){
                tomb[index].style.backgroundColor = "black";
            }else{
                tomb[index].style.backgroundColor = "white";
            }

    }
}

function feltoltes(){    
    var i = 1;
     for (let index = 0; index < 64; index++) {
         if (index < 16 || index > 47) {
             var kep = ID("k"+index);
             kep.src = "gy.jpg";    
             elemek[i] = kep.id;
             ID(elemek[i]).addEventListener("click",kattintas);

             i++;
         }
     }
     console.log(elemek);
     
}

function kattintas(){
    var i = event.target.id;
        if(elemek.indexOf(i) && !(kat)){
            var index = elemek.indexOf(i);
            console.log(i);
            ID(elemek[index]).src = "#";
            var mentes =index;
            delete elemek[index];
            kat = true;
        
    }
    else if(kat){

        ID(i).addEventListener("click",kattintas);
        var img = document.createElement('img');
        img.src = "gy.jpg";
        
        ID(i).appendChild(img);
        elemek[mentes] = i;
        
        console.log("KAT:OFF");
        kat = false;
    }
    
}
