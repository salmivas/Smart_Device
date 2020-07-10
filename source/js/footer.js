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

    activityToggler.addEventListener('click', function () {
      toggleMenu(footerNavigation, FOOTER_NAVIGATION_CLOSED);
    });

    contactsToggler.addEventListener('click', function () {
      toggleMenu(footerContacts, FOOTER_CONTACTS_CLOSED);
    });
  }
})();
