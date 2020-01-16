document.addEventListener('DOMContentLoaded', function(){
  const closeMenu = document.getElementById('menu-close');
  const openMenu = document.getElementById('menu-open');
  const menuModal = document.getElementById('menu-modal');

  console.log(closeMenu)
  closeMenu.addEventListener('click', function(event){
    menuModal.style.visibility = 'hidden';
    menuModal.style.opacity = 0;
    closeMenu.style.visibility = 'hidden';
    closeMenu.style.opacity = 0;
  })

  openMenu.addEventListener('click', function(event) {
    menuModal.style.visibility = 'visible';
    menuModal.style.opacity = 1;
    closeMenu.style.visibility = 'visible';
    closeMenu.style.opacity = 1;
  })

  document.addEventListener('keyup', function(e) {
    if(e.keyCode == 27) {
      menuModal.style.visibility = 'hidden';
      menuModal.style.opacity = 0;
      closeMenu.style.visibility = 'hidden';
      closeMenu.style.opacity = 0;
    }                      
  })
})
