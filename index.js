var ncp = require("copy-paste");

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Write exit to end it all :>");
console.log("------------//------------");
console.log("Write something: ");

// When user input data and click enter key.
standard_input.on('data', (data) => {

    if (data.trim() === "exit") {
        console.log("Xal");
        process.exit();
    }
    else {
        let sentence = "";

        for (let i = 0; i < data.trim().length; i++) {
            switch (data.trim().charAt(i)) {
                case " ":
                    sentence += "  ";
                    break;
                case "0":
                    sentence += ":zero: ";
                    break;
                case "1":
                    sentence += ":one: ";
                    break;
                case "2":
                    sentence += ":two: ";
                    break;
                case "3":
                    sentence += ":three: ";
                    break;
                case "4":
                    sentence += ":four: ";
                    break;
                case "5":
                    sentence += ":five: ";
                    break;
                case "6":
                    sentence += ":six: ";
                    break;
                case "7":
                    sentence += ":seven: ";
                    break;
                case "8":
                    sentence += ":eight: ";
                    break;
                case "9":
                    sentence += ":nine: ";
                    break;
                default:
                    let char = data.trim().charAt(i).toLowerCase();
                    char = char.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    let regSymbol = /[$-/:-?{-~!"^_`\[\]]/;
                    if (regSymbol.test(char)){
                        sentence += char + " ";
                    }
                    else{
                        sentence += ":regional_indicator_" + char + ": ";
                    }
                    break;
            }
        }
        ncp.copy(sentence)
        console.log("Text copied to clipboard. Paste it in Discord.");
        console.log("");
        console.log("Write something else: ");
    }
});