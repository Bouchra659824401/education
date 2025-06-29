document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownParent = dropdownToggle.closest('.has-dropdown');

  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownParent.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!dropdownParent.contains(e.target)) {
      dropdownParent.classList.remove('open');
    }
  });
});
