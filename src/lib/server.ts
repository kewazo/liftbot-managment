import { getAuthLocals, type AuthLocalsSignedIn } from 'svelte-google-auth/server';

export function isSignedIn(locals: App.Locals): locals is AuthLocalsSignedIn {
	return !!getAuthLocals(locals).user;
}