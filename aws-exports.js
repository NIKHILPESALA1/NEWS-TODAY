import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'eu-north-1',
        userPoolId: 'eu-north-1_jnDOdvSiZ',
        userPoolWebClientId: '14khiotdsig9857i138j54vl3c',
    }
});
