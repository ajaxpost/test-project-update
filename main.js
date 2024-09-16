import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="get-update">
      检查版本是否发生变化
    </button>
    <button id="dis-worker">销毁 worker</button>
  </div>
`;

setupCounter(document.querySelector('#counter'));
const work = new Worker('./check.js');

work.onmessage = (e) => {
  const data = e.data;
  if (data.type === 'hasUpdate') {
    alert('版本已更新');
  }
};

const btn = document.getElementById('get-update');
const dis_worker = document.getElementById('dis-worker');

dis_worker.addEventListener('click', function () {
  work.terminate();
});

btn.addEventListener('click', async function () {
  const response = await fetch(`/m.json?v=${Date.now()}`);
  const etag = response.headers.get('etag');
  work.postMessage({
    type: 'check',
    etag,
  });
});
