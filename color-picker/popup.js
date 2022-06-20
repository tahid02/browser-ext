const btn = document.querySelector(".changeColorBtn");
const colorGrid = document.querySelector(".colorGrid");
const colorValue = document.querySelector(".colorValue");

btn.addEventListener("click", async () => {
  chrome.storage.sync.get("color", ({ color }) => {
    console.log("color: ", color);
  });
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  await chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: pickColor,
    },
    (result) => {
      console.log({ result });
      let color = result[0]?.result.sRGBHex;
      if (color) {
        colorGrid.style.backgroundColor = color;
        colorValue.innerText = color;
      }
    }
  );
});

// pick color func
// this func will work in content(its not in popup, so its cant even access colorGrid and colorValue). so check website console for this func
async function pickColor() {
  if (!window.EyeDropper) {
    console.log("Your browser does not support the EyeDropper API");
    return;
  }

  const eyeDropper = await new EyeDropper();
  const abortController = await new AbortController();

  return await eyeDropper.open({ signal: abortController.signal });
}
