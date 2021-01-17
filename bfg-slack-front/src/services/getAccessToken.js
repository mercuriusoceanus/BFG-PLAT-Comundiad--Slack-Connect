async function getAccessToken(code) {
  try {
    const resp = await fetch('https://slack.com/api/oauth.access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `code=${code}&client_id=752006658772.1466838087428&client_secret=354689b3087427b1d404d8e1ce070c46`,
      // body: `code=${code}&client_id=137723501795.1353738797012&client_secret=79472285d2bcdd5c24b56e09006be4ee`,
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default getAccessToken;
