import './app.scss';
import _ from 'lodash';

const div = document.createElement('div');
div.innerHTML = 'Hello World';
document.body.appendChild(div);
import('path')
  .then(path => path.join('', ''));
import('os')
  .then(os => os.constants);

const button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);
button.addEventListener('click', () => {
  import(
    './other'
    /* webpackPreload: true */
    /* webpackChunkName: "other" */
    )
    .then(other => console.log(other.default()));
});

import(
  './third'
  /* webpackPreload: true */
  /* webpackChunkName: "third" */
);
