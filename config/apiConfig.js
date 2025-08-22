module.exports = (() => {
  const server = process.env.SERVER || "dev"; //dev  //Set the server environment variable (default to 'dev')
  const baseUrls = {
    prod: "http://10.10.4.143:8000",
    dev: "http://10.10.10.50:8001",
  };
  const login = "http://10.10.10.50:8001";
  const baseUrl = baseUrls[server];

  return {
    // Credentials
    THIRD_PARTY_USERNAME: process.env.THIRD_PARTY_USERNAME || "Mounika", //"ims113"
    THIRD_PARTY_PASSWORD: process.env.THIRD_PARTY_PASSWORD || "Indi@$0425", //"Sh@rv1511",

    // THIRD_PARTY_USERNAME: process.env.THIRD_PARTY_USERNAME || "110203",
    // THIRD_PARTY_PASSWORD: process.env.THIRD_PARTY_PASSWORD || "Venp0rt@Hps234",

    THIRD_PARTY_USERNAME2: process.env.THIRD_PARTY_USERNAME2 || "ims113", //"Dev00",
    THIRD_PARTY_PASSWORD2: process.env.THIRD_PARTY_PASSWORD2 || "Ims$0425", //"HBL@2025",//"$bx#@113",

    //THIRD_PARTY_USERNAME2: process.env.THIRD_PARTY_USERNAME2 || "110203",
    //THIRD_PARTY_PASSWORD2: process.env.THIRD_PARTY_PASSWORD2 || "Venp0rt@Hps234",

    // API Calls
    THIRD_PARTY_API_URL_POST_LOGIN: `${login}/login/create?sap-client=234`,
    // THIRD_PARTY_API_URL_POST_LOGIN: `${baseUrl}/login/create?sap-client=234`,

    THIRD_PARTY_API_URL_PUT_GET_LOT_REPORTS: `${baseUrl}/qm/result_rec/record?sap-client=400`,
    THIRD_PARTY_API_URL_POST_UPDATE_RESULT_RECORDING: `${baseUrl}/qm/result_rec/record?sap-client=400`,
    THIRD_PARTY_API_URL_POST_UDSUBMIT_RESULT: `${baseUrl}/qm/usage_ud/decision?sap-client=400`,
    THIRD_PARTY_API_URL_POST_REPORT_ZQAR: `${baseUrl}/qm/quality/report?sap-client=400`,
    THIRD_PARTY_API_URL_POST_REPORT_ZQA32: `${baseUrl}/qm/pending/lots?sap-client=400 `,
    THIRD_PARTY_API_URL_POST_QR_CODE: `${baseUrl}/qm/qr_generation/transfer?sap-client=400`,
    THIRD_PARTY_API_URL_POST_ZPRDID: `${baseUrl}/qm/prdid/product?sap-client=400`,
    THIRD_PARTY_API_URL_POST_TYPE_TEST: `${baseUrl}/qm/type_test/typetest?sap-client=400`,
  };
})();
