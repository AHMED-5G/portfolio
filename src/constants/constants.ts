let baseUrl: string;
if (!__DEV__) {
  // App is in production mode
  baseUrl = "http://portfoliobackendweb.onrender.com";
} else {
  // App is in development mode

  // export const baseUrl = "http://10.0.2.2:3000";
  baseUrl = "http://portfoliobackendweb.onrender.com";
}

export { baseUrl };
