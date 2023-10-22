$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass(".sticky");
    } else {
      $(".navbar").removeClass(".sticky");
    }
  });
});

// Email

window.addEventListener("load", function () {
  emailjs.init("zZ-s6e2D_LQaXtjuo");
});

let name_ = document.getElementById("name");
let email_ = document.getElementById("email");
let subject_ = document.getElementById("subject");
let message_ = document.getElementById("message");
let form = document.getElementById("handleSubmit");
let butt = document.getElementById("sendform");

function submitForm(e) {
  e.preventDefault();

  
  butt.disabled = true;
  console.log(butt.disabled);
  var temp = {
    subject: subject_.value,
    user_name: name_.value,
    from_name: "Muhammad Yahiya",
    user_email: email_.value,
    message: message_.value,
    reply_to: email_.value,
  };
  emailjs
    .send("service_5vrexu5", "template_tdau2um", temp, "zZ-s6e2D_LQaXtjuo")
    .then(
      function (response) {
        alert("SUCCESS!");
        console.log(response.status, response.text);
        subject_.value = "";
        name_.value = "";
        email_.value = "";
        message_.value = "";
        butt.disabled = false;
        console.log(butt.disabled);
      },
      function (error) {
        alert("FAILED...");
        console.log(error);
        butt.disabled = false;
      }
    );
}


form.addEventListener('submit', submitForm);



const cv = document.getElementById("downloadCV");

