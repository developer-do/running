const highlightActions = document.querySelectorAll('[data-action="highlight"]');
console.log(highlightActions);
console.log(highlightActions[0].dataset);
console.log(highlightActions[0].dataset.containing = "giraffe");
console.log(highlightActions[0].dataset.caseSensitive = true);
console.log(highlightActions[0].dataset);