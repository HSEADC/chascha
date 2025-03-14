import './index.css'
import jpg from './images/image.jpg'

import './fonts/ofont.ru_Arial Narrow.ttf';
import './fonts/arialnarrow_bold.ttf';
import './fonts/arialnarrow_italic.ttf';
import './fonts/arialnarrow_bolditalic.ttf';

console.log(require('./fonts/ofont.ru_Arial Narrow.ttf'));
console.log(require('./fonts/arialnarrow_bold.ttf'));
console.log(require('./fonts/PT-Root-UI_Regular.woff2'));


document.addEventListener('DOMContentLoaded', function () {
    
    const filters = document.querySelectorAll('.A_Chapters u[data-filter]');
    const cards = document.querySelectorAll('.M_Card');
    const showAllButton = document.querySelector('.A_ShowAllButton');
  
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        const selectedTag = filter.getAttribute('data-filter');
  
        cards.forEach(card => {
          const cardTag = card.querySelector('.A_CardTag p')?.textContent.replace('#', ''); 
  
          if (cardTag === selectedTag) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  
    showAllButton.addEventListener('click', () => {
      cards.forEach(card => {
        card.style.display = 'flex'; 
      });
    });


  });
