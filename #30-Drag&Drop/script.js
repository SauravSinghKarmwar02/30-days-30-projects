// Get all elements with class 'list'
var lists = document.getElementsByClassName('list');

// Get reference to the right and left containers
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

// Loop through each list element
for (list of lists) {
    // Add a dragstart event listener to each list element
    list.addEventListener('dragstart', function (e) {
        // Store the selected list element
        let selected = e.target;

        // Add dragover event listener to the right container
        rightBox.addEventListener('dragover', function (e) {
            // Prevent default behavior to allow drop
            e.preventDefault();
        });
        // Add drop event listener to the right container
        rightBox.addEventListener('drop', function (e) {
            // Append the selected element to the right container
            rightBox.appendChild(selected);
            // Reset the selected to null to avoid unintended behavior
            selected = null;
        });

        // Add dragover event listener to the left container
        leftBox.addEventListener('dragover', function (e) {
            // Prevent default behavior to allow drop
            e.preventDefault();
        });
        // Add drop event listener to the left container
        leftBox.addEventListener('drop', function (e) {
            // Append the selected element to the left container
            leftBox.appendChild(selected);
            // Reset selected to null to avoid unintended behavior
            selected = null;
        });
    });
}
