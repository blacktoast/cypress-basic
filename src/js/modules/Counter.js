export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  function getCount() {
    return document.querySelector(".count-display").value;
  }
  function storeCount(data) {
    document.querySelector(".count-display").value = data;
    return;
  }

  const initEvent = () => {
    document.querySelector(".plus-button").addEventListener("click", (e) => {
      increase();
    });
    document.querySelector(".minus-button").addEventListener("click", () => {
      decrease();
    });
  };

  function increase() {
    let v = parseInt(getCount());
    if (v >= 12) {
      return;
    }
    v += 1;
    storeCount(v);
  }

  function decrease() {
    let v = parseInt(getCount());
    if (v <= 8) {
      return;
    }
    v -= 1;
    storeCount(v);
  }
  const init = () => {
    render();
    initEvent();
  };

  init();
}
