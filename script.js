document.getElementById('text-input').addEventListener("keyup", () => {
  const inputText = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  memeText.innerText = inputText.value;
});

document.getElementById('meme-insert').addEventListener('change', function(event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
})

document.getElementById('text-input').addEventListener('click', () => {
  const memeInsert = document.getElementById('meme-insert');
  if (memeInsert.value === '') {
    alert('Primeiro adicione uma imagem para o seu meme e logo seu texto aparecerá na foto!');
  }
})

document.getElementById('start-text').addEventListener('click', () => {
  const memeText = document.getElementById('meme-text');
  memeText.style.textAlign = 'start';
  memeText.style.marginLeft = '20px';
})

document.getElementById('center-text-row').addEventListener('click', () => {
  const memeText = document.getElementById('meme-text');
  memeText.style.textAlign = 'center';
})

document.getElementById('end-text').addEventListener('click', () => {
  const memeText = document.getElementById('meme-text');
  memeText.style.textAlign = 'end';
  memeText.style.marginRight = '20px';
})

document.getElementById('top-text').addEventListener('click', () => {
  const memeText = document.getElementById('meme-text');
  memeText.style.marginTop = '10%';
})

document.getElementById('center-text-column').addEventListener('click', () => {
  const memeText = document.getElementById('meme-text');
  memeText.style.marginTop = '50%';
})

document.getElementById('bottom-text').addEventListener('click', () => {
  const memeText = document.getElementById('meme-text');
  memeText.style.marginTop = '90%';
})