const highlightActions = document.querySelectorAll('[data-action="highlight"]');
const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');

function highlightParas(containing) {
  if (typeof containing === 'string') {
    containing = new RegExp(`\\b${containing}\\b`, 'i');
  }
  const paras = document.getElementsByTagName('p');
  console.log(paras);
  for (let p of paras) {
    if (!containing.test(p.textContent)) {
      continue;
    }
    p.classList.add('highlight');
  }
}

function removeParaHighlights() {
  const paras = document.querySelectorAll('p.highlight');
  for (let a of paras) {
    a.classList.remove('highlight');
  }
}

for (let a of highlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    highlightParas(a.dataset.containing);
    console.log(evt.pageX + "," + evt.pageY);
  });
}

for (let a of removeHighlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    removeParaHighlights();
    console.log(evt.pageX + "," + evt.pageY);
  })
}