import Popover from './Popover';

const container = document.querySelector('.container');
const popover = new Popover(container);

popover.bindToDOM();

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  popover.showPopover(btn);
});
