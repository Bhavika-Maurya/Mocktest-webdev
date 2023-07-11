const loader = document.getElementById('loader');
const postsContainer = document.getElementById('posts-container');

// Display the skeleton loader
function showLoader() {
  loader.style.display = 'block';
}

// Hide the skeleton loader
function hideLoader() {
  loader.style.display = 'none';
}

// Fetch data from the JSON Placeholder API
function fetchData() {
  showLoader();

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      hideLoader();
      displayPosts(data);
    })
    .catch(error => {
      hideLoader();
      console.error('Error:', error);
    });
}

// Display the fetched posts
function displayPosts(posts) {
  postsContainer.innerHTML = '';

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('post-title');
    titleElement.textContent = post.title;

    const bodyElement = document.createElement('p');
    bodyElement.classList.add('post-body');
    bodyElement.textContent = post.body;

    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);

    postsContainer.appendChild(postElement);
  });
}

// Fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchData);
