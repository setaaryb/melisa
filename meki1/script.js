// Function to handle login
function login() {
    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Example hardcoded credentials (replace with actual validation)
    const validUsername = 'admin';
    const validPassword = 'admin123';

    // Check if the input values match the valid credentials
    if (username === validUsername && password === validPassword) {
        showPopup('Login berhasil!');
        // Redirect to the next page after a short delay
        setTimeout(() => {
            window.location.href = 'nextpage.html'; // Replace with your actual next page URL
        }, 2000);
    } else {
        showPopup('Username atau password salah. Coba lagi.');
    }
}

// Function to show a popup message
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.classList.remove('hidden');
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

// Optional: Add event listener for pressing "Enter" to trigger login
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        login();
    }
});


particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        }
    },
    "retina_detect": true
});
