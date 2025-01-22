document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById('dynamic-text');
    const strings = ['Web developer', 'AI Engineer', 'Data Scientist', 'Data Analyst', 'Software Engineer'];
    let i = 0;
    
    function changeText() {
        dynamicText.textContent = strings[i];
        i = (i + 1) % strings.length; // Cycle through the array
    }
    changeText();
    
    // Change text every 2 seconds
    setInterval(changeText, 2000);
});

