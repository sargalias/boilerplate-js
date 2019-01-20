import './app.scss';

const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerText = 'Hello World!';
const button = document.createElement('button');
const button2 = document.createElement('button');

div.appendChild(h1);
div.appendChild(button);
div.appendChild(button2);
document.body.appendChild(div);

// Preloaded script
button.innerText = 'Load preloaded script';
button.addEventListener('click', () => {
  import(
    './preloadedScript',
    /* webpackPreload: true */
    /* webpackChunkName: 'preloadedScript' */
  ).then((script) => {
    const p = document.createElement('p');
    p.innerText = script.default.text;
    div.appendChild(p);
  });
});

// Prefetched script
button2.innerText = 'Load prefetched script';
button2.addEventListener('click', () => {
  import(
    './prefetchedScript',
    /* webpackPrefetch: true */
    /* webpackChunkName: 'prefetchedScript' */
  ).then((script) => {
    const p = document.createElement('p');
    p.innerText = script.default.text;
    div.appendChild(p);
  });
});
