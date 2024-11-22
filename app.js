document.addEventListener("DOMContentLoaded", () => {
  const navbare = document.querySelector(".navbare");
  const openNav = document.getElementById("open_nav");

  openNav.onclick = () => {
    navbare.classList.toggle("new_navbare");
    openNav.classList.toggle("fa-xmark");
    openNav.classList.toggle("fa-bars");
  };

  // Input validation
  const sendBtn = document.getElementById("send_btn");
  const emailInput = document.getElementById("email_input");
  const nameInput = document.getElementById("name_input");

  const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  sendBtn.onclick = () => {
    let valid = true;

    if (!namePattern.test(nameInput.value.trim())) {
      nameInput.style.borderColor = "red";
      valid = false;
    } else {
      nameInput.style.borderColor = "var(--primary-color)";
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.style.borderColor = "red";
      valid = false;
    } else {
      emailInput.style.borderColor = "var(--primary-color)";
    }

    if (valid) {
      alert("Thank you! The eBook is on its way!");
      nameInput.value = "";
      emailInput.value = "";
    }
  };
});



window.addEventListener("scroll", () => {
  const step_container = document.querySelector(".step_container");
  const author_details = document.querySelector(".author_details");
  const scrollY = window.scrollY;
  let nav =document.querySelector("nav ")
  if(scrollY>0){
    nav.classList.add("scroll_navbar")
  }else{
    nav.classList.remove("scroll_navbar")
  }
  if(window.innerWidth > 1024) {
    if (scrollY > 1000 && scrollY <= 4300) {
      step_container.style.position = "fixed";
      step_container.style.left = "70px";
      step_container.style.bottom = "20%";
      author_details.style.justifyContent = "end";
    } else {
      step_container.style.position = "";
     
    }
  }
  

});

let steps_container = document.querySelectorAll(".step_container a");

const steps_cont = () => {
  steps_container.forEach((item) => {
    item.onclick = () => {
      steps_container.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    };
  });
};
steps_cont();


