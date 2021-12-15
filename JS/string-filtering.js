const string = "Hi! How are you?";

const vowels = ["a", "e", "i", "o", "u", "y"]

const getVowels = stringToFilter => {
    let extractedVowels = "";
    
    for (let i = 0; i < stringToFilter.length; i++) {
       const currentLetter = stringToFilter[i].toLowerCase();

       if (vowels.includes(currentLetter)) {
           extractedVowels += currentLetter;
       }
    }
    return extractedVowels;
}

console.log(getVowels(string));