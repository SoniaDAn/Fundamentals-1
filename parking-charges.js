const costOfParking = hour => {
    if (hour >= 0 && hour < 5) {
        return 300;
    } else if (hour >= 5 && hour < 10) {
        return 350;
    } else if (hour >= 10 && hour < 15) {
        return 500;
    } else if (hour >= 15 && hour < 20) {
        return 700;
    } else if (hour >= 20 && hour <= 23) {
        return 400;
    } else {
        return 'Error. Please enter a number between 0 and 23';
    }
};
console.log(costOfParking(25));
