
// Write a function that converts numbers to their roman numeral equivalent. For example:
// 1 gives letter 'I'
// 10 gives letter 'X'
// 7 gives VII
// Use this link to help you: wikipedia.org/wiki/Roman_numerals
// Your function can be: const toRoman = (number) => { ... };
// Be prepared to discuss on return
//  the logic of bewteen 1 - 3, add I 
// 4 - IV, 5 - V, 
// 6, 7, 8 _ V + I
// IX - 9 10 - X 


const toRoman = (num) => {
    const numerals = ['I', 'V', 'X'];
    let conversion = [];
    if (num >= 1 && num <= 3) {
        for (let i = 1; i <= num; i++) {
            conversion.push(numerals[0]);
        }
    }  
    else if (num === 4){
        conversion.push("IV")
    }
    else if (num === 5){
        conversion.push("V")
    }
    else if (num >= 6 && num <= 8){
        conversion.push(numerals[1])
        for(let i = 6; i <= num; i++) {
            conversion.push(numerals[0]);
        }
    }
    else if( num === 9 ){
        conversion.push("IX")
    }
    else if( num === 10 ){
        conversion.push("X")
    }
    else{
        console.log("Please enter a number between 1 and 10.")
    }

    console.log(conversion.join(""));
};

toRoman(10);

