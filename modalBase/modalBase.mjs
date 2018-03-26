import getStyles from './styles.mjs';
import getTemplate from './template.mjs';

const elName = 'modal-base';
const buttonTypes = {
  CANCEL: 'Cancel',
  NO: 'No',
  OK: 'OK',
  YES: 'Yes',
};

export default class ModalBase extends HTMLElement {
  constructor(headerText = 'replace me!', buttons = null, height = 500, width = 700) {
    super();
    this._buttons = buttons ?
                    buttons.split('|').map(button => ({type: button, text: buttonTypes[button]})) :
                    null;
    this._headerText = headerText;
    this._height = height;
    this._rendered = false;
    this._styles = null;
    this._template = null;
    this._width = width;
  }

  disconnectedCallback() {
    // NOTE: this might not be necessary:
    this.removeEventListener('click', this._click);

    const styleEl = document.head.querySelector(`style[component="${elName}"]`);
    if (styleEl) {
      styleEl.remove();
    }
  }

  _cancelButton() {
    console.info('CANCEL');
  }

  _close() {
    this.remove();
  }

  _handleClick(event) {
    const {target} = event;
    if (target.classList.contains(`${elName}__background`) ||
        target.classList.contains(`${elName}__close`)) {
      this._close();
    } else if (target.classList.contains(`${elName}__button`)) {
      this[`_${target.getAttribute('data-type').toLowerCase()}Button`]();
    }
  }

  _noButton() {
    console.info('NO');
  }

  _okButton() {
    console.info('OK');
  }

  _renderModal(styles, template) {
    if (!document.head.querySelector(`style[component="${elName}"]`)) {
      const height = this.getAttribute('height') || this._height;
      const width = this.getAttribute('width') || this._width;
      const styleEl = document.createElement('style');
      styleEl.setAttribute('component', elName);
      styleEl.textContent = getStyles([elName, height, width]) + styles;
      document.head.appendChild(styleEl);
    }

    this.innerHTML = getTemplate([
      elName,
      template,
      this._headerText || 'replace me!',
      this._buttons
    ]);

    this._click = this._handleClick.bind(this);
    this.addEventListener('click', this._click);
  }

  _yesButton() {
    console.info('YES');
  }
}
