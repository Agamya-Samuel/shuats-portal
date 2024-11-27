import { db } from './index';
import { users } from './schema';
import bcrypt from 'bcryptjs';

async function seed() {
  const hashedPassword = await bcrypt.hash('superadmin123', 10);
  
  try {
    await db.insert(users).values({
      name: 'Super Admin',
      collegeId: '123456',
      email: 'superadmin@example.com',
      password: hashedPassword,
      role: 'superadmin',
      gender: 'male',
      mobile: '9876543210',
    }).onConflictDoNothing();
    
    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed(); 