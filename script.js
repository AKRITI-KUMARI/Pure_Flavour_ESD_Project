// Explore Features Button 
const scrollBtn = document.getElementById('scroll-to-features');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const offsetTop = featuresSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});





// hamburger menu

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle on click of hamburger
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click bubbling
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close when clicking anywhere outside
document.addEventListener('click', (e) => {
  const isClickInsideNav = navLinks.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideNav && !isClickOnHamburger) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Optional: Close menu when any nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});




// contact form submission

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Thanks for your message! We'll get back to you soon.");
      form.reset();
    } else {
      response.json().then(data => {
        alert("Oops! Something went wrong: " + (data.error || "Try again later."));
      });
    }
  }).catch(error => {
    alert("Oops! Something went wrong.");
  });
});

