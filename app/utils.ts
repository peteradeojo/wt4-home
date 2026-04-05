import { createTransport } from "nodemailer";

export function debounce(action: Function, wait: number) {
  let timeout: NodeJS.Timeout | undefined;

  return function (...args: any[]) {
    const context = this;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      action.apply(context, args);
    }, wait);
  };
}

const transport = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export {transport};