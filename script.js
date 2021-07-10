h1.innerHTML = "Speler 1, kies je optie!";
h2.innerHTML = "0" + " : " + "0";
document.getElementById("steen2").style.visibility = "hidden";
document.getElementById("papier2").style.visibility = "hidden";
document.getElementById("schaar2").style.visibility = "hidden";

document.getElementById("steen").style.visibility = "visible";
document.getElementById("steen").style.visibility = "visible";
document.getElementById("steen").style.visibility = "visible";

var currentlanguage = "dutch";

document.getElementById("dutch").style.visibility = "hidden";

var input1 = null;
var input2 = null;

let timeout;

function changeLanguageDutch() {
    document.getElementById("english").style.visibility = "visible";
    document.getElementById("dutch").style.visibility = "hidden";
    currentlanguage = "dutch";
    document.getElementById("steen").textContent = "S T E E N.";
    document.getElementById("papier").textContent = "P A P I E R.";
    document.getElementById("schaar").textContent = "S C H A A R.";
    document.getElementById("steen2").textContent = "S T E E N.";
    document.getElementById("papier2").textContent = "P A P I E R.";
    document.getElementById("schaar2").textContent = "S C H A A R.";
    if (h1.innerHTML == "Player 1, choose your option!") {
        h1.innerHTML = "Speler 1, kies je optie!";
    }
}

function changeLanguageEnglish() {
    document.getElementById("english").style.visibility = "hidden";
    document.getElementById("dutch").style.visibility = "visible";
    currentlanguage = "english";
    document.getElementById("steen").textContent = "R O C K.";
    document.getElementById("papier").textContent = "P A P E R.";
    document.getElementById("schaar").textContent = "S C I S S O R S.";
    document.getElementById("steen2").textContent = "R O C K.";
    document.getElementById("papier2").textContent = "P A P E R.";
    document.getElementById("schaar2").textContent = "S C I S S O R S.";
    if (h1.innerHTML == "Speler 1, kies je optie!") {
        h1.innerHTML = "Player 1, choose your option!"
    }
}

function steen() {
    if (currentlanguage == "dutch") {
        h1.innerHTML = "Speler 2, kies je optie!";
    } else {
        h1.innerHTML = "Player 2, choose your option!";
    }
    input1 = "steen";
    document.getElementById("steen").style.visibility = "hidden";
    document.getElementById("papier").style.visibility = "hidden";
    document.getElementById("schaar").style.visibility = "hidden";
    document.getElementById("steen2").style.visibility = "visible";
    document.getElementById("papier2").style.visibility = "visible";
    document.getElementById("schaar2").style.visibility = "visible";
}

function papier() {
    if (currentlanguage == "dutch") {
        h1.innerHTML = "Speler 2, kies je optie!";
    } else {
        h1.innerHTML = "Player 2, choose your option!";
    }
    input1 = "papier";
    document.getElementById("steen").style.visibility = "hidden";
    document.getElementById("papier").style.visibility = "hidden";
    document.getElementById("schaar").style.visibility = "hidden";
    document.getElementById("steen2").style.visibility = "visible";
    document.getElementById("papier2").style.visibility = "visible";
    document.getElementById("schaar2").style.visibility = "visible";
}

function schaar() {
    if (currentlanguage == "dutch") {
        h1.innerHTML = "Speler 2, kies je optie!";
    } else {
        h1.innerHTML = "Player 2, choose your option!";
    }
    input1 = "schaar";
    document.getElementById("steen").style.visibility = "hidden";
    document.getElementById("papier").style.visibility = "hidden";
    document.getElementById("schaar").style.visibility = "hidden";
    document.getElementById("steen2").style.visibility = "visible";
    document.getElementById("papier2").style.visibility = "visible";
    document.getElementById("schaar2").style.visibility = "visible";
}

var scorespeler1 = 0;
var scorespeler2 = 0;


function steen2() {
    input2 = "steen";
    document.getElementById("steen").style.visibility = "visible";
    document.getElementById("papier").style.visibility = "visible";
    document.getElementById("schaar").style.visibility = "visible";
    document.getElementById("steen2").style.visibility = "hidden";
    document.getElementById("papier2").style.visibility = "hidden";
    document.getElementById("schaar2").style.visibility = "hidden";
    if (input1 == "steen") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Gelijkspel!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2 + "!";
        } else {
            h1.innerHTML = "Draw!";
            h22.innerHTML = h22.innerHTML = "It was rock against rock!";
        }
        scorespeler1++;
        scorespeler2++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
    else if (input1 == "papier") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Speler 1 heeft gewonnen!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2 + "!";
        } else {
            h1.innerHTML = "Player 1 has won!";
            h22.innerHTML = h22.innerHTML = "It was paper against rock!";
        }
        scorespeler1++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
    else if (input1 == "schaar") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Speler 2 heeft gewonnen!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2 + "!";
        } else {
            h1.innerHTML = "Player 2 has won!";
            h22.innerHTML = h22.innerHTML = "It was scissors against rock!";
        }
        scorespeler2++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
}

