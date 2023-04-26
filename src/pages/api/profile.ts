import type { APIRoute } from "astro"
import { saveProfile, findProfile } from "../../db/user_repo"
import type { User } from "../../model/user"

interface Auth {
	email: string,
	password: string,
}

export const post: APIRoute = async function post({request}) {
	const profile: User = await request.json()
	saveProfile(profile)
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}

export const get: APIRoute = async function get({request}) {
	const auth: Auth = await request.json()
	const profile = findProfile(auth.email, auth.password)
	if (!profile) {
		return new Response(JSON.stringify({ ok: false }), {
			status: 404,
			headers: {
				"Content-Type": "application/json",
			},
		}) 
	}
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}