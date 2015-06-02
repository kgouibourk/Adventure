// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1009894369050924', // your App ID
        'clientSecret'  : 'ca9897b7291fabeeb1e34723c81583b2', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },
        'googleAuth' : {
        'clientID'      : '547111250934-52q4pb07re492fovqjus4mm62avdfs83.apps.googleusercontent.com',
        'clientSecret'  : 'W5tdDJok6cZKRNh9Km08XLyu',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};