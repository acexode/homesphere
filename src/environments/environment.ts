export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  apiVersion: 'v1',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  },
  payment: {
    provider: 'stripe',
    publicKey: '',
    currency: 'USD'
  },
  features: {
    enablePushNotifications: true,
    enableBiometrics: true,
    enableOfflineMode: true
  }
};
