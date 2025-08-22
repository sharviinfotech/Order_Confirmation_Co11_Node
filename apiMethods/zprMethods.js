

module.exports = (() => {
    const axios = require('axios');
    const config = require('../config/apiConfig');

    const handleAxiosError = (error, functionName) => {
        console.error(`Error in ${functionName}:`, error.message);

        // Log detailed error information if available
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request made but no response received:', error.request);
        } else {
            console.error('Error details:', error.message);
        }

        // Gracefully return an error object
        return { error: `Error processing your request in ${functionName}` };
    };

    const getAuthHeader = () => {
        if (!config.THIRD_PARTY_USERNAME || !config.THIRD_PARTY_PASSWORD) {
            throw new Error('Third-party API credentials are missing');
        }

        const credentials = `${config.THIRD_PARTY_USERNAME}:${config.THIRD_PARTY_PASSWORD}`;
        const token = Buffer.from(credentials).toString('base64');
        return `Basic ${token}`;
    };

    return {
        zprPending: async (body, res) => {
            try {
                console.log('Sending POST payload to THIRD_PARTY_API_URL_POST_ZPRPENDING API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_ZPRPENDING);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_ZPRPENDING, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'zprPending');
                res.status(500).json(errorResponse);
            }
        },
        zprClose: async (body, res) => {
            try {
                console.log('Sending POST payload to zprClose API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_CLOSE);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_CLOSE, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'zprClose');
                res.status(500).json(errorResponse);
            }
        },
        grnList: async (body, res) => {
            try {
                console.log('Sending POST payload to grnList API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_GRN_LIST);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_GRN_LIST, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'grnList');
                res.status(500).json(errorResponse);
            }
        },
    };
})();

