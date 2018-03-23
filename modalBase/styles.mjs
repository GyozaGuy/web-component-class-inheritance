export default function getStyles([elName, height, width]) {
  return `
    .${elName}__background {
      background-color: #000a;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
    .${elName}__container {
      background-color: #fff;
      border: 1px solid #aaa;
      border-radius: 5px;
      height: ${height}px;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: ${width}px;
    }
    .${elName}__controls {
      background-color: #ccc;
      color: #444;
      font-size: 1.5em;
      height: 50px;
      line-height: 50px;
      padding: 0 10px;
      width: 100%;
    }
    .${elName}__header {
      border-bottom: 1px solid #aaa;
    }
    .${elName}__close {
      cursor: pointer;
      float: right;
    }
    .${elName}__templateContainer {
      height: calc(100% - 100px);
      overflow: auto;
      padding: 10px;
    }
    .${elName}__footer {
      border-top: 1px solid #aaa;
      text-align: center;
    }
    .${elName}__button {
      cursor: pointer;
      font-size: .75em;
      height: 80%;
      width: 80px;
    }
    .${elName}__button + .${elName}__button {
      margin-left: 5px;
    }
  `;
}
