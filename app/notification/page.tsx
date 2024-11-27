'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bell, Search, Filter } from 'lucide-react';
import { useState } from 'react';

type Notification = {
	id: number;
	heading: string;
	body: string;
	postedOn: string;
	department: string;
	postedBy: string;
};

const notifications: Notification[] = [
	{
		id: 1,
		heading: 'Exam Schedule Update',
		body: 'The final examination schedule for the Fall semester has been updated. Please check the new dates and times for your courses.',
		postedOn: '2024-03-15T10:30:00Z',
		department: 'Examinations',
		postedBy: 'Dr. Sarah Johnson',
	},
	{
		id: 2,
		heading: 'Campus Wi-Fi Maintenance',
		body: 'The campus Wi-Fi network will undergo maintenance on Saturday from 2 AM to 6 AM. Internet services may be intermittent during this time.',
		postedOn: '2024-03-14T16:45:00Z',
		department: 'IT Services',
		postedBy: 'Mark Williams',
	},
	{
		id: 3,
		heading: 'New Course Offerings',
		body: 'We are excited to announce new elective courses for the upcoming semester. Registration opens next week.',
		postedOn: '2024-03-13T09:15:00Z',
		department: 'Academic Affairs',
		postedBy: 'Prof. Emily Chen',
	},
	{
		id: 4,
		heading: 'Student Council Elections',
		body: 'Nominations for Student Council positions are now open. Submit your candidacy by March 25th.',
		postedOn: '2024-03-12T14:00:00Z',
		department: 'Student Affairs',
		postedBy: 'Alex Thompson',
	},
	{
		id: 5,
		heading: 'Library Hours Extended',
		body: 'The main library will extend its operating hours during the exam period. New hours: 7 AM to 2 AM daily.',
		postedOn: '2024-03-11T11:20:00Z',
		department: 'Library Services',
		postedBy: 'Lisa Brown',
	},
];

export default function Notification() {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredNotifications, setFilteredNotifications] =
		useState<Notification[]>(notifications);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);

		const filtered = notifications.filter(
			(notification) =>
				notification.heading.toLowerCase().includes(term) ||
				notification.body.toLowerCase().includes(term) ||
				notification.department.toLowerCase().includes(term) ||
				notification.postedBy.toLowerCase().includes(term)
		);
		setFilteredNotifications(filtered);
	};
	return (
		<div className="min-h-screen bg-[#0A0A0A] text-white">
			{/* Main Content */}
			<main className="pt-24 pb-16 px-4">
				<div className="container mx-auto max-w-4xl">
					<div className="flex items-center justify-between mb-8">
						<h1 className="text-3xl md:text-4xl font-bold flex items-center">
							<Bell className="h-8 w-8 text-purple-500 mr-3" />
							Notification Wall
						</h1>
						<Button
							variant="outline"
							className="border-white/10 bg-slate-900 border-gray-800 shadow transition-colors hover:bg-gray-800 hover:text-white"
						>
							<Filter className="h-4 w-4 mr-2" />
							Filter
						</Button>
					</div>

					{/* Search Bar */}
					<div className="mb-8">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
							<Input
								type="text"
								placeholder="Search notifications"
								className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400 w-full"
								value={searchTerm}
								onChange={handleSearch}
							/>
						</div>
					</div>

					{/* Notifications List */}
					<div className="space-y-6">
						{filteredNotifications.map((notification) => (
							<div
								key={notification.id}
								className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all"
							>
								<div className="flex justify-between items-start mb-2">
									<h2 className="text-xl font-semibold">
										{notification.heading}
									</h2>
									<Badge
										variant="outline"
										className="text-purple-400 border-purple-400"
									>
										{notification.department}
									</Badge>
								</div>
								<p className="text-gray-300 mb-4">
									{notification.body}
								</p>
								<div className="flex justify-between items-center text-sm text-gray-400">
									<Badge className="text-blue-500 border-blue-500">
										{new Date(
											notification.postedOn
										).toLocaleString('en-IN', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
											hour: 'numeric',
											minute: 'numeric',
											// second: 'numeric',
											hour12: true,
										})}
									</Badge>
									<Badge
										variant="outline"
										className="text-green-400 border-green-400"
									>
										By: {notification.postedBy}
									</Badge>
								</div>
							</div>
						))}
					</div>

					{/* Load More Button */}
					<div className="mt-8 text-center">
						<Button
							variant="outline"
							className="border-white/10 bg-slate-900 border-gray-800 shadow transition-colors hover:bg-gray-800 hover:text-white"
						>
							Load More
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
