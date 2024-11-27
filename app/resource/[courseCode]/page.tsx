import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	// GraduationCap,
	BookOpen,
	Code,
	FileText,
	Video,
	CheckCircle,
	ArrowRight,
} from 'lucide-react';
import coursesList from '@/app/course-codes.js';

export default async function ResourcePage({
	params,
}: {
	params: Promise<{ courseCode: string }>;
}) {
	const { courseCode } = await params;
	const modules = [
		{ name: 'Introduction to Data Structures', progress: 100 },
		{ name: 'Arrays and Strings', progress: 80 },
		{ name: 'Linked Lists', progress: 60 },
		{ name: 'Stacks and Queues', progress: 40 },
		{ name: 'Trees and Graphs', progress: 20 },
		{ name: 'Sorting and Searching Algorithms', progress: 0 },
	];

	return (
		<div className="bg-[#0A0A0A] text-white h-full w-full">
			{/* Main Content */}
			<main className="pt-24 pb-16 px-4">
				<div className="container mx-auto max-w-6xl">
					<div className="flex items-center mb-8">
						<BookOpen className="h-8 w-8 text-purple-500 mr-3" />
						<h1 className="text-3xl md:text-4xl font-bold">
							{
								coursesList.find(
									(course) =>
										course.name
											.replace(/\s+/g, '')
											.toLowerCase() === courseCode
								)?.name
							}
						</h1>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Course Content */}
						<div className="md:col-span-2">
							<Tabs defaultValue="overview" className="w-full">
								<TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800 rounded-lg text-white">
									<TabsTrigger value="overview">
										Overview
									</TabsTrigger>
									<TabsTrigger value="modules">
										Modules
									</TabsTrigger>
									<TabsTrigger value="resources">
										Resources
									</TabsTrigger>
								</TabsList>
								<TabsContent value="overview">
									<div className="space-y-4">
										<p>
											This course provides a comprehensive
											introduction to{' '}
											{
												coursesList.find(
													(course) =>
														course.name
															.replace(/\s+/g, '')
															.toLowerCase() ===
														courseCode
												)?.name
											}
										</p>
										<h2 className="text-xl font-semibold">
											Course Objectives
										</h2>
										<ul className="list-disc pl-5 space-y-2">
											<li>
												Understand the concept and
												importance of data structures
											</li>
											<li>
												Learn to implement and use
												common data structures
											</li>
											<li>
												Analyze the performance of
												different data structures
											</li>
											<li>
												Apply data structures to solve
												algorithmic problems
											</li>
										</ul>
									</div>
								</TabsContent>
								<TabsContent value="modules">
									<div className="space-y-6">
										{modules.map((module, index) => (
											<div
												key={index}
												className="bg-white/5 rounded-lg p-4"
											>
												<div className="flex justify-between items-center mb-2">
													<h3 className="font-semibold">
														{module.name}
													</h3>
													<span className="text-sm text-gray-400">
														{module.progress}%
														Complete
													</span>
												</div>
												<Progress
													value={module.progress}
													className="h-2 bg-gray-700"
												/>
											</div>
										))}
									</div>
								</TabsContent>
								<TabsContent value="resources">
									<div className="grid gap-4">
										<Link
											href="#"
											className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
										>
											<FileText className="h-6 w-6 text-purple-500 mr-3" />
											<div>
												<h3 className="font-semibold">
													Course Syllabus
												</h3>
												<p className="text-sm text-gray-400">
													Detailed outline of the
													course content
												</p>
											</div>
										</Link>
										<Link
											href="#"
											className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
										>
											<Code className="h-6 w-6 text-purple-500 mr-3" />
											<div>
												<h3 className="font-semibold">
													Code Repository
												</h3>
												<p className="text-sm text-gray-400">
													GitHub repository with
													example implementations
												</p>
											</div>
										</Link>
										<Link
											href="#"
											className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
										>
											<Video className="h-6 w-6 text-purple-500 mr-3" />
											<div>
												<h3 className="font-semibold">
													Video Lectures
												</h3>
												<p className="text-sm text-gray-400">
													Recorded lectures and
													tutorials
												</p>
											</div>
										</Link>
									</div>
								</TabsContent>
							</Tabs>
						</div>

						{/* Sidebar */}
						<div className="space-y-6">
							<div className="bg-white/5 rounded-lg p-6">
								<h2 className="text-xl font-semibold mb-4">
									Course Progress
								</h2>
								<div className="flex items-center justify-between mb-2">
									<span>Overall Completion</span>
									<span className="font-semibold">45%</span>
								</div>
								<Progress
									value={45}
									className="h-2 bg-green-300"
								/>
							</div>
							<div className="bg-white/5 rounded-lg p-6">
								<h2 className="text-xl font-semibold mb-4">
									Upcoming Deadlines
								</h2>
								<ul className="space-y-3">
									<li className="flex items-start">
										<CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
										<div>
											<p className="font-semibold">
												Assignment 2: Linked Lists
											</p>
											<p className="text-sm text-gray-400">
												Due in 3 days
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
										<div>
											<p className="font-semibold">
												Quiz: Stacks and Queues
											</p>
											<p className="text-sm text-gray-400">
												Due in 1 week
											</p>
										</div>
									</li>
								</ul>
							</div>
							<Button className="w-full bg-purple-600 hover:bg-purple-700">
								Continue Learning
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
