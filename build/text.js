if (window.matchMedia("(min-width: 768px)").matches) {
  // The place I saw this effect:
  // https://angle2.agency/

  // Red Staper made a NICE tutorial about this effect! You should check it out!
  // https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleWindowResize);

  const spansSlow = document.querySelectorAll('.spanSlow');
  const spansMed = document.querySelectorAll('.spanMed');
  const spansFast = document.querySelectorAll('.spanFast');

  let width = window.innerWidth;

  function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width/2) - 1;
    let speedSlow = 75 * normalizedPosition;
    let speedMed = 175 * normalizedPosition;
    let speedFast = 250 * normalizedPosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansMed.forEach((span) => {
      span.style.transform = `translate(${speedMed}px)`
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`
    });
  }
  //we need to recalculate width when the window is resized
  function handleWindowResize() {
    width = window.innerWidth;
  }
}