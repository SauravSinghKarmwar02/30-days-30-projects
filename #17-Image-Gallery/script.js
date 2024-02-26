// Ensure to script code after DOM is ready
document.addEventListener('DOMContentLoaded', function () {

    // Get reference to the img container
    let scrollContainer = document.querySelector('.gallery');

    // Get reference to the Buttons
    let backBtn = document.getElementById('backBtn');
    let nextBtn = document.getElementById('nextBtn');

    // Function to scroll imgs using mouse key
    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.computedStyleMap.scrollBehavior = 'smooth';
    });

    // Add event to nextBtn to scroll right
    nextBtn.addEventListener('click', () => {
        scrollContainer.computedStyleMap.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft += 900;
    });

    // Add event to backBtn to scroll left
    backBtn.addEventListener('click', () => {
        scrollContainer.computedStyleMap.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft -= 900;
    });
});
