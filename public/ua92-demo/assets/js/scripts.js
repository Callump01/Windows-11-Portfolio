// scripts.js

// Retrieve the saved text size from local storage, or default to 16 if not set
let textSize = localStorage.getItem('textSize') ? parseInt(localStorage.getItem('textSize')) : 16;

// Function to apply the text size to the body element
function applyTextSize(size) {
    document.body.style.fontSize = size + 'pt'; // Set the font size
    localStorage.setItem('textSize', size); // Save the text size to local storage
}

// Function to increase the text size
function increaseTextSize() {
    textSize += 2; // Increase the text size by 2
    applyTextSize(textSize); // Apply the new text size
}

// Function to decrease the text size
function decreaseTextSize() {
    textSize -= 2; // Decrease the text size by 2
    applyTextSize(textSize); // Apply the new text size
}

// Function to reset the text size to the default value
function resetTextSize() {
    textSize = 16; // Reset the text size to 16
    applyTextSize(textSize); // Apply the default text size
}

// Function to change the color scheme based on the selected scheme
function changeColorScheme(scheme) {
    resetColorScheme(); // Reset to default before applying new scheme
    document.body.classList.add(scheme); // Add the selected scheme class to the body

    const elementsToChange = document.querySelectorAll('body, .bg-light, .jumbotron, footer'); // Elements to change

    switch (scheme) {
        case 'high-contrast-1':
            elementsToChange.forEach(element => {
                element.style.backgroundColor = '#000 !important'; // Set background color to black
                element.style.color = '#FFD700'; // Set text color to yellow
            });
            document.querySelectorAll('a').forEach(link => {
                link.style.color = '#FFD700'; // Set link color to yellow
            });
            document.querySelector('.navbar-toggler').style.borderColor = '#FFD700'; // Set navbar toggler border color to yellow
            document.body.style.backgroundColor = '#000'; // Set body background color to black
            break;
        case 'high-contrast-2':
            elementsToChange.forEach(element => {
                element.style.backgroundColor = '#FFA500 !important'; // Set background color to orange
                element.style.color = '#000'; // Set text color to black
            });
            document.querySelectorAll('a').forEach(link => {
                link.style.color = '#000'; // Set link color to black
            });
            document.querySelector('.navbar-toggler').style.borderColor = '#FFA500'; // Set navbar toggler border color to orange
            document.body.style.backgroundColor = '#FFA500'; // Set body background color to orange
            break;
        case 'high-contrast-3':
            elementsToChange.forEach(element => {
                element.style.backgroundColor = '#008000 !important'; // Set background color to green
                element.style.color = '#000'; // Set text color to black
            });
            document.querySelectorAll('a').forEach(link => {
                link.style.color = '#000'; // Set link color to black
            });
            document.querySelector('.navbar-toggler').style.borderColor = '#008000'; // Set navbar toggler border color to green
            document.body.style.backgroundColor = '#008000'; // Set body background color to green
            break;
        case 'high-contrast-4':
            elementsToChange.forEach(element => {
                element.style.backgroundColor = '#800080 !important'; // Set background color to purple
                element.style.color = '#FFF'; // Set text color to white
            });
            document.querySelectorAll('a').forEach(link => {
                link.style.color = '#FFF'; // Set link color to white
            });
            document.querySelector('.navbar-toggler').style.borderColor = '#800080'; // Set navbar toggler border color to purple
            document.body.style.backgroundColor = '#800080'; // Set body background color to purple
            break;
        default:
            // No action needed for default scheme
            break;
    }
    localStorage.setItem('colorScheme', scheme); // Save the selected color scheme to local storage
}

// Function to reset the color scheme to default
function resetColorScheme() {
    const classesToRemove = ['high-contrast-1', 'high-contrast-2', 'high-contrast-3', 'high-contrast-4']; // Classes to be removed
    document.body.classList.remove(...classesToRemove); // Remove all high contrast classes

    const elementsToReset = document.querySelectorAll('body, .bg-light, .jumbotron, footer'); // Elements to reset
    elementsToReset.forEach(element => {
        element.style.backgroundColor = ''; // Reset background color
        element.style.color = ''; // Reset text color
    });
    document.querySelectorAll('a').forEach(link => {
        link.style.color = ''; // Reset link color
    });
    document.querySelector('.navbar-toggler').style.borderColor = ''; // Reset navbar toggler border color
    document.body.style.backgroundColor = ''; // Reset body background color
}

// Event listener to apply saved settings on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTextSize = localStorage.getItem('textSize'); // Get saved text size
    if (savedTextSize) {
        applyTextSize(parseInt(savedTextSize)); // Apply saved text size if it exists
    }

    const colorScheme = localStorage.getItem('colorScheme'); // Get saved color scheme
    if (colorScheme) {
        changeColorScheme(colorScheme); // Apply saved color scheme if it exists
    }
});
