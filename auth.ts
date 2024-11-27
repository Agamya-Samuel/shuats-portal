import NextAuth, { type DefaultSession } from 'next-auth';
// import { type User as DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { UserRole, users } from '@/lib/db/schema';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { loginSchema, userRegistrationSchema } from '@/lib/validations/auth';

// Extend default types for User and JWT
declare module 'next-auth' {
	interface User {
		role: UserRole;
		collegeId: string;
		gender: string;
		mobile: string;
	}
	interface JWT {
		id: string;
		name: string;
		email: string;
		role: string;
		iat: number;
		exp: number;
		jti: string;
	}
	interface Session extends DefaultSession {
		user: User;
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				try {
					if (!credentials?.email || !credentials?.password) {
						throw new Error('Please enter an email and password');
					}

					// Use the new loginSchema
					const validatedCredentials = loginSchema.parse({
						email: credentials.email,
						password: credentials.password,
					});

					const user = await db
						.select()
						.from(users)
						.where(eq(users.email, validatedCredentials.email))
						.then((res) => res[0]);

					if (!user) {
						throw new Error('No user found with this email');
					}

					if (typeof user.password !== 'string') {
						throw new Error('Invalid password format');
					}

					const passwordMatch = await bcrypt.compare(
						validatedCredentials.password as string,
						user.password
					);

					if (!passwordMatch) {
						throw new Error('Incorrect password');
					}

					return {
						id: user.id.toString(),
						email: user.email,
						role: user.role as UserRole,
						name: user.name,
						collegeId: user.collegeId,
						gender: user.gender,
						profileUrl: user.profileUrl,
						mobile: user.mobile,
					};
				} catch (error) {
					console.error('Authorization error:', error);
					throw error;
				}
			},
		}),
	],
	pages: {
		signIn: '/auth/signin',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				return {
					...token,
					id: user.id,
					email: user.email,
					role: user.role,
					name: user.name,
					iat: Math.floor(Date.now() / 1000),
					exp: Math.floor(Date.now() / 1000) + 6 * 60 * 60,
					jti: crypto.randomUUID(),
				};
			}
			return token;
		},
		async session({ session, token }) {
			if (session?.user) {
				session.user = {
					...session.user,
					id: token.id as string,
					email: token.email as string,
					role: token.role as UserRole,
					name: token.name as string,
				};
			}
			return session;
		},
	},
	session: {
		strategy: 'jwt',
		maxAge: 6 * 60 * 60, // 6 hours
	},
});
