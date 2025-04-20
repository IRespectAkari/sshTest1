// document.body.innerHTML = document.body.innerHTML.replaceAll("管理人", '<span style="color: red;">管理人</span>');

// 管理人の名前を赤くする
const bArray = Array.from(document.querySelectorAll("body table.maintables:has(colgroup) tbody > tr > td > b"))
bArray.filter(e => e.innerText.match(/^管理人 ?$/)).forEach(e => e.style.color = `red`);

if (document.URL === "https://bbs1.sekkaku.net/bbs/milkchoco/") {
  const a = document.querySelectorAll(`div[id^="SURE"]`);
  const d = new Date();
  const today = `0${d.getMonth() + 1}-${d.getDate()}`;
  for (let e of a) {
    if (e.style.display === "none") {
      continue;
    }
    console.log(e.innerText.match(new RegExp(`${today}`))?.[0]);
}}

// textAreaにフォーカスがある && 空欄でない 時に、Ctrl + Enter で送信ボタンを押す
(() => {
  const msgTxtBox = document.querySelector('div#kakikomiform tr > td > textarea[name="mes"]');
  if (!msgTxtBox) {
    return;
  }
  const btn = document.querySelector('input[value=" 返 信 "]');
  msgTxtBox.addEventListener("keydown", (event) => {
    const txtEmpty = !msgTxtBox.value || !msgTxtBox.value.match(/\S/g);
    if (txtEmpty) {
      return;
    }

    const pressedCtrlEnter = event.ctrlKey && event.key === "Enter";
    if (pressedCtrlEnter) {
      btn.click();
    }
  });
})();
