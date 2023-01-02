## Google OAuth2
[![HitCount](http://hits.dwyl.com/theazran/google-oauth2.svg)](http://hits.dwyl.com/theazran/google-oauth2) ![GitHub repo size](https://img.shields.io/github/repo-size/theazran/google-oauth2?style=flat) [![npm version](https://badge.fury.io/js/google-oauth2.svg)](https://badge.fury.io/js/google-oauth2)

Before using `theazran/google-oauth2`, you must register an application with Google. If you have not already done so, a new project can be created in the [Google Developers Console](https://console.cloud.google.com/). Your application will be issued a client ID and client secret, which need to be provided to the strategy. You will also need to configure a redirect URI which matches the route in your application.

## Change this [line](https://github.com/theazran/google-oauth2/blob/main/auth/google.js#L4)
```js
const GOOGLE_CLIENT_ID = 'Google-client-ID'
const GOOGLE_CLIENT_SECRET = 'Google-client-secret'
const CALLBACK_URL = 'https://domain.com/google/callback' 
```

## Instalation
``` bash
git clone https://github.com/theazran/google-oauth2
cd google-oauth2
npm install
npm start
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Donate Me
[Saweria](https://saweria.co/theazran)