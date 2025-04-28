document.addEventListener('DOMContentLoaded', () => {
  // Smooth reveal for posts as they enter viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, {
    threshold: 0.1, // Start animation when 10% of element is visible
    rootMargin: '50px' // Start slightly before element comes into view
  });

  // Observe all posts
  document.querySelectorAll('.post').forEach(post => {
    observer.observe(post);
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add hover effect for posts
  document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.01)';
      this.style.transition = 'transform 0.3s ease';
    });

    post.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Add parallax effect to background elements
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.post').forEach((post, index) => {
          const speed = 1 + (index % 2) * 0.1;
          post.style.transform = `translateY(${scrolled * speed * 0.02}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}); 