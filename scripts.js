function addRedmineButton() {
  let button = document.createElement("input");
  button.id = "redmine_card_button";
  button.type = "button";
  button.value = "Open Redmine Card";

  button.onclick = () => {
    alert("Redmine Card");
  };
  document
    .querySelector(
      "#partial-discussion-header > div.d-flex.flex-items-center.flex-wrap.mt-0.gh-header-meta > div.flex-shrink-0.mb-2.flex-self-start.flex-md-self-center"
    )
    .appendChild(button);
}

(() => {
  addRedmineButton();
})();
