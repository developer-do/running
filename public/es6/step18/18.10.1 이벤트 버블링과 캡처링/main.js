// 이벤트 핸들러를 만들어 반환합니다.
function logEvent(handlerName, type, cancel, stop, stopImmediate) {
  // 실제 이벤트 핸들러 입니다.
  return function(evt) {
    if(cancel) {
      evt.preventDefault();
    }
    if(stop) {
      evt.stopPropagation();
    }
    if(stopImmediate) {
      evt.stopImmediatePropagation();
    }
    console.log(`${type}: ${handlerName}` +
      (evt.defaultPrevented ? ' (canceled)' : ''));
  }
}
// 이벤트 핸들러를 요소에 추가합니다.
function addEventLogger(elt, type, action){
  const capture = type === 'capture';
  elt.addEventListener('click', logEvent(elt.tagName, type, action === 'cancel', action === 'stop', action === 'stop!'), capture);
}
const body = document.querySelector('body');
const div = document.querySelector('div');
const button = document.querySelector('button');
// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture');
// addEventLogger(button, 'bubble');


// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture', 'cancel');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture');
// addEventLogger(button, 'bubble');

addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture', 'cancel');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture', 'stop!');
addEventLogger(button, 'bubble');