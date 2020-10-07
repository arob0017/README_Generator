const axios = require('axios');

const api = {
    async getUser(answers) {
        try {
            let response = await axios

                // Sample URL: https://api.github.com/users/arob0017
                .get(`https://api.github.com/users/${answers.username}`);
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = api;