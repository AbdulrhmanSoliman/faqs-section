let questionsName = document.querySelectorAll(".question-name");


questionsName.forEach((question) => {
  question.addEventListener("click", function () {
    // Accessing question answer with nextElementSibling for each question and toggle hidden class
      this.nextElementSibling.classList.toggle("hidden");
    // Accessing each icon and change its src and alt 
      if(this.lastElementChild.alt == "icon-plus"){
        this.lastElementChild.src = "/assets/images/icon-minus.svg";
        this.lastElementChild.alt = "icon-minus";
      }else{
        this.lastElementChild.src = "/assets/images/icon-plus.svg";
        this.lastElementChild.alt = "icon-plus";
      }
  });
});
