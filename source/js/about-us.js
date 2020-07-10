'use strict';
(function () {
  var aboutUs = document.querySelector('.about-us');
  if (aboutUs) {
    var factAndInformationParagraphs = aboutUs.querySelectorAll('p');
    var MAX_TABLET_WIDTH_MEDIA = window.matchMedia('(max-width: 1023px)');
    var LENGTH_OF_PARAGRPAPH_TO_TRUNCATE = 200;

    var truncateText = function (element, maxLength) {
      var truncated = element.innerText;

      if (truncated.length > maxLength && MAX_TABLET_WIDTH_MEDIA.matches) {
        truncated = truncated.substr(0, maxLength) + '..';
      }
      return truncated;
    };

    for (var i = 0; i < factAndInformationParagraphs.length; i++) {
      factAndInformationParagraphs[i].innerText = truncateText(factAndInformationParagraphs[i], LENGTH_OF_PARAGRPAPH_TO_TRUNCATE);
    }
  }
})();
