async function getAccessToken(code, idSlack, secretSlack ) {
  try {
    const resp = await fetch('https://slack.com/api/oauth.access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `code=${code}&client_id=1202804016946.1695908297266&client_secret=78db4d92c56ad88e92a4b1828a89c74f`,
      // body: `code=${code}&client_id=137723501795.1353738797012&client_secret=79472285d2bcdd5c24b56e09006be4ee`,
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default getAccessToken;
