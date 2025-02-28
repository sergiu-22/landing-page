document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.cat-slider');
    const items = document.querySelectorAll('.cat-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const catDetails = document.getElementById('cat-details');
    const catName = document.getElementById('cat-name');
    const catDescription = document.getElementById('cat-description');
    const catFood = document.getElementById('cat-food');
    const closeDetails = document.getElementById('close-details');
  
    let currentIndex = 0;
  
    
    function updateSlider() {
      items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
          item.classList.add('active');
        }
      });
    }
  
  
    function showNext() {
      currentIndex = (currentIndex + 1) % items.length;
      updateSlider();
    }
  
  
    function showPrev() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateSlider();
    }
  
   
    items.forEach(item => {
      const hoverOverlay = item.querySelector('.hover-overlay');
      hoverOverlay.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        const description = item.getAttribute('data-description');
        const food = item.getAttribute('data-food');
  
      
        catName.textContent = name;
        catDescription.textContent = description;
        catFood.textContent = food;
  
      
        catDetails.classList.remove('hidden');
      });
    });
  
  
    closeDetails.addEventListener('click', () => {
      catDetails.classList.add('hidden');
    });
  
   
    nextBtn.addEventListener('click', showNext);
  
   
    prevBtn.addEventListener('click', showPrev);
  
 
    setInterval(() => {
      showNext();
    }, 5000);
  });