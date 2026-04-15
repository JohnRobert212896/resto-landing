// MOBILE MENU
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});


// FILTER SYSTEM
const filterBtns = document.querySelectorAll('.filterBtn');
const items = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // ACTIVE BUTTON
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


// RESERVATION FORM
const form = document.getElementById('reservationForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  successMsg.classList.remove('hidden');

  setTimeout(() => {
    successMsg.classList.add('hidden');
  }, 3000);

  form.reset();
});