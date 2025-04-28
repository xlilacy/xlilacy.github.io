class KawaiiSnow {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.snowflakes = [];
    this.init();
  }

  init() {
    // Set canvas to full window size
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '9999';
    document.body.appendChild(this.canvas);

    // Handle resize
    window.addEventListener('resize', () => this.resize());
    this.resize();

    // Create initial snowflakes
    for (let i = 0; i < 20; i++) {
      this.snowflakes.push(this.createSnowflake());
    }

    // Start animation
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createSnowflake() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 2 + 0.5, // Slightly larger snowflakes
      speed: Math.random() * 0.3 + 0.1,
      wobble: Math.random() * 2 - 1,
      wobbleSpeed: Math.random() * 0.005 + 0.002,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01
    };
  }

  drawSnowflake(snowflake) {
    this.ctx.save();
    this.ctx.translate(snowflake.x, snowflake.y);
    this.ctx.rotate(snowflake.rotation);
    
    // Draw a simple snowflake shape
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'; // Increased opacity
    this.ctx.lineWidth = 0.8; // Slightly thicker lines
    
    // Draw six lines for the snowflake
    for (let i = 0; i < 6; i++) {
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(0, snowflake.size * 2);
      this.ctx.rotate(Math.PI / 3);
    }
    
    // Draw small branches
    for (let i = 0; i < 6; i++) {
      this.ctx.moveTo(0, snowflake.size);
      this.ctx.lineTo(snowflake.size, snowflake.size * 1.5);
      this.ctx.moveTo(0, snowflake.size);
      this.ctx.lineTo(-snowflake.size, snowflake.size * 1.5);
      this.ctx.rotate(Math.PI / 3);
    }
    
    this.ctx.stroke();
    this.ctx.restore();
  }

  updateSnowflake(snowflake) {
    // Add wobble effect
    snowflake.x += Math.sin(snowflake.wobble) * snowflake.wobbleSpeed;
    snowflake.wobble += snowflake.wobbleSpeed;
    
    // Add rotation
    snowflake.rotation += snowflake.rotationSpeed;
    
    // Move snowflake down
    snowflake.y += snowflake.speed;

    // Reset snowflake if it goes off screen
    if (snowflake.y > this.canvas.height) {
      snowflake.y = -10;
      snowflake.x = Math.random() * this.canvas.width;
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.snowflakes.forEach(snowflake => {
      this.updateSnowflake(snowflake);
      this.drawSnowflake(snowflake);
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize snow effect when the page loads
window.addEventListener('load', () => {
  new KawaiiSnow();
}); 