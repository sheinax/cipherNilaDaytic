// Function to encrypt the message
function encrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    document.getElementById('output').value = caesarCipher(message, shift);
}

// Function to decrypt the message
function decrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    document.getElementById('output').value = caesarCipher(message, -shift);
}

// Caesar Cipher function
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let base = char >= 'a' ? 97 : 65;
            return String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}
function checkGuess() {
    const userGuess = document.getElementById('guess').value.trim().toLowerCase();
    const correctAnswer = currentWords[currentIndex].answer.toLowerCase();

    if (userGuess === correctAnswer) {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
        showFireworks();
        animateCorrectAnswer();
        nextWord();
    } else {
        alert("Incorrect guess! Try again.");
    }
}

function animateCorrectAnswer() {
    const encryptedWordElement = document.getElementById('encrypted-word');
    encryptedWordElement.classList.add('correct-answer');

    // Remove the class after the animation ends to allow it to be triggered again later
    setTimeout(() => {
        encryptedWordElement.classList.remove('correct-answer');
    }, 600); // 600ms is the duration of the bounce animation
}


 // dari
 