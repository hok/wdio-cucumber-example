// This will be imported by other pages and should only have common
// elements/behaviour

export default class Page {
  open(path) {
    browser.url(path);
  }
}
