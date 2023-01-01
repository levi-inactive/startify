import keys from '$lib/keys.json';

export async function load({ url }: { url: URL }) {
	const clientID = keys.spotify.clientID;
	const clientSecret = keys.spotify.clientSecret;

	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');

	const accessTokenURL = new URL(keys.spotify.accessTokenURL);
	const grantType = 'authorization_code';
	const redirectURI = keys.spotify.redirectURI;

	accessTokenURL.searchParams.append('grant_type', grantType);
	accessTokenURL.searchParams.append('code', code ? code : '');
	accessTokenURL.searchParams.append('redirect_uri', redirectURI);

	const authorizationString = Buffer.from(`${clientID}:${clientSecret}`, 'binary').toString(
		'base64'
	);

	const response = await fetch(accessTokenURL, {
		method: 'POST',
		headers: {
			Authorization: authorizationString,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

	return {
		response
	};
}
