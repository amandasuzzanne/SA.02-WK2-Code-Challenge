function swap(string) {
    // Empty string to add characters
    let letters = ''

    for (let i = 0; i < string.length; i++) {

        let character = string.characterAt(x)

        // Change to lower case 
        if (character === character.toUpperCase()){
           letters += character.toLowerCase()
        }
        // Change to upper case 
        else {
            letters += character.toUpperCase()
        }
    }
    return letters
}