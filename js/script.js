const input = document.getElementById("link-input");
const form = document.getElementById("link-form");
const errorMsg = document.getElementById("error-msg");

function isValidUrl(str) {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value?.trim();
  console.log("value: ", value);
  if (!value) {
    errorMsg.innerHTML = "Please, enter a URL";
    input.classList.add("border-red");
  } else if (!isValidUrl(value)) {
    errorMsg.innerHTML = "Please, enter a valid URL";
    input.classList.add("border-red");
  } else {
    input.classList.remove("border-red");
    errorMsg.innerHTML = "";
    alert("Horray!");
  }
});
