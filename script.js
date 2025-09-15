// JavaScript Functions - Part 2 of Assignment

// Global variable demonstration
let message = "Original global message";

/**
 * Function to demonstrate scope - Part 2: Function Scope
 * Shows the difference between local and global variables
 */
function scopeDemo() {
    // This variable has function scope (local)
    let localVar = "I'm local!";
    
    // This modifies the global message variable
    message = "Modified by function";
    
    // Update the display
    document.getElementById('scope-output').innerHTML = 
        `Local variable: "${localVar}"<br>Global message: "${message}"`;
    
    console.log("Inside function:", localVar);
}

/**
 * Function with parameters and return value - Part 2: Parameters & Return Values
 * Multiplies two numbers and returns the result
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Uses the multiply function and displays the result
 * Demonstrates function calling with parameters and using return values
 */
function calculate() {
    // Get input values
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);
    
    // Validate input
    if (isNaN(x) || isNaN(y)) {
        alert("Please enter valid numbers");
        return;
    }
    
    // Call function with parameters and use return value
    let result = multiply(x, y);
    
    // Display result
    document.getElementById('calculation-result').innerHTML = 
        `Result: ${x} × ${y} = ${result}`;
}

// Part 3: Combining CSS Animations with JavaScript

/**
 * Applies CSS animation classes through JavaScript
 * @param {string} animationType - The type of animation to apply
 */
function animateElement(animationType) {
    const element = document.getElementById('js-demo-element');
    
    // Reset any existing animations
    element.classList.remove('bounce', 'spin', 'flash');
    
    // Trigger reflow to restart animation
    void element.offsetWidth;
    
    // Add the requested animation class
    element.classList.add(animationType);
}

/**
 * Removes all animation classes from the element
 */
function resetAnimation() {
    const element = document.getElementById('js-demo-element');
    element.classList.remove('bounce', 'spin', 'flash');
}

// Interactive mode variables
let interactiveMode = false;
let interactiveElement;

/**
 * Starts interactive mode for the demo element
 * Adds event listener for mouse movement
 */
function startInteractiveMode() {
    interactiveMode = true;
    interactiveElement = document.getElementById('interactive-element');
    
    // Add event listener for mouse movement
    document.querySelector('#interactive-element').parentElement.addEventListener('mousemove', handleMove);
    
    // Visual indication that interactive mode is on
    interactiveElement.style.backgroundColor = '#ff9ff3';
}

/**
 * Stops interactive mode and removes event listener
 */
function stopInteractiveMode() {
    interactiveMode = false;
    interactiveElement.style.backgroundColor = '#f368e0';
    interactiveElement.style.transform = '';
    
    // Remove event listener
    document.querySelector('#interactive-element').parentElement.removeEventListener('mousemove', handleMove);
}

/**
 * Handles mouse movement in interactive mode
 * @param {MouseEvent} e - The mouse event object
 */
function handleMove(e) {
    if (!interactiveMode) return;
    
    const demoBox = e.currentTarget;
    const rect = demoBox.getBoundingClientRect();
    
    // Calculate mouse position relative to the demo box
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate center of the demo box
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate distance from center
    const distanceX = x - centerX;
    const distanceY = y - centerY;
    
    // Apply transformation based on mouse position
    interactiveElement.style.transform = `
        translate(${distanceX / 5}px, ${distanceY / 5}px)
        rotate(${distanceX / 10}deg)
    `;
    
    // Change color based on position
    const red = Math.min(255, Math.max(0, Math.abs(distanceX) * 2));
    const blue = Math.min(255, Math.max(0, Math.abs(distanceY) * 2));
    interactiveElement.style.backgroundColor = `rgb(${red}, 100, ${blue})`;
}