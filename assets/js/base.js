const toggleSidebar = () => {
  document.querySelector('body').classList.toggle('body--no-scroll');
  document.querySelector('.drawer').classList.toggle('drawer--active');
  document.querySelector('.drawer__sidebar').classList.toggle('drawer__sidebar--active');
  document.querySelector('.overlay').classList.toggle('overlay--active');
}

const toggleMobileMenu = () => {
  document.querySelector('body').classList.toggle('body--no-scroll');
  document.querySelector('.drawer--mobile').classList.toggle('drawer--active');
  document.querySelector('.drawer__sidebar--mobile').classList.toggle('drawer__sidebar--active');
  document.querySelector('.overlay').classList.toggle('overlay--active');
}

const openImageModal = (image) => {
  const modal = document.getElementById("expanded-wrapper");
  const modalImage = document.getElementById("expanded-image");
  document.querySelector('.overlay').classList.toggle('overlay--active');

  modal.style.display = "block";
  modalImage.src = image.src;
}

const closeImageModal = () => {
  const modal = document.getElementById("expanded-wrapper");
  document.querySelector('.overlay').classList.toggle('overlay--active');
  modal.style.display = "none";
}


