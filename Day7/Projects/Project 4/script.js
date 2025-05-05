var inp=document.querySelector("input");
var data=[
    {name:"Adriana", src:"https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg" },
    {name:"Milly", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTWMdWCC7GdXFGOq9XDB5BVC-Clp7kq4oGA&s"},
    {name:"Ellen", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7qEkHj1pk1rwwRHAB_O9oKAB4xtw_Ws01Q&s"},
    {name:"Elif", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknLfoxKk38a2ZQqRDYUSIX_GxPK4qLub1Bw&s"},
];

var per="";
data.forEach(function(elem){
    per+= `<div class="person">
                    <img class="img" src=${elem.src}>
                    <h4>${elem.name}</h4>
                </div>`;

});

document.querySelector(".people").innerHTML=per;

inp.addEventListener("input", function(){
    // var matching = data.filter(e => e.name.toLowerCase().startsWith(inp.value.toLowerCase()));
    var matching = data.filter(e => e.name.startsWith(inp.value));

var newUser="";
matching.forEach(function(elem){
    newUser+= `<div class="person">
                    <img class="img" src=${elem.src}>
                    <h4>${elem.name}</h4>
                </div>`;

});

document.querySelector(".people").innerHTML=newUser;
});