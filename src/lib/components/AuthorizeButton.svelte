<script lang="ts">
	//const clientSecret = "e9f747f0bbb249c4a8572d64df71323c"

	const authorizationURL = new URL('https://accounts.spotify.com/authorize');

	const clientID = '005f81f48af84e85a2e6399fc784f157';
	const responseType = 'code';
	const redirectURI = 'http://localhost:5173/callback/';
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
