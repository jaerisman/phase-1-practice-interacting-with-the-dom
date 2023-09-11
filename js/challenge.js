let count = 0;
let likeCount = 0;
let isPaused = false;
const counterElement = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause')
const likeList = document.querySelector('.likes');
const likeCounts = {};
const commentInput = document.getElementById('comment-input');
const submitCommentButton = document.getElementById('submit');
const commentList = document.querySelector('.comments');

const toggleButtons = () => {
    plusButton.disabled = isPaused;
    minusButton.disabled = isPaused;
    heartButton.disabled = isPaused;
};

pauseButton.addEventListener('click', () => {
    isPaused = !isPaused;
    toggleButtons();
    pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
});

setInterval(() => {
    if (!isPaused) {
    count +=1;
    counterElement.textContent= count;
    }}, 1000);

plusButton.addEventListener('click', () => {
    count += 1;
    counterElement.textContent= count;
});

minusButton.addEventListener('click', () => {
    count -= 1;
    counterElement.textContent = count;
});

heartButton.addEventListener('click', () => {
    if (!likeCounts[count]) {
        likeCounts[count] = 0;
    }
    likeCounts[count] += 1;

    const existingLikeItem = likeList.querySelector(`li[data-number="${count}"]`);
    if (existingLikeItem) {
        existingLikeItem.textContent = `Number ${count} was liked ${likeCounts[count]} times.`;
    } else {
        const likeItem = document.createElement('li');
        likeItem.textContent = `Number ${count} was liked ${likeCounts[count]} times.`;
        likeItem.setAttribute('data-number', count);
        likeList.appendChild(likeItem);
    }
});

submitCommentButton.addEventListener('click', (event) => {
    event.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
    }
});