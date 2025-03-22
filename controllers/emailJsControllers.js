import emailjs from "@emailjs/nodejs";
import config from "../config.js";

export const emailJsControllers = async (req, res) => {
  try {
    console.log(`req ===> ${Object.keys(req)}`);
    const { name, email, message } = req.body;
    const {
      emailJsServiceId,
      emailJsTemplateId,
      emailjsPublicKey,
      emailjsPrivateKey,
    } = config;
    // console.log(`name email ===> ${name} ${email}`);
    // console.log(`emailjsPrivateKey ===> ${emailjsPrivateKey} `);
    if (!email || !name) {
      return res.status(400).send({
        message: `Please send all required fields. name,email.`,
      });
    }

    const templateParams = {
      name,
      email,
    };
    const result = await emailjs.send(
      emailJsServiceId,
      emailJsTemplateId,
      templateParams,
      {
        publicKey: emailjsPublicKey,
        privateKey: emailjsPrivateKey,
      }
    );

    return res.status(200).send({
      message: `email send successfully!`,
    });
  } catch (error) {
    console.log("Error ocuured in emailJsControllers ====> ", error);
    res.status(500).send({
      message: "Internal server error.",
    });
  }
};
