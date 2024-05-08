const gameContainer = document.querySelector(".container"), //dom elements
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  //loop each option image work for user
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "rock.png";
    result.textContent = "wait......";
    //loop each option image work for user
    optionImages.forEach((image2, index2) => {
      //if user image and cpu image is not same then remove active
      index !== index2 && image2.classList.remove("active");
    });
    gameContainer.classList.add("start");
    //timeout for waiting
    setTimeout(() => {
      gameContainer.classList.remove("start");
      //get clicked option image for user
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;
      //random no.
      let randomNumber = Math.floor(Math.random() * 3);
      //create array for cpu image
      let cpuImages = ["rock.png", "paper.png", "scissors.png"];
      cpuResult.src = cpuImages[randomNumber];
      //assign values
      let cpuValue = ["R", "P", "S"][randomNumber];

      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };
      let ouComeValue = outcomes[userValue + cpuValue];
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${ouComeValue} Won!!`;
    }, 1500);
  });
});
