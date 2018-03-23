import ModalBase from '../modalBase.mjs';
import getStyles from './styles.mjs';
import getTemplate from './template.mjs';

const elName = 'modal-test-1';

customElements.define(elName, class extends ModalBase {
  constructor() {
    super('Modal Test', 'YES|NO|CANCEL|OK');
    this._styles = getStyles(elName);
    this._template = getTemplate([elName]);
  }

  connectedCallback() {
    if (!this._rendered) {
      this._rendered = true;

      this._renderModal(this._styles, this._template);
    }
  }

  _yesButton() {
    console.log('Overriding the yes button');
  }
});
