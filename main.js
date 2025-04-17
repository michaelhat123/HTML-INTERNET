
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You are reading more about this story!');
  });
});


const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    
    window.scrollTo({
      top: target.offsetTop - 50,
      behavior: 'smooth',
    });
  });
});
