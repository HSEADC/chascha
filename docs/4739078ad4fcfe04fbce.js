import './index.css';
import jpg from './images/image.jpg';
import './fonts/ofont.ru_Arial Narrow.ttf';
import './fonts/arialnarrow_bold.ttf';
import './fonts/arialnarrow_italic.ttf';
import './fonts/arialnarrow_bolditalic.ttf';
console.log(require('./fonts/ofont.ru_Arial Narrow.ttf'));
console.log(require('./fonts/arialnarrow_bold.ttf'));
console.log(require('./fonts/PT-Root-UI_Regular.woff2'));
document.addEventListener('DOMContentLoaded', function () {
  var filters = document.querySelectorAll('.A_Chapters u[data-filter]');
  var cards = document.querySelectorAll('.M_Card');
  var showAllButton = document.querySelector('.A_ShowAllButton');
  filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      var selectedTag = filter.getAttribute('data-filter');
      cards.forEach(function (card) {
        var _card$querySelector;
        var cardTag = (_card$querySelector = card.querySelector('.A_CardTag p')) === null || _card$querySelector === void 0 ? void 0 : _card$querySelector.textContent.replace('#', '');
        if (cardTag === selectedTag) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  showAllButton.addEventListener('click', function () {
    cards.forEach(function (card) {
      card.style.display = 'flex';
    });
  });
});