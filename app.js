document.addEventListener("DOMContentLoaded", function() {
    const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');

    colorInput.addEventListener('input', function() {
        const selectedColor = colorInput.value;
        colorDisplay.style.backgroundColor = selectedColor;
        // colorCode.textContent = selectedColor;
    });
    
});
