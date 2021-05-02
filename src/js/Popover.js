export default class Popover {
  constructor(container) {
    this.container = container;
    this.isShow = false;
  }

  static get markup() {
    return `
      <div class="popover hidden fade">
        <div class="popover-arrow"></div>
        <h3 class="popover-title"></h3>
        <div class="popover-body"></div>
      </div>
    `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.constructor.markup);
  }

  get popoverContainer() {
    return this.container.querySelector('.popover');
  }

  get popoverTitle() {
    return this.container.querySelector('.popover-title');
  }

  get popoverBody() {
    return this.container.querySelector('.popover-body');
  }

  showPopover(element) {
    if (this.isShow) {
      this.popoverContainer.classList.remove('show');
      setTimeout(() => {
        this.popoverContainer.classList.add('hidden');
        this.popoverTitle.textContent = '';
        this.popoverBody.textContent = '';
      }, 500);
      this.isShow = !this.isShow;
      return;
    }
    this.isShow = !this.isShow;
    this.popoverTitle.textContent = element.dataset.ttTitle;
    this.popoverBody.textContent = element.dataset.ttMessage;
    const baseElementCoord = element.getBoundingClientRect();
    this.popoverContainer.classList.remove('hidden');
    const popoverElementCoord = this.popoverContainer.getBoundingClientRect();
    this.popoverContainer.style.top = `
    ${baseElementCoord.top - popoverElementCoord.height - 10}px
    `;
    this.popoverContainer.style.left = `
    ${baseElementCoord.left + baseElementCoord.width / 2 - popoverElementCoord.width / 2}px
    `;
    this.popoverContainer.classList.add('show');
  }
}
