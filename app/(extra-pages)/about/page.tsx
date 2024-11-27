'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Users, Award, Mail } from 'lucide-react';
import Image from 'next/image';

export default function About() {
	const stats = [
		{ icon: Book, label: 'Courses Offered', value: '50+' },
		{ icon: Users, label: 'Students Enrolled', value: '10,000+' },
		{ icon: Award, label: 'Years of Excellence', value: '25+' },
	];

	const teamMembers = [
		{
			name: 'Dr. Emily Chen',
			role: 'Dean of Academics',
			image: '/placeholder.svg?height=100&width=100',
		},
		{
			name: 'Prof. Michael Johnson',
			role: 'Head of Research',
			image: '/placeholder.svg?height=100&width=100',
		},
		{
			name: 'Dr. Sarah Thompson',
			role: 'Student Affairs Director',
			image: '/placeholder.svg?height=100&width=100',
		},
	];

	return (
		<div className="min-h-screen bg-[#0A0A0A] text-white">
			{/* Main Content */}
			<main className="pt-24 pb-16 px-4">
				<div className="container mx-auto max-w-4xl">
					<h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
						About SHUATS Portal
					</h1>

					{/* Mission Statement */}
					<section className="mb-16">
						<h2 className="text-2xl font-semibold mb-4">
							Our Mission
						</h2>
						<p className="text-gray-300 leading-relaxed">
							At EduPortal, we are committed to revolutionizing
							education through technology. Our mission is to
							provide a seamless, accessible, and engaging
							learning experience for students and educators
							alike. We believe in the power of knowledge and
							strive to create an environment where learning knows
							no boundaries.
						</p>
					</section>

					{/* Stats */}
					<section className="mb-16">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{stats.map((stat, index) => (
								<Card
									key={index}
									className="bg-white/5 border-white/10"
								>
									<CardContent className="flex flex-col items-center p-6">
										<stat.icon className="h-12 w-12 text-purple-500 mb-4" />
										<span className="text-3xl font-bold mb-2 text-white">
											{stat.value}
										</span>
										<span className="text-gray-400">
											{stat.label}
										</span>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					{/* Our Story */}
					<section className="mb-16">
						<h2 className="text-2xl font-semibold mb-4">
							Our Story
						</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							Founded in 1999, EduPortal began as a small
							initiative to bring digital resources to college
							students. Over the years, we&apos;ve grown into a
							comprehensive educational platform, serving
							thousands of students and educators worldwide.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Our journey has been marked by continuous
							innovation, always striving to incorporate the
							latest technologies and pedagogical methods to
							enhance the learning experience. Today, we stand
							proud as a leader in educational technology, but our
							mission remains the same: to make quality education
							accessible to all.
						</p>
					</section>

					{/* Team */}
					<section className="mb-16">
						<h2 className="text-2xl font-semibold mb-8">
							Our Leadership Team
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{teamMembers.map((member, index) => (
								<div
									key={index}
									className="flex flex-col items-center"
								>
									<Image
										src={member.image}
										alt={member.name}
										width={96}
										height={96}
										className="rounded-full mb-4"
									/>
									<h3 className="text-lg font-semibold">
										{member.name}
									</h3>
									<p className="text-gray-400">
										{member.role}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Contact */}
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Get in Touch
						</h2>
						<p className="text-gray-300 leading-relaxed mb-6">
							We&apos;re always eager to hear from our community.
							Whether you have questions, feedback, or just want
							to say hello, don&apos;t hesitate to reach out.
						</p>
						<Button className="bg-purple-600 hover:bg-purple-700">
							<Mail className="mr-2 h-4 w-4" />
							Contact Us
						</Button>
					</section>
				</div>
			</main>
		</div>
	);
}
