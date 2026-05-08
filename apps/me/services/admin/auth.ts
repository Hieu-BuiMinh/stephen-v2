'use server'

export async function verifyAdminPassword(password: string) {
	const adminPassword = process.env.ADMIN_PASSWORD
	return password?.trim() === adminPassword?.trim()
}
