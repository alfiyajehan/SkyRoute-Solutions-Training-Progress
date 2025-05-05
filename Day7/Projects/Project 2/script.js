// var uname= document.querySelector('#username');
// var email= document.querySelector('#email');
// var pw = document.querySelector('#password');
// var h4=document.querySelector('h4');

// document.querySelector('form').addEventListener('submit', function(event){
//     event.preventDefault();
//     if(uname.value==='' || email.value==='' || pw.value=='') {
//         h4.textContent='Error, some feilds are blank!';
//         h4.style.color='red';
//     }

// })

var inp=document.querySelectorAll('input[type="text"]');
var h4=document.querySelector('h4');

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    // inp.forEach(function(inps){
    //     if(inps.value.trim()===''){
    //             h4.textContent='Error, some feilds are blank!';
    //             h4.style.color='red';
    //     }
    //     })

    for(var i=0;i<inp.length;i++){
        if(inp[i].value.trim()===''){
            h4.textContent='Error, some feilds are blank!';
            h4.style.color='red';
            break;
        }

    }
})
