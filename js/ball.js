// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const balls = section.querySelectorAll('.ball');
      const sectionWidth = section.clientWidth;
      const sectionHeight = section.clientHeight;
  
      balls.forEach(ball => {
        const ballSize = Math.random() * 100 + 100;
        ball.style.width = `${ballSize}px`;
        ball.style.height = `${ballSize}px`;
  
        let x = Math.random() * (sectionWidth - ballSize);
        let y = Math.random() * (sectionHeight - ballSize);
        let dx = (Math.random() - 0.5) * 4;
        let dy = (Math.random() - 0.5) * 4;
  
        function moveBall() {
          x += dx;
          y += dy;

          if (x <= 0 || x >= sectionWidth - ballSize) dx *= -1;
          if (y <= 0 || y >= sectionHeight - ballSize) dy *= -1;

          ball.style.left = `${x}px`;
          ball.style.top = `${y}px`;

          requestAnimationFrame(moveBall);
        }

        moveBall();
      });
    });
  });  