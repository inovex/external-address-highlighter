{
  let form = document.querySelector("form");
  let formControls = form.elements;

  restorePreferences();
  form.addEventListener("keyup", savePreferences);


  function savePreferences() {
    browser.storage.local
      .set(getFormData())
      .catch(handleError);
  }

  function restorePreferences() {
    browser.storage.local
      .get({
        "selector": ".l1.q2[email]",
        "pattern": ".*@inovex.de",
        "flags": "i"
      })
      .then(
        setFormData,
        handleError
      );
  }


  function getFormData() {
    return {
      selector: formControls.selector.value,
      pattern: formControls.pattern.value,
      flags: formControls.flags.value
    };
  }

  function setFormData(data) {
    formControls.selector.value = data.selector;
    formControls.pattern.value = data.pattern;
    formControls.flags.value = data.flags;
  }


  function handleError(error) {
    console.error(error);
  }
}
