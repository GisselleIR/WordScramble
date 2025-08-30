// JavaScript source code

function randomizeWord() {
    let originalWord = document.getElementById("input").value;
    originalWord = originalWord.toLowerCase();

    let randomized = originalWord.split("").sort(() => Math.random() - 0.5);
    randomized = randomized.join("");

    return randomized
}

function getGenAmount() {
    let wordAmount = document.getElementById("generate_number").value;
    let word = "word";

    if (wordAmount > 25) {
        document.getElementById("generate_number").value = 25;
    }

    if (document.getElementById("input").value != "") {
        for (i = 1; i <= 25; i++) {
            wordboxNum = word + i;

            if (i <= wordAmount) {

                document.getElementById(wordboxNum).innerHTML = randomizeWord();
                document.getElementById(wordboxNum).style.color = "rgba(0, 0 , 0 , 1)";

            }
            else {
                document.getElementById(wordboxNum).style.color = "rgba(0, 0 , 0 , 0)";
            }
            

        }
    }
    
}

