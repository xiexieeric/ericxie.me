document.addEventListener('DOMContentLoaded', function(){
  var toggleButton = document.getElementById('Header-toggle');
  var header = document.getElementById('Header');
  toggleButton.addEventListener('click', function(){
    toggleButton.classList.toggle('open');
    header.classList.toggle('open');
  });
});
