window.onscroll = function() {
  navSticky();
};

let navBar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function navSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function() {
  $(".category_item").click(function() {
    var category = $(this).attr("id");

    if (category == "all") {
      $(".porject_img").addClass("hide");
      setTimeout(function() {
        $(".porject_img").removeClass("hide");
      }, 300);
    } else {
      $(".porject_img").addClass("hide");
      setTimeout(function() {
        $("." + category).removeClass("hide");
      }, 300);
    }
  });
});
