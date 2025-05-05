var btn= document.querySelector('button');
var img1= document.querySelector('#image1');
var img2= document.querySelector('#image2');

btn.addEventListener('click', function(){
    var src1=img1.src;
    var src2=img2.src;

    img1.src=src2;
    img2.src=src1; 
});