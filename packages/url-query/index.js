export function URLQuery(url) {
  let arr = [];
  let obj = {};
  if (url.indexOf("?") != -1) {
    let parseStr = url.split("?")[1];
    if (parseStr.indexOf("&") != -1) {
      arr = parseStr.split("&");
      for (let i = 0; i < arr.length; i++) {
        let key = arr[i].split("=")[0];
        let val = arr[i].split("=")[1] || "";
        if (key) {
          obj[key] = val;
        }
      }
    } else {
      obj[parseStr.split("=")[0]] = parseStr.split("=")[1];
    }
  }
  return obj;
}
