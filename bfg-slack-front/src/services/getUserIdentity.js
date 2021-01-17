async function getUserUdentity(token) {
  try {
    const resp = await fetch(
      `https://slack.com/api/users.identity?token=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default getUserUdentity;
