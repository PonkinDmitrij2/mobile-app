'use strict';

const CONTENT = `content`;
const IMAGE = `photo-box__image`;
const IMAGE_FULL = `${IMAGE}--full`;
const CLOSE = `photo-box__close`;
const CLOSE_SHOWN = `${CLOSE}--show`;
const OVERLAY = `photo-box--overlay`;
const content = document.querySelector(`.${CONTENT}`);

const handlerPhotoFull = (event) => {
  if (event.target.classList.contains(IMAGE)) {
    const parentBox = event.target.parentElement;
    const btnClose = parentBox.querySelector(`.${CLOSE}`);

    parentBox.classList.add(OVERLAY);
    event.target.classList.add(IMAGE_FULL);
    btnClose.classList.add(CLOSE_SHOWN);

    const closeFullImg = () => {
      parentBox.classList.remove(OVERLAY);
      event.target.classList.remove(IMAGE_FULL);
      btnClose.classList.remove(CLOSE_SHOWN);
    };

    btnClose.addEventListener('click', closeFullImg);
  }
};

content.addEventListener('click', handlerPhotoFull);
