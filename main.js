document.getElementById('openInspect').addEventListener('click', function() {
    // Simulate Ctrl+Shift+I key press
    simulateKeyPress('Control', 'Shift', 'I');
    document.getElementById('status').innerText = "Inspect Element opened!";
});

function simulateKeyPress(...keys) {
    keys.forEach(key => {
        const event = new KeyboardEvent('keydown', { key: key });
        document.dispatchEvent(event);
    });
}

