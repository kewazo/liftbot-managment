import { SvelteGoogleAuthHook } from 'svelte-google-auth/server';
import type { Handle } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import { browser } from '$app/environment'


// Import client credentials from json file
import client_secret from '../client_secret.json';

const auth = new SvelteGoogleAuthHook(client_secret.web);

export const handle: Handle = async ({ event, resolve }) => {
	return await auth.handleAuth({ event, resolve });
};

export async function load({ url }) {
    if (browser) {
        const token = localStorage.getItem('token')
        // check if user token exists
        if (!token) {
            goto('/login')
        }
    }
    return url
}