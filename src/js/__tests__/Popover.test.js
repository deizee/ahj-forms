import Popover from '../Popover';

const popover = new Popover(document.createElement('div'));
popover.bindToDOM();

test('Метод bindToDOM подключает разметку в DOM', () => {
  expect(popover.container.innerHTML).toEqual(Popover.markup);
});

test('Геттер popoverContainer возвращает правильный элемент', () => {
  expect(popover.popoverContainer.classList.contains('popover')).toBeTruthy();
});

test('Геттер popoverTitle возвращает правильный элемент', () => {
  expect(popover.popoverTitle.classList.contains('popover-title')).toBeTruthy();
});

test('Геттер popoverBody возвращает правильный элемент', () => {
  expect(popover.popoverBody.classList.contains('popover-body')).toBeTruthy();
});

test('Если this.isShow = false, метод showPopover меняет его значение на true', () => {
  popover.showPopover(document.createElement('div'));
  expect(popover.isShow).toBe(true);
});

test('Если this.isShow = true, метод showPopover меняет его значение на false', () => {
  popover.showPopover(document.createElement('div'));
  expect(popover.isShow).toBe(false);
});

jest.useFakeTimers();
test('После того, как отработает таймер, содержимое поповера очистится', () => {
  popover.isShow = true;
  popover.showPopover(document.createElement('div'));
  jest.runAllTimers();

  // Now our callback should have been called!
  expect(popover.popoverTitle.textContent).toBe('');
  expect(popover.popoverBody.textContent).toBe('');
});
