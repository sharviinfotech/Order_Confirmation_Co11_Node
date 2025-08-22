module.exports = (() => {
    const server = process.env.SERVER || "dev"; //dev  //Set the server environment variable (default to 'dev')
    const baseUrls = {
      prod: "http://49.207.9.62:44325",
      dev: "http://49.207.9.62:44325",
    };
    const baseUrl = baseUrls[server];
  
    return {
      // Credentials
      // THIRD_PARTY_USERNAME: process.env.THIRD_PARTY_USERNAME || "SHARVI_ABAP", 
      // THIRD_PARTY_PASSWORD: process.env.THIRD_PARTY_PASSWORD || "Vi$ionSh@rvi2025", 
      THIRD_PARTY_USERNAME: process.env.THIRD_PARTY_USERNAME || "s23hana1", 
      THIRD_PARTY_PASSWORD: process.env.THIRD_PARTY_PASSWORD || "Sh@rv!12345", 
  
      
      THIRD_PARTY_API_URL_POST_PRCREATE: `${baseUrl}/pr_mng/pr_create/create?sap-client=400`,
      THIRD_PARTY_API_URL_PUT_PRCREATE:`${baseUrl}/pr_mng/pr_create/create?sap-client=400`,
      THIRD_PARTY_API_URL_POST_PRCHANGE: `${baseUrl}/pr_mng/pr_change/changes?sap-client=400`,
      THIRD_PARTY_API_URL_POST_PRCHANGEGET:`${baseUrl}/pr_mng/pr_change/changes?sap-client=400`,
      THIRD_PARTY_API_URL_GET_PR: `${baseUrl}/pr_mng/pr_f4/f4help?sap-client=400`,
      THIRD_PARTY_API_URL_POST_PRLIST: `${baseUrl}/pr_mng/pr_list/list?sap-client=400`,
      THIRD_PARTY_API_URL_POST_STOCKOVERVIEW: `${baseUrl}/pr_mng/mb52/stocks?sap-client=400"`,
      THIRD_PARTY_API_URL_POST_PRAPPROVALLIST: `${baseUrl}/pr_mng/pr_release/release?sap-client=400`,
      // THIRD_PARTY_API_URL_PUT_PRAPPROVALLIST:`${baseUrl}/pr_mng/pr_release/release?sap-client=400`,
      THIRD_PARTY_API_URL_POST_PRAPPROVALSAVE: `${baseUrl}/pr_mng/pr_release/release?sap-client=400`,
      THIRD_PARTY_API_URL_POST_PRREJECTSAVE: `${baseUrl}/pr_mng/pr_release/release?sap-client=400`,


      //user creation//
      THIRD_PARTY_API_URL_POST_USERCREATE: `${baseUrl}/qm/login/goa?sap-client=400`,
      THIRD_PARTY_API_URL_POST_USERUPDATE:`${baseUrl}/qm/login/goa?sap-client=400`,
      THIRD_PARTY_API_URL_GET_ALL_USERS:`${baseUrl}/qm/login/goa?sap-client=400`,
      THIRD_PARTY_API_URL_POST_USERDELETE: `${baseUrl}/qm/login/goa?sap-client=400`,
      THIRD_PARTY_API_URL_PUT_FORGOTPASSWORD: `${baseUrl}/qm/login/goa?sap-client=400`,
      THIRD_PARTY_API_URL_POST_LOGIN: `${baseUrl}/qm/login/goa?sap-client=400`,



      //MB21//
      THIRD_PARTY_API_URL_POST_MB21:`${baseUrl}/pr_mng/mb21/posted?sap-client=400`






     
    };
  })();
  