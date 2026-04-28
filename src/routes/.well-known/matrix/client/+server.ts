import { json, error } from '@sveltejs/kit';

export const GET = () => {
	if (!process.env.MATRIX_SERVER_URL) error(404);
	return json({ ok: true });
};
