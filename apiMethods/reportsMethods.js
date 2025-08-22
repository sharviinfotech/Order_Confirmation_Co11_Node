
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

        grnprint: async (body, res) => {
            try {
                console.log('Sending POST payload to grnprint API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_GRN_PRINT);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_GRN_PRINT, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'grnprint');
                res.status(500).json(errorResponse);
            }
        },
       
        mb51: async (body, res) => {
            try {
                console.log('Sending POST payload to mb51 API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_MB51);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_MB51, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'mb51');
                res.status(500).json(errorResponse);
            }
        },
        mb52: async (body, res) => {
            try {
                console.log('Sending POST payload to mb52 API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_MB52);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_MB52, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'mb52');
                res.status(500).json(errorResponse);
            }
        },
        goodsreturn: async (body, res) => {
            try {
                console.log('Sending POST payload to goodsreturn API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_GOODS_RETURN);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_GOODS_RETURN, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'goodsreturn');
                res.status(500).json(errorResponse);
            }
        },

        zven: async (body, res) => {
            try {
                console.log('Sending POST payload to zven API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_ZVEN);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_ZVEN, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'zven');
                res.status(500).json(errorResponse);
            }
        },
        zdebit: async (body, res) => {
            try {
                console.log('Sending POST payload to zven API:', JSON.stringify(body, null, 2));
                console.log(config.THIRD_PARTY_API_URL_POST_ZDEBIT);
                const response = await axios.post(config.THIRD_PARTY_API_URL_POST_ZDEBIT, body, {
                    headers: {
                        Authorization: getAuthHeader(),
                    },
                });

                res.json(response.data);
            } catch (error) {
                const errorResponse = handleAxiosError(error, 'zven');
                res.status(500).json(errorResponse);
            }
        },
        
    };
})();