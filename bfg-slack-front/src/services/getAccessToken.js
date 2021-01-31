async function getAccessToken(code, idSlack, secretSlack ) {
  try {
    const resp = await fetch('https://slack.com/api/oauth.access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `code=${code}&client_id=${idSlack}&client_secret=${secretSlack}`,
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default getAccessToken;
