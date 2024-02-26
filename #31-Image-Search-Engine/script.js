// Unsplash API access key
const accessKey = '0ipo49ZVHNFvW2JzfvkHfJYQ5AAtd_mlQHxddXK8IYs';

// Get reference to DOM elements
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

// Variables for search functionality
let keyword = '';
let page = 1;

// Function to search for images using Unsplash API
async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    // Fetching data from Unsplash API
    const response = await fetch(url);
    const data = await response.json();

    // Clearing previous search results if it's the first page
    if (page === 1) {
        searchResult.innerHTML = '';
    }

    // Extracting and displaying search results
    const results = data.results;

    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;

        // Creating a link to the Unsplash page of the image
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        // Appending the image to the link and the link to the search results
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    // Displaying the "Show more" button
    showMoreBtn.style.display = 'block';
}

// Event listener for the search form submission
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Resetting page number and initiating a new search
    page = 1;
    searchImages();
});

// Event listener for the "Show more" button
showMoreBtn.addEventListener('click', () => {
    // Incrementing the page number and loading more search results
    page++;
    searchImages();
});
