const daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//const weekday = new Date;

//ignore this line! let day = weekday.getDay();


let day = 2;


if (day === 1 || day <= 5) {
    console.log('Today is a weekday.');
} else if (day === 2) {
    console.log('On a Tuesday I go to the gym.');
} else if (day === 4) {
    console.log('On a Thursday I go to the gym.');
} else if (day === 0) {
    console.log('On a Sunday I do gardening.');
} else {
    console.log('Today is a rest day.');
};

