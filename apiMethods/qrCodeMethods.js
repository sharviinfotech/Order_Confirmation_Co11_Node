module.exports = (() => {
  const axios = require("axios");
  const config = require("../config/apiConfig");

  const handleAxiosError = (error, functionName) => {
    console.error(`Error in ${functionName}:`, error.message);

    // Log detailed error information if available
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request made but no response received:", error.request);
    } else {
      console.error("Error details:", error.message);
    }

    // Gracefully return an error object
    return { error: `Error processing your request in ${functionName}` };
  };

  const getAuthHeader = () => {
    if (!config.THIRD_PARTY_USERNAME || !config.THIRD_PARTY_PASSWORD) {
      throw new Error("Third-party API credentials are missing");
    }

    const credentials = `${config.THIRD_PARTY_USERNAME}:${config.THIRD_PARTY_PASSWORD}`;
    const token = Buffer.from(credentials).toString("base64");
    return `Basic ${token}`;
  };

  return {
    qrCode: async (body, res) => {
      try {
        console.log(
          "Sending POST payload to qrCode API:",
          JSON.stringify(body, null, 2)
        );
        console.log(config.THIRD_PARTY_API_URL_POST_QR_CODE);
        const response = await axios.put(
          config.THIRD_PARTY_API_URL_POST_QR_CODE,
          body,
          {
            headers: {
              Authorization: getAuthHeader(),
            },
          }
        );

        res.json(response.data);
      } catch (error) {
        const errorResponse = handleAxiosError(error, "qrCode");
        res.status(500).json(errorResponse);
      }
    },
    qrCodeSave: async (body, res) => {
      try {
        console.log(
          "Sending PUT payload to qrCodeSave API:",
          JSON.stringify(body, null, 2)
        );
        console.log(config.THIRD_PARTY_API_URL_PUT_SAVEQR);
        const response = await axios.put(
          config.THIRD_PARTY_API_URL_PUT_SAVEQR,
          body,
          {
            headers: {
              Authorization: getAuthHeader(),
            },
          }
        );

        res.json(response.data);
      } catch (error) {
        const errorResponse = handleAxiosError(error, "qrCodeSave");
        res.status(500).json(errorResponse);
      }
    },
    getQR: async (body, res) => {
      try {
        console.log(
          "Sending PUT payload to getQR API:",
          JSON.stringify(body, null, 2)
        );
        console.log(config.THIRD_PARTY_API_URL_POST_QR_CODE);
        const response = await axios.put(
          config.THIRD_PARTY_API_URL_POST_QR_CODE,
          body,
          {
            headers: {
              Authorization: getAuthHeader(),
            },
          }
        );

        res.json(response.data);
      } catch (error) {
        const errorResponse = handleAxiosError(error, "getQR");
        res.status(500).json(errorResponse);
      }
    },
    me23: async (body, res) => {
      try {
        console.log(
          "Sending PUT payload to me23 API:",
          JSON.stringify(body, null, 2)
        );
        console.log(config.THIRD_PARTY_API_URL_POST_ME23);
        const response = await axios.post(
          config.THIRD_PARTY_API_URL_POST_ME23,
          body,
          {
            headers: {
              Authorization: getAuthHeader(),
            },
          }
        );

        res.json(response.data);
      } catch (error) {
        const errorResponse = handleAxiosError(error, "me23");
        res.status(500).json(errorResponse);
      }
    },
  };
})();
