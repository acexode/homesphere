export const environment = {
  production: true,
  apiUrl: 'https://api.homesphere.app/api',
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
