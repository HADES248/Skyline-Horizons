import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { sendEmail } from "./email";

const client = new MongoClient(process.env.MongoURI);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      void sendEmail({
        to: user.email,
        subject: "Verify your email address",
        html:
          `
        <div style="font-family: Arial, sans-serif; padding: 20px; background:#f9f9f9;">
          <div style="max-width: 500px; margin:auto; background:white; padding:30px; border-radius:8px;">
            
            <h2 style="margin-top:0;">Skyline-Horizons</h2>
            
            <p>Welcome! Please verify your email address.</p>

            <div style="margin:25px 0;">
              <a href="${url}" 
                 style="
                   display:inline-block;
                   padding:12px 24px;
                   background:linear-gradient(to right, rgb(99, 187, 183) 11.2%, rgba(110, 123, 251, 1) 91.1%);
                   color:#fff;
                   text-decoration:none;
                   border-radius:6px;
                   font-weight:bold;
                 ">
                Verify Email
              </a>
            </div>

            <p style="font-size:12px; color:#666;">
              If you didn’t request this, you can ignore this email.
            </p>

          </div>
        </div>
      `
      });
    },
    autoSignInAfterVerification: true
  },
  user: {
    additionalFields: {
      phone: {
        type: String,
        required: false,
      }
    }
  },
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }
  }
});