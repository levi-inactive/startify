export function load({ url }: { url: URL }) {
	const code = url.searchParams.get('code') || '/dashboard';
	const state = url.searchParams.get('state');
	return {
		code,
		state
	};
}
