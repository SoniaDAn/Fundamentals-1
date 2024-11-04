const shotNames = ["Hole in one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey" , "Quit"]; 
const par = 3; 
const strokes = 1;

if (strokes === 1) {
    console.log('Hole in 1');
} else if (strokes <= par - 2) {
    console.log('Eagle');
} else if (strokes === par - 1) {
  console.log('Birdie');
} else if (strokes === par) {
    console.log('Par');
} else if (strokes === par + 1) {
    console.log('Bogey');
} else if (strokes === par + 2) {
    console.log('Double Bogey');
} else if (strokes >= par + 3) {
    console.log('Quit');
} else {
    console.log('Error. Please check your number of strokes.')
};

