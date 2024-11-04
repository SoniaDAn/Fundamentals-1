// Write a progam that calculates the number of times a ball bounce
// h is the height of the floor. It is greater than 0 and I can set the height
// bounce is a float - 0.66m
// window must be less then height


const bouncingBall = (height, bounce, window, occurances) => {
// function body
// loop as it repeats
height = 10;
bounce = 0.66;
window = 1.5;
//while h > window add 1 to occurances
//h * 0.66

occurances = height / bounce;
console.log(occurances);
for (i = 1; 1 <= height, i++);
};

bouncingBall();

/*Answer:

function bouncingBall(h=5, bounce=0.66, window=1.5) {​

    let ball_h = h;​

    let num = 0; ​

    // initial drop​

    if (ball_h > window) {​

        num += 1;​

        ball_h *= bounce;​

    } else {​

        num = -1;​

    }​

​
    while (ball_h > window) {​

        num += 2;​

        ball_h *= bounce;​

    }​

    console.log(num)​

    return num;​

}​

bouncingBall() */