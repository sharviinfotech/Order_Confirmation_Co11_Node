module.exports = (() => {
  const server = process.env.SERVER || "dev"; //dev  //Set the server environment variable (default to 'dev')
  const baseUrls = {
    prod: "http://10.10.10.50:8001",
    dev: "http://10.10.10.50:8001",
  };
  const baseUrl = baseUrls[server];

  return {
    // Credentials
    THIRD_PARTY_USERNAME: process.env.THIRD_PARTY_USERNAME || "Mounika", //"SHARVI_ABAP"//,
    THIRD_PARTY_PASSWORD: process.env.THIRD_PARTY_PASSWORD || "Indi@$0425", //"Vi$ionSh@rvi2025",

    // API Calls
    THIRD_PARTY_API_URL_POST_DELIVERY: `${baseUrl}/qm/login/goa?sap-client=400`,
  };
})();
