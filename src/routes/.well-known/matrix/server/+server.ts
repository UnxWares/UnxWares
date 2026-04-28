import { json, error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET = async () => {
	if (!env.MATRIX_SERVER_URL) error(404);

	let data: unknown;
	try {
		const res = await fetch(`${env.MATRIX_SERVER_URL}/.well-known/matrix/server`);
		if (!res.ok) error(502, 'Upstream returned non-2xx');
		data = await res.json();
	} catch {
		error(502, 'Failed to fetch upstream');
	}

	if (
		typeof data !== 'object' ||
		data === null ||
		!('m.server' in data) ||
		typeof (data as Record<string, unknown>)['m.server'] !== 'string'
	) {
		error(502, 'Invalid Matrix server discovery schema');
	}

	return json(data);
};
