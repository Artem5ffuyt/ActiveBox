$(function() {
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).on("scroll",function(){
scrollPos = $(this).scrollTop();

console.log(scrollPos);
});



header.addClass("fixet");
});