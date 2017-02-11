// Client helper functions to interact with the REST API

// add a new minion
// sends a POST request to /api/minions
/* eslint-disable no-undef */
function addMinion(minion, token, cb) {
  const body = JSON.stringify({
    minion,
    token,
  })

  return fetch('/api/minions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// authenticate user with JWT
// sends a POST request to /api/authenticate
/* eslint-disable no-undef */
function authenticate(credentials, cb) {

  const {
    name,
    password,
  } = credentials

  const body = JSON.stringify({
    name,
    password,
  })

  return fetch('/api/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// sends a GET request to /api/minions
/* eslint-disable no-undef */
function getMinions(token, cb) {
  return fetch(`/api/minions?token=${token}`, {
    accept: 'application/json'
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// request helpers
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = {
  authenticate,
  addMinion,
  getMinions,
};

export default Client;
