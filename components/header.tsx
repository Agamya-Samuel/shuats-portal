'use client';

import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	return (
		<header className="flex h-16 items-center justify-between px-4 lg:mx-48 md:px-6 md:mx-4">
			<Link
				className="flex items-center gap-2 text-lg font-semibold"
				href="/"
			>
				<GraduationCap className="h-6 w-6" />
				<span>SHUATS Portal</span>
			</Link>
			<nav className="hidden md:flex gap-6">
				<Link
					className="text-sm font-medium hover:underline"
					href="/about"
				>
					About
				</Link>
				<Link
					className="text-sm font-medium hover:underline"
					href="/notification"
				>
					Notifications
				</Link>
				<Link
					className="text-sm font-medium hover:underline"
					href="/resource"
				>
					Resources
				</Link>
				<Link
					className="text-sm font-medium hover:underline"
					href="/message"
				>
					Messages
				</Link>
				<Link
					className="text-sm font-medium hover:underline"
					href="/store"
				>
					Store
				</Link>
				<Link
					className="text-sm font-medium hover:underline"
					href="/contact"
				>
					Contact
				</Link>
			</nav>
			<div className="flex gap-4">
				<Link
					className="inline-flex h-9 items-center justify-center rounded-md border border-gray-800 px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-gray-800"
					href="#"
				>
					Sign In
				</Link>
				<Link
					className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200"
					href="#"
				>
					Register
				</Link>
			</div>
		</header>
	);
}
