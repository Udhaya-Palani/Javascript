var pdiv=document.getElementById("divid");
pdiv.style.backgroundColor="black";
var bulb=document.getElementById("img1");
var cat=document.getElementById("img2");
var on=document.getElementById("b1");
var off=document.getElementById("b2");

function switchon()
{
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    cat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
on.style.backgroundColor="green";
off.style.backgroundColor="white";
}

function switchoff()
{
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    cat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    on.style.backgroundColor="white";
    off.style.backgroundColor="red";
}