var admin = require("firebase-admin");

var serviceAccount = require("./net-ninja-phuchau-firebase-adminsdk-ns1a0-6a6c355df3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = "some-uid";
const additionalClaims = {
  premiumAccount: true
};

admin
  .auth()
  .createCustomToken(uid, additionalClaims)
  .then(customToken => {
    console.log(customToken);
  })
  .catch(error => {
    console.log("error creating custom token: " + error);
  });
