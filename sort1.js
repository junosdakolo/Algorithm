//  algorithm that read a sentence, which ends with a point, character by character

function analyzeSentence(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let inWord = false;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        length++; // Increment character count

        if (vowels.includes(char)) {
            vowelCount++; // Count vowels
        }

        if (char !== ' ' && char !== '.') {
            if (!inWord) {
                wordCount++; // Count words
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    console.log("Length of sentence:", length);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
}

let sentence = "Nigeria is located in West Africa";
analyzeSentence(sentence);