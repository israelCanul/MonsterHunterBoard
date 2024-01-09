function isValid(e) {
  e.target.classList.remove('is-invalid');
  e.target.classList.add('is-valid');
}
function isInValid(e) {
  e.target.classList.add('is-invalid');
  e.target.classList.remove('is-valid');
}

function checkAllInputs(inputArrays) {
  let response = true;
  inputArrays.forEach((element) => {
    if (!document.querySelector(`#${element}`).classList.contains('is-valid'))
      response = false;
  });
  return response;
}

function validEmpty(e, renderTag) {
  if (e.target.value !== '') {
    isValid(e);
    document.querySelector(renderTag).innerHTML = e.target.value;
  } else {
    document.querySelector(renderTag).innerHTML = '';
    isInValid(e);
  }
}
function validEmailEmpty(e, renderTag) {
  if (e.target.value !== '' && validateEmail(e.target.value)) {
    isValid(e);
    document.querySelector(renderTag).innerHTML = e.target.value;
    document
      .querySelector(renderTag)
      .setAttribute('href', `mailto:${e.target.value}`);
  } else {
    document.querySelector(renderTag).innerHTML = '';
    isInValid(e);
  }
}
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function CopyToClipboard(element, callback = () => {}) {
  var doc = document,
    text = doc.getElementById(element),
    range,
    selection;

  if (doc.body.createTextRange) {
    range = doc.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = doc.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  // document.execCommand('copy');
  const html = new Blob([text.outerHTML], { type: 'text/html' });
  const data = new ClipboardItem({ 'text/html': html });

  navigator.clipboard.write([data]).then(
    () => {
      /* success */
      console.log('se copio');
      callback(true, false);
    },
    (e) => {
      /* failure */
      callback(false, true);
      console.log(e);
      console.log('error al copiar');
    }
  );
  window.getSelection().removeAllRanges();
}

export {
  validEmpty,
  isInValid,
  isValid,
  validEmailEmpty,
  CopyToClipboard,
  checkAllInputs,
};
