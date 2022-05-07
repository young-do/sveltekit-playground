import type { Handle } from '@sveltejs/kit';

const phase = process.env.PHASE;

export const handle: Handle = async ({ event, resolve }) => {
	// @note: 이걸로 phase별 다른 json 파일 전송하기
	if (event.url.pathname.startsWith('/custom')) {
		const json = {
			href: 'http://localhost:3000/custom',
			origin: 'http://localhost:3000',
			protocol: 'http:'
		};
		return new Response(JSON.stringify(json));
	}

	const response = await resolve(event);
	return response;
};
