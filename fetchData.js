const fs = require('fs');
const axios = require('axios');

async function fetchData() {
  const userId = process.env.USER_ID;
  const authToken = process.env.AUTH_TOKEN;
  const endpointUrl = process.env.ENDPOINT_URL;

  try {
    const response = await axios.post(endpointUrl, null, { params: {
        userId: userId,
        authToken: authToken,
        language: "en",
        platform: "ios"
      }
    });

    fs.writeFileSync('data.json', JSON.stringify(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
    process.exit(1);
  }
}

fetchData();
