// select the parallax container
const parallaxContainer = document.querySelector('.parallax-container');

// select the parallax layers
const parallaxLayers = document.querySelectorAll('.parallax-layer');

// add a scroll event listener to the parallax container
parallaxContainer.addEventListener('scroll', () => {
  // get the scroll position
  let scrollPos = parallaxContainer.scrollTop;

  // loop through each parallax layer
  parallaxLayers.forEach((layer, index) => {
    // set the position of the layer based on the scroll position
    let speed = 0.5 + (index / 10);
    let yPos = -(scrollPos * speed);
    layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
  });
});
