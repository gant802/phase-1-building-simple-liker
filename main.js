// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const allHearts = document.querySelectorAll('.like-glyph')
const modal = document.getElementById('modal')

function likedHeart(e) {
  const heart = e.target
  mimicServerCall()
  .then(res => {
    if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.classList = "activated-heart"
    } else {
      heart.textContent = EMPTY_HEART
      heart.classList = ""
    }
  })
  .catch(res => {
    modal.classList = ""
    setTimeout(() => modal.classList = "hidden", 3000)
  })
}

for (let heart of allHearts) {
  heart.addEventListener('click', heart => likedHeart(heart))
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
