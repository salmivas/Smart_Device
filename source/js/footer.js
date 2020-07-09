"use strict";
(function () {
  var footerNavigation = document.querySelector(".page-footer__navigation");
  var activityToggler = document.querySelector(".page-footer__activity-accordion-toggler");
  var footerContacts = document.querySelector(".page-footer__contacts");
  var contactsToggler = document.querySelector(".page-footer__contacts-accordion-toggler");
  var factAndInformationParagraphs = document.querySelectorAll(".about-us p");

  var MAX_TABLET_WIDTH_MEDIA = window.matchMedia("(max-width: 1023px)");
  var FOOTER_NAVIGATION_CLOSED = "page-footer__navigation--closed";
  var FOOTER_CONTACTS_CLOSED = "page-footer__contacts--closed";
  var LENGTH_OF_PARAGRPAPH_TO_TRUNCATE = 200;

  var IconsID = {
    PLUS: "#icon-plus",
    MINUS: "#icon-minus",
  };

  var toggleMenu = function (elementToCheck, closingSelector) {
    elementToCheck.classList.toggle(closingSelector);
    if (elementToCheck.classList.contains(closingSelector)) {
      elementToCheck.querySelector("use").href.baseVal = IconsID.PLUS;
    } else {
      elementToCheck.querySelector("use").href.baseVal = IconsID.MINUS;
    }
  };

  var truncateText = function (element, maxLength) {
    var truncated = element.innerText;

    if (truncated.length > maxLength && MAX_TABLET_WIDTH_MEDIA.matches) {
      truncated = truncated.substr(0, maxLength) + "..";
    }
    return truncated;
  };

  activityToggler.addEventListener("click", function () {
    toggleMenu(footerNavigation, FOOTER_NAVIGATION_CLOSED);
  });

  contactsToggler.addEventListener("click", function () {
    toggleMenu(footerContacts, FOOTER_CONTACTS_CLOSED);
  });

  for (var i = 0; i < factAndInformationParagraphs.length; i++) {
    factAndInformationParagraphs[i].innerText = truncateText(factAndInformationParagraphs[i], LENGTH_OF_PARAGRPAPH_TO_TRUNCATE);
  }
})();
