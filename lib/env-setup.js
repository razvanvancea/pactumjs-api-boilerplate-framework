'use strict';

const env = process.env.ENV;

const BASE_URLS = {
  prod: 'https://jsonplaceholder.typicode.com',
  dev: 'https://dev.jsonplaceholder.typicode.com',
};

const CRED_KEYS = ['USERNAME', 'PASSWORD', 'DEV_USERNAME', 'DEV_PASSWORD'];

if (!BASE_URLS[env]) {
  console.warn(
    `[env-setup] ENV="${env}" not recognized. Expected 'dev' or 'prod'. Falling back to PROD.`
  );
}

process.env.BASE_URL = BASE_URLS[env] ?? BASE_URLS.prod;

console.log(
  `[env-setup] Running against ${BASE_URLS[env]} ? env : 'prod' environment: ${process.env.BASE_URL}`
);

if (env === 'dev') {
  CRED_KEYS.forEach((key) => {
    const devValue = process.env[`DEV_${key}`];
    if (devValue !== undefined) {
      process.env[key] = devValue;
    } else {
      console.warn(`[env-setup] Warning: DEV_${key} is not set in .env file`);
    }
  });
}
