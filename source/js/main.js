/* eslint-disable */
"use strict";
(function () {
  var footerNavigation = document.querySelector(".page-footer__navigation");
  var activityToggler = document.querySelector(".page-footer__activity-accordion-toggler");
  var footerContacts = document.querySelector(".page-footer__contacts");
  var contactsToggler = document.querySelector(".page-footer__contacts-accordion-toggler");
  var factAndInformationParagraphs = document.querySelectorAll(".facts-and-information p");
  var body = document.querySelector("body");
  var callRequestButton = document.querySelector(".header__button");
  var modalFeedback = document.querySelector(".modal-feedback");
  var closeRequestButton = document.querySelector(".modal-feedback__close-button");
  var modalFeedbackForm = document.querySelector(".modal-feedback__form form");
  var modalUserName = document.getElementById("modal-user-name");
  var modalUserPhone = document.getElementById("modal-user-phone");
  var modalUserQuestion = document.getElementById("modal-question");
  var modalAdmission = document.getElementById("modal-admission");

  var MAX_TABLET_WIDTH_MEDIA = window.matchMedia("(max-width: 1023px)");
  var LENGTH_OF_PARAGRPAPH_TO_TRUNCATE = 200;
  var FORM_ALERT_MESSAGE = "Данные сохранены!";
  var MODAL_HIDDEN = "modal-feedback--hidden";
  var OVERFLOW_HIDDEN = "hidden";
  var SHAKE_ANIMATION_TIMEOUT = 600;
  var ERROR_STYLE = "shake 0.8s";
  var LOCALSTORAGE_DATA_NAME = "userData";

  var IconsID = {
    PLUS: "#icon-plus",
    MINUS: "#icon-minus",
  };

  var KeyCode = {
    ESCAPE: {
      LONG: "Escape",
      SHORT: "Esc",
    },
  };

  var NavigationSelector = {
    FOOTER_NAVIGATION_CLOSED: "page-footer__navigation--closed",
    FOOTER_NAVIGATION_OPENED: "page-footer__navigation--opened",
  };

  var ContactsSelector = {
    FOOTER_CONTACTS_CLOSED: "page-footer__contacts--closed",
    FOOTER_CONTACTS_OPENED: "page-footer__contacts--opened",
  };

  var formData = {
    userName: "",
    userPhone: "",
    userQuestion: "",
  };

  // The accordion logic
  var toggleMenu = function (elementToCheck, openingSelector, closingSelector) {
    if (elementToCheck.classList.contains(closingSelector)) {
      elementToCheck.classList.remove(closingSelector);
      elementToCheck.classList.add(openingSelector);
      elementToCheck.querySelector("use").href.baseVal = IconsID.MINUS;
    } else {
      elementToCheck.classList.add(closingSelector);
      elementToCheck.classList.remove(openingSelector);
      elementToCheck.querySelector("use").href.baseVal = IconsID.PLUS;
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
    toggleMenu(footerNavigation, NavigationSelector.FOOTER_NAVIGATION_OPENED, NavigationSelector.FOOTER_NAVIGATION_CLOSED);
  });

  contactsToggler.addEventListener("click", function () {
    toggleMenu(footerContacts, ContactsSelector.FOOTER_CONTACTS_OPENED, ContactsSelector.FOOTER_CONTACTS_CLOSED);
  });

  factAndInformationParagraphs.forEach(function (element) {
    element.innerText = truncateText(element, LENGTH_OF_PARAGRPAPH_TO_TRUNCATE);
  });

  // The form logic

  var onEscKeyDown = function (evt) {
    var isEscKey = evt.key === KeyCode.ESCAPE.LONG || evt.key === KeyCode.ESCAPE.SHORT;
    if (isEscKey) {
      hidePopup();
    }
    body.removeEventListener("keydown", onEscKeyDown);
  };

  var shake = function () {
    modalFeedback.style.animation = ERROR_STYLE;

    setTimeout(function () {
      modalFeedback.style.animation = "";
    }, SHAKE_ANIMATION_TIMEOUT);
  };

  var showPopup = function showPopup() {
    modalFeedback.classList.remove(MODAL_HIDDEN);
    body.style.overflow = OVERFLOW_HIDDEN;
    modalUserName.autofocus = true;
  };

  var hidePopup = function hidePopup() {
    modalFeedback.classList.add(MODAL_HIDDEN);
    body.style.overflow = "";
  };

  callRequestButton.addEventListener("click", function () {
    showPopup();
    body.addEventListener("keydown", onEscKeyDown);
  });

  window.addEventListener("click", function (event) {
    if (event.target === modalFeedback) {
      hidePopup();
    }
  });
  closeRequestButton.addEventListener("click", hidePopup);

  modalFeedbackForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (modalAdmission.checked) {
      formData.userName = modalUserName.value;
      formData.userPhone = modalUserPhone.value;
      formData.userQuestion = modalUserQuestion.value;
      localStorage.setItem(LOCALSTORAGE_DATA_NAME, JSON.stringify(formData));
      alert(FORM_ALERT_MESSAGE);
      hidePopup();
    }
    shake();
  });
})();
