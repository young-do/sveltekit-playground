import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = (event) => {
  // log all headers
  // console.log(...event.request.headers);
  const pathname = event.url.pathname;
  const userAgent = event.request.headers.get('user-agent');

  return {
    body: {
      pathname,
      userAgent
    }
  };
};
