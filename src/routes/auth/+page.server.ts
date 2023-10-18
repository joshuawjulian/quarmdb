import { z } from 'zod';
import type { Actions } from './$types';
import { error, fail } from '@sveltejs/kit';
import { pool } from '$lib/db';
import { register } from '$lib/db/auth';

export const actions = {
	login: async (event) => {
		// TODO log the user in

		return { success: true };
	},
	register: async ({ request, cookies }) => {
		console.log(`register`);
		const formData = await request.formData();
		const email = formData.get('email')?.toString() || '';
		const password1 = formData.get('password1')?.toString() || '';
		const password2 = formData.get('password2')?.toString() || '';

		console.log(email);

		if (password1 != password2) {
			return fail(400, { email, password1, password2, passwordMismatch: true });
		}

		if (!z.string().email().safeParse(email).success) {
			return fail(400, { email, password1, password2, badEmail: true });
		}
		const client = await pool.connect();
		try {
			await register(email, password1, client);
			return { register: true };
		} catch (err) {
			console.error(err);
			throw error(404);
		} finally {
			client.release();
		}
	}
} satisfies Actions;
