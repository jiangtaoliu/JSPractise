const request = require('superagent');

const get = async (url, authToken) => {
  const response = await request
    .get(`${url}`)
    .set('User-Agent', 'node-superagent')
    .set('Authorization', `Bearer ${authToken}`)
    .ok(res => res.status < 500);
  return response;
};

const urls = 'https://gorest.co.in/public/v2/users';
const token = '57a1c2a4c33cc671a27070c084831d21a7eb6335f99871c684601656dafc9611';
(async () => {
  const res = await get(urls, token);
  console.log(res.body);
})();
