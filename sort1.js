//  algorithm that read a sentence, which ends with a point, character by character

function analyzeSentence(sentence) { // Function to analyze a sentence

    if (sentence[sentence.length - 1] !== '.') {
        console.log("Error: The sentence must end with a period (.)"); // Check if the sentence ends with a period
        return;
    }

    let length = 0;
    let wordCount = 0; 
    let vowelCount = 0; 
    let inWord = false; 
    const vowels = "aeiouAEIOU"; // Define vowels for counting

    for (let i = 0; i < sentence.length; i++) { // Loop through each character in the sentence
        let char = sentence[i]; 
        length++; // Increment character count

        if (vowels.includes(char)) { // Check if the character is a vowel
            vowelCount++; // Count vowels
        }

        if (char !== ' ' && char !== '.') {   // Check if the character is not a space or period
            if (!inWord) {
                wordCount++; // Count words
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    console.log("Length of sentence:", length); // Output the length of the sentence
    console.log("Number of words:", wordCount);  // Output the number of words
    console.log("Number of vowels:", vowelCount); // Output the number of vowels
}

let sentence = "Nigeria is located in West Africa.";
analyzeSentence(sentence);