module.exports = (() => {
    const axios = require("axios");
    const config = require("../config/ppApiconfig");
  
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
  
      // Return an error object to send a consistent response
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
        c011nPrint: async (body, res) => {
        try {
          console.log(
            "Sending POST payload to delivery API:",
            JSON.stringify(body, null, 2)
          );
          const response = await axios.post(
            config.THIRD_PARTY_API_URL_C011NPRINT,
            body,
            {
              headers: {
                Authorization: getAuthHeader(),
              },
            }
          );
  
          console.log(
            "POST Response from delivery API:",
            JSON.stringify(response.data, null, 2)
          );
          res.json(response.data);
        } catch (error) {
          handleAxiosError(error, "print");
          res.status(500).json({ error: "Failed to process POST request" });
        }
      },
    };
  })();
  