import getAccessToken from '../services/getAccessToken';

const slackConnect = () => {
  const { bpRestApi } = window;
  const queryCode = window.location.search;
  const urlParams = new URLSearchParams(queryCode);
  const code = urlParams.get('code');
  const codeError = urlParams.get('error');

  const init = () => {
    if (codeError) {
      window.location.href = '/';
      return;
    }
    if (code !== null) {
      getAccessToken(code, bpRestApi.idSlack, bpRestApi.secretSlack).then((data) => {
        const {team_id, user_id, team_name} = data;
        setUserSlackInProfile(user_id, team_id, team_name).then((setUserData) => {
          getUserInfo(Number(bpRestApi.sessionUserID)).then((userData) => {
            const { link } = userData;
            window.location.href = link;
          }).then((error) => {
            console.log(error);
          });
        });
      }).then((error) => {
        console.log(error);
      });
    }
  };
  const getUserInfo = async (userId) => {
    try {
      const configSetting = await fetch(
        `https://${window.location.host}/wp-json/buddyboss/v1/members/${userId}`,
        // `http://${window.location.host}/wp-json/buddyboss/v1/members/${userId}`,
        {
          method: 'GET',
          headers: {
            'X-WP-Nonce': bpRestApi.nonce,
          },
        },
      );
      const userData = await configSetting.json();
      return userData;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error');
    }
  };

  // EN produccion group_id=4&field_id=50
  // EN local group_id=1&field_id=4
  const setUserSlackInProfile = async (userId, teamId, team_name) => {
    try {
      const response = await fetch(
        `https://${window.location.host}/wp-json/buddyboss/v1/xprofile/4/data/1`,
        // `http://${window.location.host}/wp-json/buddyboss/v1/xprofile/4/data/1`,
        {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-WP-Nonce': bpRestApi.nonce,
          },
          body: JSON.stringify({
            user_id: Number(bpRestApi.sessionUserID),
            field_id: 4,
            // field_id: 4,
            value: [userId, '-', teamId],
          }),
        },
      );
      const resp = await response.json();
      return resp;
    } catch (error) {
      console.log('error: ', error);
    }
  };
  return {
    init,
  };
};
export default slackConnect;
