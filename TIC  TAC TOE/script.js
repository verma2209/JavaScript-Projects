const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector(".reset-btn");
const newgame = document.querySelector(".newg-btn");
const msgcon = document.querySelector(".con");
const msguser = document.querySelector(".msguser");

let turn0 = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    win();
  });
});

const resetgame = () => {
  turn0 = true;
  enabledbox();
  msgcon.classList.add("hide");
};

const disabledbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledbox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (pos1val) => {
  msguser.innerText = ` Congatulation , Winner is ${pos1val} `;
  msgcon.classList.remove("hide");
  disabledbox();
};

const win = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
    }
  }
};

newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
