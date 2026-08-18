document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && navbar) {
    toggle.addEventListener('click', function () {
      navbar.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { navbar.classList.remove('open'); });
    });
  }
});
