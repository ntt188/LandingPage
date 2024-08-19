// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const balls = section.querySelectorAll('.ball');
      const sectionWidth = section.clientWidth;
      const sectionHeight = section.clientHeight;
  
      balls.forEach(ball => {
        const ballSize = Math.random() * 100 + 100; // Kích thước ngẫu nhiên từ 10px đến 50px
        ball.style.width = `${ballSize}px`;
        ball.style.height = `${ballSize}px`;
  
        let x = Math.random() * (sectionWidth - ballSize);
        let y = Math.random() * (sectionHeight - ballSize);
        let dx = (Math.random() - 0.5) * 4; // Tốc độ di chuyển theo chiều ngang
        let dy = (Math.random() - 0.5) * 4; // Tốc độ di chuyển theo chiều dọc
  
        function moveBall() {
          x += dx;
          y += dy;
  
          // Kiểm tra và đổi hướng khi bóng chạm vào các cạnh
          if (x <= 0 || x >= sectionWidth - ballSize) dx *= -1;
          if (y <= 0 || y >= sectionHeight - ballSize) dy *= -1;
  
          // Cập nhật vị trí của bóng
          ball.style.left = `${x}px`;
          ball.style.top = `${y}px`;
  
          // Gọi hàm moveBall trong vòng lặp animation
          requestAnimationFrame(moveBall);
        }
  
        // Bắt đầu di chuyển bóng
        moveBall();
      });
    });
  });  