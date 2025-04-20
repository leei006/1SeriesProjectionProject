const scrollContainer = document.getElementById('horizontalScroll');

scrollContainer.addEventListener('wheel', function(e) {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});