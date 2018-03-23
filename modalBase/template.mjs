export default function getTemplate([elName, template, headerText, buttons]) {
  return `
    <section class="${elName}__background"></section>
    <section class="${elName}__container">
      <section class="${elName}__controls ${elName}__header">
        ${headerText}
        <span title="Close" class="${elName}__close">&#x2715;</span>
      </section>
      <section class="${elName}__templateContainer">
        ${template}
      </section>
      ${buttons ? `<section class="${elName}__controls ${elName}__footer">
        ${buttons.map(button => `<button data-type="${button.type}" class="${elName}__button ${elName}__${button.type}">${button.text}</button>`).join('')}
      </section>` : ''}
    </section>
  `;
}
