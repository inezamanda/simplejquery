$(document).ready(function () {
  $("#formAddBook").submit(function (event) {
    // console.log($("#newBook").val());
    const inpValue = $("#newBook").val();
    if (inpValue != "") {
      $("#bookOptions").append(`<option value="">${inpValue}</option>`);
      alert("New book has been added!");
    }
    $("#newBook").val("");
    event.preventDefault();
  });
  $("#btnToggle").click(function (event) {
    // console.log("hehe");
    if (!$(".card").hasClass("active")) $(".card").addClass("active");
    else $(".card").removeClass("active");
  });
});

var typed = new Typed(".typing-text", {
  strings: ["Try It!"],
  typeSpeed: 180,
  loop: true,
});

// efek sticky header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
