<script lang="ts">
	import keys from '$lib/keys.json';

	const authorizationURL = new URL(keys.spotify.authorizationURL);

	const clientID = keys.spotify.clientID;
	const responseType = 'code';
	const redirectURI = keys.spotify.redirectURI;
	const state = crypto.randomUUID();

	const stateKey = 'spotify_auth_state';

	//localStorage.setItem(stateKey, state);
	authorizationURL.searchParams.append('response_type', responseType);
	authorizationURL.searchParams.append('client_id', clientID);
	authorizationURL.searchParams.append('redirect_uri', encodeURI(redirectURI));
	authorizationURL.searchParams.append('state', state);
</script>

<button>
	<a href={authorizationURL.href}> Request authorization </a>
</button>
