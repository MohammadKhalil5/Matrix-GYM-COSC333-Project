// book now
let modal = document.getElementById('bookingModal');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

document.querySelectorAll('.BookNow').forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    })
})

// Close the modal when the user clicks the "X" button
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
    name.value = '';
    email.value = '';
    phone.value = '';
})

// Close the modal when the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})

document.getElementById('program-submit').addEventListener("click", () => {
    if (name.value==='' || email.value==='' || phone.value==='') {
        alert('fill your info to book');
    }
    else {
        alert('Booking submitted!');
        modal.style.display = 'none';
        name.value = '';
        email.value = '';
        phone.value = '';
    }
})

// comment section
let form = document.getElementById('commentForm');
let usernameInput = document.getElementById('usernameInput');
let commentInput = document.getElementById('commentInput');
let commentList = document.getElementById('commentList');
let btn = document.getElementById('submit-btn');

btn.addEventListener('click', () => {

    if (usernameInput.value === '' || commentInput.value === '') {
        console.log("pls fill the requred info")
    }
    else {

        let username = usernameInput.value.trim();
        let commentText = commentInput.value.trim();

        // Create a new list item for the comment
        let commentItem = document.createElement('li');

        // Add username in bold
        let usernameElement = document.createElement('p');
        usernameElement.innerHTML = `<strong>${username}</strong>`;
        usernameElement.style.marginBottom = "5px";

        // Add the comment text
        let commentParagraph = document.createElement('p');
        commentParagraph.textContent = commentText;

        // Add like and dislike buttons
        let likeDislikeContainer = document.createElement('div');
        likeDislikeContainer.classList.add('like-dislike');

        let likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.innerHTML = `Like <span>0</span>`;

        let dislikeButton = document.createElement('button');
        dislikeButton.classList.add('dislike-btn');
        dislikeButton.innerHTML = `Dislike <span>0</span>`;

        // Like button functionality
        likeButton.addEventListener('click', () => {
            let likeCount = likeButton.querySelector('span');
            let dislikeCount = dislikeButton.querySelector('span');

            if (likeButton.classList.contains('liked')) {
                // If already liked, remove the like
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
                likeButton.classList.remove('liked');
            } else {
                // Add the like
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
                likeButton.classList.add('liked');

                // If dislike is active, remove it
                if (dislikeButton.classList.contains('disliked')) {
                    dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
                    dislikeButton.classList.remove('disliked');
                }
            }
        })

        // Dislike button functionality
        dislikeButton.addEventListener('click', () => {
            let dislikeCount = dislikeButton.querySelector('span');
            let likeCount = likeButton.querySelector('span');

            if (dislikeButton.classList.contains('disliked')) {
                // If already disliked, remove the dislike
                dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
                dislikeButton.classList.remove('disliked');
            } else {
                // Add the dislike
                dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
                dislikeButton.classList.add('disliked');

                // If like is active, remove it
                if (likeButton.classList.contains('liked')) {
                    likeCount.textContent = parseInt(likeCount.textContent) - 1;
                    likeButton.classList.remove('liked');
                }
            }
        })

        // Append buttons to the container
        likeDislikeContainer.appendChild(likeButton);
        likeDislikeContainer.appendChild(dislikeButton);

        // Append everything to the list item
        commentItem.appendChild(usernameElement);
        commentItem.appendChild(commentParagraph);
        commentItem.appendChild(likeDislikeContainer);
        commentList.appendChild(commentItem);

        // Clear the input fields
        usernameInput.value = '';
        commentInput.value = '';
    }
})