function papier2() {
    input2 = "papier";
    document.getElementById("steen").style.visibility = "visible";
    document.getElementById("papier").style.visibility = "visible";
    document.getElementById("schaar").style.visibility = "visible";
    document.getElementById("steen2").style.visibility = "hidden";
    document.getElementById("papier2").style.visibility = "hidden";
    document.getElementById("schaar2").style.visibility = "hidden";
    if (input1 == "steen") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Speler 2 heeft gewonnen!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2 + "!";
        } else {
            h1.innerHTML = "Player 2 has won!";
            h22.innerHTML = "It was rock against paper!";
        }
        scorespeler2++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
    else if (input1 == "papier") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Gelijkspel!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2 + "!";
        } else {
            h1.innerHTML = "Draw!";
            h22.innerHTML = "It was paper against paper!";
        }
        scorespeler1++;
        scorespeler2++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
    else if (input1 == "schaar") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Speler 1 heeft gewonnen!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2 + "!";
        } else {
            h1.innerHTML = "Player 1 has won!";
            h22.innerHTML = "It was scissors against paper!";
        }
        scorespeler1++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
}

function schaar2() {
    input2 = "schaar";
    document.getElementById("steen").style.visibility = "visible";
    document.getElementById("papier").style.visibility = "visible";
    document.getElementById("schaar").style.visibility = "visible";
    document.getElementById("steen2").style.visibility = "hidden";
    document.getElementById("papier2").style.visibility = "hidden";
    document.getElementById("schaar2").style.visibility = "hidden";
    if (input1 == "steen") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Speler 1 heeft gewonnen!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2 + "!";
        } else {
            h1.innerHTML = "Player 1 has won!";
            h22.innerHTML = "It was rock against scissors!";
        }
        scorespeler1++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
    else if (input1 == "papier") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Speler 2 heeft gewonnen!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2 + "!";
        } else {
            h1.innerHTML = "Player 2 has won!";
            h22.innerHTML = "It was paper against scissors!";
        }
        scorespeler2++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
    else if (input1 == "schaar") {
        if (currentlanguage == "dutch") {
            h1.innerHTML = "Gelijkspel!";
            h22.innerHTML = "Het was " + input1 + " tegen " + input2;
        } else {
            h1.innerHTML = "Player 2 has won!";
            h22.innerHTML = "It was scissors against scissors!";
        }
        scorespeler1++;
        scorespeler2++;
        h2.innerHTML = scorespeler1 + " : " + scorespeler2;
        hideAll();
        timeout = setTimeout(timeoutFunctie, 2000)
    }
}

function timeoutFunctie() {
    if (currentlanguage == "dutch") {
        h1.innerHTML = "Speler 1, kies je optie!";
        h22.innerHTML = "";
    } else {
        h1.innerHTML = "Player 1, choose your option!";
        h22.innerHTML = "";
    }
    document.getElementById("steen").style.visibility = "visible";
    document.getElementById("papier").style.visibility = "visible";
    document.getElementById("schaar").style.visibility = "visible";
    document.getElementById("steen2").style.visibility = "hidden";
    document.getElementById("papier2").style.visibility = "hidden";
    document.getElementById("schaar2").style.visibility = "hidden";
}

function hideAll() {
    document.getElementById("steen").style.visibility = "hidden";
    document.getElementById("papier").style.visibility = "hidden";
    document.getElementById("schaar").style.visibility = "hidden";
    document.getElementById("steen2").style.visibility = "hidden";
    document.getElementById("papier2").style.visibility = "hidden";
    document.getElementById("schaar2").style.visibility = "hidden";
}

function resetScore() {
    if (currentlanguage == "dutch") {
        h1.innerHTML = "Speler 1, kies je optie!";
    } else {
        h1.innerHTML = "Player 1, choose your option!";
    }
    scorespeler1 = 0
    scorespeler2 = 0;
    if (currentlanguage == "dutch") {
        h1.innerHTML = "Aan het resetten...";
    } else {
        h1.innerHTML = "Resetting..."
    }
    h2.innerHTML = scorespeler1 + " : " + scorespeler2;

    hideAll();
    timeout = setTimeout(timeoutFunctie, 1500)
}