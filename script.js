function openChat() {
    document.getElementById("chat-window").style.display = "block";
}

function closeChat() {
    document.getElementById("chat-window").style.display = "none";
}

function sendMessage() {
    var userMessage = document.getElementById("userInput").value;
    document.getElementById("chat-body").innerHTML += "<div class='user-message'>" + userMessage + "</div>";
    document.getElementById("userInput").value = "";

    // Add AI Chatbot response here (static for now)
    setTimeout(function() {
        document.getElementById("chat-body").innerHTML += "<div class='bot-message'>How can I assist you today?</div>";
    }, 1000);
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
}
// Toggle chat visibility
function toggleChat() {
    var chatBody = document.getElementById("chat-body");
    if (chatBody.style.display === "none") {
        chatBody.style.display = "block";
    } else {
        chatBody.style.display = "none";
    }
}

// Send user message and bot response
function sendMessage() {
    var userMessage = document.getElementById("userInput").value;
    if (userMessage.trim() === "") return; // Prevent empty messages

    // Display user message
    document.getElementById("chat-messages").innerHTML +=
        "<div class='user-message'>" + userMessage + "</div>";

    // Clear the input field
    document.getElementById("userInput").value = "";

    // Simulate AI bot response (you can enhance this)
    setTimeout(function () {
        document.getElementById("chat-messages").innerHTML +=
            "<div class='bot-message'>How can I assist you today?</div>";
    }, 1000);
}

// Trigger message send on Enter key
function checkEnter(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
}

// Counter Animation Function
document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll(".counter-value");
    var speed = 200; // Speed of the counter animation

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-count');
            const data = +counter.innerText;

            // Calculate the increment
            const time = value / speed;

            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        };
        animate();
    });
});

// Counter Animation Function
    document.addEventListener("DOMContentLoaded", function () {
        var counters = document.querySelectorAll(".counter-value");
        var speed = 200; // Speed of the counter animation

        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('data-count');
                const data = +counter.innerText;

                // Calculate the increment
                const time = value / speed;

                if (data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = value;
                }
            };
            animate();
        });
    });





  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });



  // Get the privacy policy link and text
  var privacyLink = document.getElementById('privacy-policy-link');
  var policyText = document.getElementById('policy-text');

  // When the link is clicked, toggle the hidden class to show/hide the policy text
  privacyLink.onclick = function(event) {
    event.preventDefault();
    policyText.classList.toggle('hidden');
    
    // Change link text between 'Show Privacy Policy' and 'Hide Privacy Policy'
    if (policyText.classList.contains('hidden')) {
      privacyLink.textContent = "Privacy Policy";
    } else {
      privacyLink.textContent = "Hide Privacy Policy";
    }
  }






