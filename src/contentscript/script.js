{
  let selector;
  let regex;
  let checkFrequency = 1000;

  browser.storage.local
    .get({
      "selector": ".l1.q2[email]",
      "pattern": ".*@inovex.de",
      "flags": "i"
    })
    .then(init);

  function init(preferences) {
    selector = preferences.selector;
    regex = new RegExp(preferences.pattern, preferences.flags);

    if (selector && regex) {
      setInterval(checkElements, checkFrequency);
    }
  }



  function checkElements() {
    document
      .querySelectorAll(selector)
      .forEach(colorizeElement);
  }

  function colorizeElement(element) {
    const email = element.getAttribute("email");

    if (email.match(regex)) {
      markAsInternal(element);
    } else {
      markAsExternal(element);
    }
  }

  function markAsInternal(element) {
    element.style.backgroundColor = "#BFF020";
    element.style.color = "#424242";
  }

  function markAsExternal(element) {
    element.style.backgroundColor = "#E00051";
    element.style.color = "#F5F5F5";
  }
}
