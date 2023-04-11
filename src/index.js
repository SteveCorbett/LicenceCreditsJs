import "./styles.css";

function outputPackage(htmlElement, item) {
  //   const plural = item.packages.length > 1 ? "s" : "";
  const licenceDetail =
    item.licence == ""
      ? ""
      : `<div style="white-space: pre-wrap" class="spaceAfter">${item.licence}</div>`;
  htmlElement.innerHTML +=
    `<div class="licencePanel">          
        <div class="spaceAfter">
            Package${item.packages.length > 1 ? "s" : ""}: ${item.packages.join(
      ", "
    )}
        </div>
        <div class="spaceAfter" style="display: flex">
            <span style="min-width: 15rem; margin-right: 1rem"
              >Publisher: ${item.publisher}</span
            >
            <span>Licence: ${item.type}</span>
        </div>` +
    licenceDetail +
    "</div>";
}

const appDiv = document.getElementById("panels");

fetch("/public/licences.json", {
  headers: {
    "content-type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    for (let ix = 0; ix < response.licences.length; ix++) {
      outputPackage(appDiv, response.licences[ix]);
    }
  })
  .catch((err) => {
    console.error("Error!: ", err);
  });
