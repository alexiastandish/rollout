module.exports = {
  aws: {
    bucketName: 'bseb-file-container',
    accessKey: 'AKIAJ6TA7PR5VQ3R262A',
    secretKey: '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'
  },
  mongoURI: 'mongodb://kappy:Kappy123*@ds215633.mlab.com:15633/web-push',
  privateKey: 'Lckqnvu2RrAKlG3uutce3o-kiI7HSc1LXsy5AdlryXQ',
  publicKey:
    'BLgFTwjElUH_Iz72TKDvmlsc-EcwziNP2X28BmN-znOXJhv35QybtfcN1HTh_eUlNffp12HkuruYpqtKNedN54s',
  GCM_Key:
    'BC9lXOplpZsPQwvVrxN_29_9nqkzzsn1YWWNPUmfgo5m0aaXKmeOZDzUSxWBwrNH3pEDscqEW3oo9U3aHarrfB8',
  // Google Plus Credential
  googleClientID:
    '477995149649-i60ar391u3hcagi6913mvmkcr15053m6.apps.googleusercontent.com', // process.env.GOOGLE_CLIENT_ID ||
  googleClientSecret: 'roLhwsJ9w6wynRBhPi4TC2rK', // process.env.GOOGLE_CLIENT_SECRET ||

  // Facebook App Credential
  clientID: '178884466091426',
  clientSecret: 'b4286d14d229c34cf12afb285c9eb9ed',

  // Twitter App Credential
  ConsumerKey: 'gh4rUzjBBiJDyV0GX7QIUyQgA',
  ConsumerSecret: 'ZWOFftsmwfvk84vVqs1ULLpXolxnKnCDhGGxKEkPa2FHqOrvsH',

  // Pinterest App Credential
  AppID: '4976540289092039020',
  AppSecret: 'd153b1a9fa994120e1af50507ea506ba7fe2845a9b655ae45daf587053bd3516',

  // Instagram Crendential
  InstaId: '58c897b525e44caabc52ceefbda8dbce',
  InstaSecret: '77c94fab96cb484bbda4289c41d92bc7',
  DEFAULT_TTL: 28 * 86400,
  APN_METHOD: 'apn',
  GCM_METHOD: 'gcm',
  ADM_METHOD: 'adm',
  WNS_METHOD: 'wns',
  WEB_METHOD: 'webPush',
  UNKNOWN_METHOD: 'unknown',
  DEFAULT_SETTINGS: {
    gcm: {
      id: null, // PUT YOUR GCM SERVER API KEY,
    },
    apn: {
      // See options at https://github.com/node-apn/node-apn/blob/master/doc/provider.markdown
      token: null,
      // {
      //     key: '',
      //     keyId: '',
      //     teamId: '',
      // },
      cert: 'cert.pem',
      key: 'key.pem',
      ca: null,
      pfx: null,
      passphrase: null,
      production: process.env.NODE_ENV === 'development',
      voip: false,
      address: null,
      port: 443,
      rejectUnauthorized: true,
      connectionRetryLimit: 10,

      cacheLength: 1000,
      connectionTimeout: 3600000,
      autoAdjustCache: true,
      maxConnections: 1,
      minConnections: 1,
      connectTimeout: 10000,
      buffersNotifications: true,
      fastMode: false,
      disableNagle: false,
      disableEPIPEFix: false,
    },
    adm: {
      client_id: null, // PUT YOUR ADM CLIENT ID,
      client_secret: null, // PUT YOUR ADM CLIENT SECRET,
    },
    wns: {
      client_id: null, // PUT YOUR WNS CLIENT ID,
      client_secret: null, // PUT YOUR WNS CLIENT SECRET,
      accessToken: null,
      headers: null,
      notificationMethod: 'sendTileSquareBlock',
    },
    web: {
      vapidDetails: {
        subject: "",
        publicKey: 'BLgFTwjElUH_Iz72TKDvmlsc-EcwziNP2X28BmN-znOXJhv35QybtfcN1HTh_eUlNffp12HkuruYpqtKNedN54s',
        privateKey: 'Lckqnvu2RrAKlG3uutce3o-kiI7HSc1LXsy5AdlryXQ',
      },
      // gcmAPIKey: '< GCM API Key >',
      // TTL: 2419200
      // headers: { }
      // contentEncoding: '< Encoding type, e.g.: aesgcm or aes128gcm >'
    },
    isAlwaysUseFCM: false,
  },
};

// Already generated vapid key for local purpose
