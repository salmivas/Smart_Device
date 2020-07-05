/* eslint-disable */
"use strict";

var footerNavigation = document.querySelector(".page-footer__navigation");
var activityToggler = document.querySelector(".page-footer__activity-accordion-toggler");
var footerContacts = document.querySelector(".page-footer__contacts");
var contactsToggler = document.querySelector(".page-footer__contacts-accordion-toggler");
var factAndInformationParagraphs = document.querySelectorAll(".facts-and-information p");

var MAX_TABLET_WIDTH_MEDIA = window.matchMedia("(max-width: 1023px)");
var LENGTH_OF_PARAGRPAPH_TO_TRUNCATE = 200;

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

var truncateText = function (element, maxLength) {
  var truncated = element.innerText;

  if (truncated.length > maxLength && MAX_TABLET_WIDTH_MEDIA.matches) {
    truncated = truncated.substr(0, maxLength) + "..";
  }
  return truncated;
};

activityToggler.addEventListener("click", function () {
  toggleMenu(footerNavigation, NavigationSelectors.FOOTER_NAVIGATION_OPENED, NavigationSelectors.FOOTER_NAVIGATION_CLOSED);
});

contactsToggler.addEventListener("click", function () {
  toggleMenu(footerContacts, ContactsSelectors.FOOTER_CONTACTS_OPENED, ContactsSelectors.FOOTER_CONTACTS_CLOSED);
});

factAndInformationParagraphs.forEach(function (element) {
  element.innerText = truncateText(element, LENGTH_OF_PARAGRPAPH_TO_TRUNCATE);
});
