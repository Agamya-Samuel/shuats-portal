import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	collegeId: varchar('college_id', { length: 50 }).notNull().unique(),
	email: varchar('email', { length: 255 }).notNull().unique(),
	password: text('password').notNull(),
	gender: varchar('gender', { length: 10 }).notNull(),
	profileUrl: text('profile_url'),
	mobile: varchar('mobile', { length: 15 }).notNull(),
	role: varchar('role', { length: 20 }).notNull().default('user'),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
});

export enum UserRole {
	USER = 'user',
	ADMIN = 'admin',
	SUPER_ADMIN = 'super_admin'
}

export type User = typeof users.$inferSelect;
