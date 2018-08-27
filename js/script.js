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
  $(".category_container-item").click(function() {
    var category = $(this).attr("id");

    if (category == "all") {
      $(".card").addClass("hide");
      setTimeout(function() {
        $(".card").removeClass("hide");
      }, 300);
    } else {
      $(".card").addClass("hide");
      setTimeout(function() {
        $("." + category).removeClass("hide");
      }, 300);
    }
  });
  $(".scroll").click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });
});
