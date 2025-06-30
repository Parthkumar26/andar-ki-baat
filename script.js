// Like / Dislike
document.querySelectorAll('.btn-like')?.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.innerText = '❤️ Liked';
    btn.disabled = true;
  });
});
document.querySelectorAll('.btn-dislike')?.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.innerText = '💔 Disliked';
    btn.disabled = true;
  });
});

// Scroll to Top
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollBtn");
  if (scrollBtn) scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
