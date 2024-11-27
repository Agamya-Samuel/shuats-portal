import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Users, Calendar, GraduationCap } from 'lucide-react';

export default function HomePage() {
	return (
		<div className="flex min-h-screen flex-col">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_350px] items-center">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none uppercase">
										portal made{' '}
										<span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
											by the students
										</span>
										<br />
										for the students
									</h1>
									<p className="max-w-[600px] text-gray-400 md:text-xl">
										Your one-stop platform for managing
										academic life. Access courses,
										schedules, and resources with ease.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row sm:justify-center sm:py-2 lg:justify-start">
									<Link
										className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200"
										href="#"
									>
										Sign up
									</Link>
									<Link
										className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-800"
										href="#"
									>
										Learn More
									</Link>
								</div>
							</div>
							<div className="flex items-center justify-center sm:hidden md:flex">
								<div className="grid grid-cols-2 gap-4 p-4">
									<div className="flex h-[150px] w-[150px] items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
										<BookOpen className="h-12 w-12" />
									</div>
									<div className="flex h-[150px] w-[150px] items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
										<Calendar className="h-12 w-12" />
									</div>
									<div className="flex h-[150px] w-[150px] items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-red-500">
										<Users className="h-12 w-12" />
									</div>
									<div className="flex h-[150px] w-[150px] items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500">
										<GraduationCap className="h-12 w-12" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800 flex items-center justify-center">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
							Features designed for student success
						</h2>
						<div className="grid gap-6 lg:grid-cols-3">
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
									<BookOpen className="h-10 w-10" />
								</div>
								<h3 className="text-xl font-bold">
									Course Management
								</h3>
								<p className="text-gray-400">
									Access course materials, submit assignments,
									and track your progress all in one place.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
									<Calendar className="h-10 w-10" />
								</div>
								<h3 className="text-xl font-bold">
									Schedule Planner
								</h3>
								<p className="text-gray-400">
									Organize your classes, assignments, and
									extracurricular activities with our
									intuitive calendar.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-red-500">
									<Users className="h-10 w-10" />
								</div>
								<h3 className="text-xl font-bold">
									Student Community
								</h3>
								<p className="text-gray-400">
									Connect with classmates, join study groups,
									and participate in academic discussions.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Join your academic community
								</h2>
								<p className="max-w-[900px] text-gray-400 md:text-xl">
									Stay updated with the latest campus news,
									events, and opportunities
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex space-x-2">
									<Input
										className="max-w-lg flex-1 bg-gray-800 text-white border-gray-800"
										placeholder="Enter your email"
										type="email"
									/>
									<Button className="bg-white text-black hover:bg-gray-200">
										Subscribe
									</Button>
								</form>
								<p className="text-xs text-gray-400">
									By subscribing, you agree to our terms and
									privacy policy.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
