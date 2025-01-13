document.addEventListener('scroll', () => {
    const calculator = document.querySelector('.calculator');
    const scrollY = window.scrollY;
    const rotationX = Math.min(scrollY / 20, 15); // Limit max rotation
    const rotationY = Math.min(scrollY / 40, 10);
  
    calculator.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  });
  