// when user click extension icon . an eyedropper appear and user can pick color.
//But  as this script is executing in website(content)
// so, the picked color is not available in popup to show

// function pickColor() {
//   if (!window.EyeDropper) {
//     console.log("Your browser does not support the EyeDropper API");
//     return;
//   }

//   const eyeDropper = new EyeDropper();
//   const abortController = new AbortController();

//   eyeDropper
//     .open({ signal: abortController.signal })
//     .then((result) => {
//       console.log(result.sRGBHex);// check website console
//       alert(result.sRGBHex);
//     })
//     .catch((e) => {
//       console.log({ e });
//     });

//   setTimeout(() => {
//     abortController.abort();
//   }, 2000);// eyedropper will be closed after 2 second
// }

// chrome.action.onClicked.addListener((tab) => {
//   console.log("clicked");
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: pickColor,
//   });
// });
