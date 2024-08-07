import { generateAuthUrl, hydrateAuth } from 'svelte-google-auth/server';
import type { LayoutServerLoad } from './$types.js';
import { redirect } from '@sveltejs/kit';
import { isSignedIn } from '$lib/server.js';
import { goto } from '$app/navigation';

const SCOPES = ['openid', 'profile', 'email'];

export const load: LayoutServerLoad = ({ locals, url }) => {
	if (!isSignedIn(locals)) {
		throw redirect(302, generateAuthUrl(locals, url, SCOPES, url.pathname));
	}
	// By calling hydateAuth, certain variables from locals are parsed to the client
	// allowing the client to access the user information and the client_id for login
	return { ...hydrateAuth(locals) };
};
