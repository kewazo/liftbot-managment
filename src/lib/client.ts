import { getAuthLocals, type AuthLocalsSignedIn } from 'svelte-google-auth/server';
import { AUTH_CODE_CALLBACK_URL, AUTH_SIGNOUT_URL } from './constants.js';
import type { invalidateAll } from '$app/navigation';


interface AuthContext {
	getData: () => AuthClientData;
	invalidateAll: typeof invalidateAll;
}

let context: AuthContext | undefined = undefined;

export async function signOut() {
	await fetch(AUTH_SIGNOUT_URL, { method: 'POST' });
	if (window.gapi) gapi.client.setToken({ access_token: '' });

	await getAuthContext().invalidateAll();
}
