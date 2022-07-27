function addRedmineButton() {
  let button = document.createElement("input");

  button.id = "redmine_card_button";
  button.type = "button";

  let pullRequestTitle = document.querySelector(
    "#partial-discussion-header > div.gh-header-show > div > h1 > span.js-issue-title.markdown-title"
  );

  let pullRequestNumber = pullRequestTitle.textContent
    .split("/")[1]
    .replace("#", "");

  button.value = "Open Redmine Card #" + pullRequestNumber;

  button.onclick = () => {
    window.open("https://redmine.deriv.cloud/issues/" + pullRequestNumber);
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
