export async function includeHTML(selector, file) {
  const element = document.querySelector(selector);
  const response = await fetch(file);
  const html = await response.text();
  element.innerHTML = html;
}
