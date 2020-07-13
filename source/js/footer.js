'use strict';
(function () {
  var footer = document.querySelector('.page-footer');

  if (footer) {
    var footerNavigation = document.querySelector('.page-footer__navigation');
    var activityToggler = document.querySelector('.page-footer__activity-accordion-toggler');
    var footerContacts = document.querySelector('.page-footer__contacts');
    var contactsToggler = document.querySelector('.page-footer__contacts-accordion-toggler');

    var FOOTER_NAVIGATION_CLOSED = 'page-footer__navigation--closed';
    var FOOTER_CONTACTS_CLOSED = 'page-footer__contacts--closed';

    var IconsID = {
      PLUS: '#icon-plus',
      MINUS: '#icon-minus',
    };

    var toggleMenu = function (elementToCheck, closingSelector) {
      elementToCheck.classList.toggle(closingSelector);
      if (elementToCheck.classList.contains(closingSelector)) {
        elementToCheck.querySelector('use').href.baseVal = IconsID.PLUS;
        return;
      }
      elementToCheck.querySelector('use').href.baseVal = IconsID.MINUS;
    };

    var toggleNeighbor = function (neighborElement, closingSelector) {
      if (!neighborElement.classList.contains(closingSelector)) {
        toggleMenu(neighborElement, closingSelector);
      }
    };

    activityToggler.addEventListener('click', function () {
      if (!footerNavigation.classList.contains(FOOTER_NAVIGATION_CLOSED) && !footerContacts.classList.contains(FOOTER_CONTACTS_CLOSED)) {
        toggleMenu(footerNavigation, FOOTER_NAVIGATION_CLOSED);
      } else {
        toggleMenu(footerNavigation, FOOTER_NAVIGATION_CLOSED);
        toggleNeighbor(footerContacts, FOOTER_CONTACTS_CLOSED);
      }
    });

    contactsToggler.addEventListener('click', function () {
      if (!footerNavigation.classList.contains(FOOTER_NAVIGATION_CLOSED) && !footerContacts.classList.contains(FOOTER_CONTACTS_CLOSED)) {
        toggleMenu(footerContacts, FOOTER_CONTACTS_CLOSED);
      } else {
        toggleMenu(footerContacts, FOOTER_CONTACTS_CLOSED);
        toggleNeighbor(footerNavigation, FOOTER_NAVIGATION_CLOSED);
      }
    });
  }
})();
