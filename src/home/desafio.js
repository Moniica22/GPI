let likes = localStorage.getItem('likes') ? parseInt(localStorage.getItem('likes'), 10) : 120;
let likesCat = localStorage.getItem('likesCat') ? parseInt(localStorage.getItem('likesCat'), 10) : 90;
let liked = localStorage.getItem('liked') === 'true';  // Cargar el estado guardado o false por defecto
let likedCat = localStorage.getItem('likedCat') === 'true';

let commentsData = localStorage.getItem('commentsData') ? JSON.parse(localStorage.getItem('commentsData')) : [];
let comments = commentsData.length;
let commentsCat = localStorage.getItem('commentsDataCat') ? JSON.parse(localStorage.getItem('commentsDataCat')).length : 35;
let commentsDataCat = localStorage.getItem('commentsDataCat') ? JSON.parse(localStorage.getItem('commentsDataCat')) : [];

window.onload = function() {
  updateLikesDisplay();
  updateLikesDisplayCat();
  updateCommentsDisplay();
  updateCommentsCatDisplay();
  toggleLikeButton('likeButtonDog', liked); // Aplica el estado del botón al cargar
  toggleLikeButton('likeButtonCat', likedCat);
}

function toggleLikeButton(buttonId, isLiked) {
  const likeButton = document.getElementById(buttonId);
  if (isLiked) {
    likeButton.classList.add('active');
  } else {
    likeButton.classList.remove('active');
  }
}

function incrementLikes() {
  liked = !liked;
  likes = liked ? likes + 1 : likes - 1;
  localStorage.setItem('likes', likes.toString());
  localStorage.setItem('liked', liked.toString());
  updateLikesDisplay();
  toggleLikeButton('likeButtonDog', liked); // Actualiza el estado del botón cada vez que se hace clic
}

function incrementLikesCat() {
  likedCat = !likedCat;
  likesCat = likedCat ? likesCat + 1 : likesCat - 1;
  localStorage.setItem('likesCat', likesCat.toString());
  localStorage.setItem('likedCat', likedCat.toString());
  updateLikesDisplayCat();
  toggleLikeButton('likeButtonCat', likedCat); // Actualiza el estado del botón cada vez que se hace clic
}


function updateLikesDisplay() {
  document.getElementById('likesCount').textContent = `${likes} Likes`;
}

function updateLikesDisplayCat() {
  document.getElementById('likesCountCat').textContent = `${likesCat} Likes`;
}

function addComment(inputId) {
  var commentInput = document.getElementById(inputId);
  var commentValue = commentInput.value;
  if (commentValue.trim() !== '') {
    var formattedComment = `> ${commentValue.trim()}`;
    commentsData.push(formattedComment);
    localStorage.setItem('commentsData', JSON.stringify(commentsData));
    commentInput.value = '';
    updateCommentsDisplay();
    document.getElementById('commentsCount').textContent = `${commentsData.length} Comentarios`;
  }
}

function updateCommentsDisplay() {
  var commentsContainer = document.querySelector('.small-rectangle');
  commentsContainer.innerHTML = commentsData.map(comment => `<div>${comment}</div>`).join('<br>');
}

function addCommentCat(inputId) {
  var commentInput = document.getElementById(inputId);
  var commentValue = commentInput.value;
  if (commentValue.trim() !== '') {
    var formattedComment = `> ${commentValue.trim()}`;
    commentsDataCat.push(formattedComment);
    localStorage.setItem('commentsDataCat', JSON.stringify(commentsDataCat));
    commentInput.value = '';
    updateCommentsCatDisplay();
    document.getElementById('commentsCountCat').textContent = `${commentsDataCat.length} Comentarios`;
  }
}

function updateCommentsCatDisplay() {
  var commentsContainer = document.querySelector('.small-rectangle-cat');
  commentsContainer.innerHTML = commentsDataCat.map(comment => `<div>${comment}</div>`).join('<br>');
}
