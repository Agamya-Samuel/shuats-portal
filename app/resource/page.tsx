'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Download, BookOpen } from 'lucide-react';
import { useState } from 'react';
import coursesList from '@/app/course-codes.js';
import { useRouter } from 'next/navigation';

interface Course {
	name: string;
	description: string;
	icon: React.ElementType;
	materials: string[];
}

export default function ResourcePage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredCourses, setFilteredCourses] = useState<Course[]>(
		coursesList as Course[]
	);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);

		const filtered = coursesList.filter(
			(course) =>
				course.name.toLowerCase().includes(term) ||
				course.description.toLowerCase().includes(term) ||
				course.materials?.some((material) =>
					typeof material === 'string'
						? material.toLowerCase().includes(term)
						: false
				) ||
				false
		);
		setFilteredCourses(filtered as Course[]);
	};

	return (
		<div className="min-h-screen bg-[#0A0A0A] text-white">
			{/* Main Content */}
			<main className="pt-24 pb-16 px-4">
				<div className="container mx-auto max-w-6xl">
					<h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						Study Material Resources
					</h1>

					{/* Search Bar */}
					<div className="max-w-2xl mx-auto mb-12">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
							<Input
								type="text"
								placeholder="Search for courses or materials"
								className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400 w-full"
								value={searchTerm}
								onChange={handleSearch}
							/>
						</div>
					</div>

					{/* Course List */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredCourses.map((course: Course, index) => (
							<div
								key={index}
								className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all cursor-pointer flex flex-col justify-between"
								onClick={() =>
									router.push(
										`/resource/${course.name
											.replace(/\s+/g, '')
											.toLowerCase()}`
									)
								}
							>
								<div>
									<div className="flex items-center mb-4">
										{/* {course.icon && (
											<course.icon className="h-8 w-8 text-purple-500 mr-3" />
										)} */}
										<h2 className="text-xl font-semibold">
											{course.name}
										</h2>
									</div>
									<p className="text-gray-400 mb-4">
										{course.description}
									</p>
									<h3 className="font-semibold mb-2">
										Course Subjects:
									</h3>
									<ul className="space-y-2">
										{course.materials.map(
											(material, mIndex) => (
												<li
													key={mIndex}
													className="flex items-center"
												>
													<BookOpen className="h-4 w-4 text-purple-500 mr-2" />
													<span className="text-sm">
														{material}
													</span>
												</li>
											)
										)}
									</ul>
								</div>
									<Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
										<Download className="h-4 w-4 mr-2" />
										Access Materials
									</Button>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
