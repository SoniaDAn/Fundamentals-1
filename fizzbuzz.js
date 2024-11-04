const fizzChallenge = (min, max) => {
    for (let i = min; i <= max; i++)
     if (i % 15 === 0) {
            return "FizzBuzz";
        } else if (i % 3 === 0) {
            return "Fizz";
        } else if (i % 5 === 0) {
            return "Buzz";
        } else {
            return i;
        }

  console.log(fizzChallenge(1, 20));
    }


    const fizzChallengeLoop = (min, max) => {
        for(let i = min; i <= max; i ++){
            if (i % 15 === 0 ) {
                console.log("FizzBuzz");
              } else if (i % 3 === 0) {
                console.log ("Fizz");
              } else if (i % 5 === 0) {
                console.log ("Buzz");
              } else {
                console.log(i);
              }
        }
        };
        fizzChallengeLoop(1,20);
  
 


