import Redis from "ioredis";

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

export const cache = new Redis(process.env.REDIS_URL!);