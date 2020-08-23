import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { Auth0Provider } from '@auth0/auth0-react';

// eslint-disable-next-line no-undef
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
// eslint-disable-next-line no-undef
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;

render(
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
