/* eslint-disable */
"use strict";

var footerNavigation = document.querySelector(".page-footer__navigation");
var activityToggler = document.querySelector(".page-footer__activity-accordion-toggler");
var footerContacts = document.querySelector(".page-footer__contacts");
var contactsToggler = document.querySelector(".page-footer__contacts-accordion-toggler");

var IconsIDs = {
  PLUS: "#icon-plus",
  MINUS: "#icon-minus",
};

var NavigationSelectors = {
  FOOTER_NAVIGATION_CLOSED: "page-footer__navigation--closed",
  FOOTER_NAVIGATION_OPENED: "page-footer__navigation--opened",
};

var ContactsSelectors = {
  FOOTER_CONTACTS_CLOSED: "page-footer__contacts--closed",
  FOOTER_CONTACTS_OPENED: "page-footer__contacts--opened",
};

var toggleMenu = function (elementToCheck, openingSelector, closingSelector) {
  if (elementToCheck.classList.contains(closingSelector)) {
    elementToCheck.classList.remove(closingSelector);
    elementToCheck.classList.add(openingSelector);
    elementToCheck.querySelector("use").href.baseVal = IconsIDs.MINUS;
  } else {
    elementToCheck.classList.add(closingSelector);
    elementToCheck.classList.remove(openingSelector);
    elementToCheck.querySelector("use").href.baseVal = IconsIDs.PLUS;
  }
};

activityToggler.addEventListener("click", function () {
  toggleMenu(footerNavigation, NavigationSelectors.FOOTER_NAVIGATION_OPENED, NavigationSelectors.FOOTER_NAVIGATION_CLOSED);
});

contactsToggler.addEventListener("click", function () {
  toggleMenu(footerContacts, ContactsSelectors.FOOTER_CONTACTS_OPENED, ContactsSelectors.FOOTER_CONTACTS_CLOSED);
});
