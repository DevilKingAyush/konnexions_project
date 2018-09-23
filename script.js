$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "5.jpg",
    "8.jpg",
    "10.jpg"
  ];

  var i = 0;

  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 2000);

});
