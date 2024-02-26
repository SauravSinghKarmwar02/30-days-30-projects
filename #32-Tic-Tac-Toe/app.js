// Get reference to the elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let popUp = document.querySelector(".winner");
let winner = document.querySelector(".winUser");
let closeBtn = document.querySelector(".close");

// Turn decider
let turn0 = true;

// Win condition
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Add click event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.classList.add("X");
            box.innerText = "X";
        } else {
            box.classList.add("O");
            box.innerText = "O";
        }
        box.disabled = true;

        checkWinner();

        turn0 = !turn0;
    });
});

// Reset button click event
resetBtn.addEventListener("click", resetVal);

function resetVal() {
    // Clear text and classes for all boxes
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("X", "O");
        box.disabled = false;
    });
    // Reset turn
    turn0 = true;
    winner.classList.remove("X", "O");
    popUp.classList.remove("openWinner");
}

// check winner function
const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                popUp.classList.add("openWinner");

                if (pos1Val === "X") {
                    winner.classList.add("X");
                    winner.innerText = "X";
                } else {
                    winner.classList.add("O");
                    winner.innerText = "O";
                }
            }
        }
    }
};

// Close button click event
closeBtn.addEventListener("click", () => {
    popUp.classList.remove("openWinner");
    resetVal();
});
