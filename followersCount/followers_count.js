let count = 0; //Initialize count to 0 as the starting point

function increaseCount() {
    count++; // Increment the count by 1 
    displayCount(); // Push the count to the display
    checkCountValue(); //Check count value and alerts message 
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; //Display the count in the HTML 
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");

    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}