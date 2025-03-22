import dotenv from "dotenv";

dotenv.config();
const env = process.env.APP_ENV;
const config = {
  PROD: {
    emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
    emailjsPrivateKey: process.env.EMAILJS_PRIVATE_KEY,
    PORT: process.env.DEFAULT_PORT,
    whiteListSites: [process.env.REACT_PORTFOLIO],
  },
};

export default config[env];
