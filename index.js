
document.getElementById("submit").addEventListener("click",getdata) ;

function getdata(){
    var query=document.getElementById("movies").value;
  
    // let res;
    // let data=[];
    // const url=`http://www.omdbapi.com/?apikey=tt3896198&s=${query}`;
    
    const container=document.getElementById("container")    ;
    container.innerHTML=[]
    
    fetch(`http://www.omdbapi.com/?apikey=bf5e9dd3&s=${query}`)
    .then(function(res){
    
        return res.json();
      
    })
    .then(function(res){
        data=res.Search;
        console.log(data);
        appendData(data);
    
    })
    .catch(function(err){
        console.log(err);
    });
}


function appendData(data){

    if(data==undefined){
        let img1=document.createElement("img");
        img1.src=`https://t4.ftcdn.net/jpg/01/34/10/11/240_F_134101197_QPMd8lVVkQBKn4X2HwzLpUB0MCYglch1.jpg`;
        
        document.getElementById("container").append(img1);
            }


data.forEach(function(el){

    console.log(el)

let div=document.createElement("div");

let title=document.createElement("p");
title.innerText=el.Title;

let year=document.createElement("p");
year.innerText=el.Year;

let image=document.createElement("img");
image.src=el.Poster;
// let imdb=document.createElement("p");

// imdb.innerText=el.imdbID;

div.append(image,title,year);
document.getElementById("container").append(div);
console.log(data.imdb)
if(data.imdb<8.5){
    container.append(imdb);
}

    });
}

