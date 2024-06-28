// Import any necessary modules or libraries here

// Define your main program logic here
function main() {
    // Open a new window with size one-third of the screen
    const width = window.screen.width / 3;
    const height = window.screen.height / 3;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const newWindow = window.open('', '', `width=${width}, height=${height}, left=${left}, top=${top}`);

    // Create a button element
    const button = document.createElement('button');
    button.innerText = 'trigger';

    // Append the button to the new window's document body
    newWindow.document.body.appendChild(button);
}

// Call the main function to start your program
main();