const html =
  `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
  `<A href="/bar" Class="bar">Bar</A>\n` +
  `<a href="/baz">Baz</a>\n` +
  `<a onclick="javascrip:alert('quz!')" href="/qux">Qux</a>`;
console.log(html);


function sanitizeATag(aTag) {
  // 태그에서 원하는 부분을 뽑아냅니다.
  const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
  // parts[1]은 여는 <a> 태그에 들어 있는 속성입니다.
  // parts[2]는 <a>와 </a>사이에 있는 텍스트 입니다.
  console.log(parts);
  const attributes = parts[1]
    .split(/\s+/);
  console.log(attributes);
  return '<a ' + attributes
    .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
    .join(' ')
    + '>'
    + parts[2]
    + '</a>';
}
console.log(sanitizeATag(html));
console.log(html.match(/<a .*?>(.*?)<\/a>/ig));

html.replace(/<a .*?>(.*?)<\/a>/ig, function (m, g1, offset) {
  console.log(`<a> tag found at${offset} contents: ${g1} ${m}`);
});


const html2 = html.replace(/<a .*?<\a>/ig, function (m) {
  return sanitizeATag(m);
});
console.log(html2);