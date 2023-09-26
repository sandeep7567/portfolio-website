"use server";

import EmailTemplate from "@/email/EmailTemplate";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = process.env.EMAIL_TO;

export const sentEmail = async(formData: FormData) => {

  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const message = formData.get("message");

  //  simple server-side validate input;
  if(!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }
  if (!validateString(senderName, 5000)) {
    return {
      error: "Invalid senderName"
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [EMAIL_TO as string],
      subject: 'Message from Sandeep Portfolio Cotact form',
      text: message as string,
      reply_to: senderEmail as string,
      // html: `<strong>It works! :) ${message} ${senderEmail}</strong>`,
      // react: <EmailTemplate message={message}, senderEmail={senderEmail} />
      react: React.createElement(EmailTemplate, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
      })
    });
  } catch (error: unknown) {
    // console.log(error);
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data,
  };
};