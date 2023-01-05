import { Container } from '@/components/ui/Container';
import { projects, workProjects } from '@/data';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import localFont from '@next/font/local';
import clsx from 'clsx';

export const neuzeitGrotesk = localFont({
	src: '../../public/static/font/NeuzeitGrotesk-Bold.woff2',
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Bruno Rodrigues</title>
			</Head>

			<Container className="grid lg:grid-cols-2">
				<div className="lg:h-[calc(100vh-48px)] xl:h-[calc(100vh-96px)] flex flex-col lg:sticky top-0 pt-12 lg:pt-32">
					<section className="flex flex-col justify-between flex-1">
						<div className="space-y-4">
							<div className="flex items-center gap-x-8">
								<Image
									src="https://github.com/brunordgs.png"
									width={128}
									height={128}
									className="rounded-md"
									alt="Bruno Rodrigues"
								/>
								<h1
									className={clsx(
										'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-4xl sm:text-5xl font-bold',
										neuzeitGrotesk.className,
									)}
								>
									Bruno
									<br />
									Rodrigues
								</h1>
							</div>
							<p className="text-zinc-300">
								<strong className="text-zinc-50">Software Engineer</strong>
								<br />
								I&apos;m a Software Engineer and a lover of new technologies.
							</p>

							<small className="block">By the way, I&apos;m looking for a job.</small>
						</div>

						<ul className="flex gap-8 mt-8">
							<li>
								<Link
									href="https://github.com/brunordgs"
									className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors duration-200"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</Link>
							</li>
							<li>
								<Link
									href="https://linkedin.com/in/brunordgs"
									className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors duration-200"
									target="_blank"
									rel="noopener noreferrer"
								>
									LinkedIn
								</Link>
							</li>
						</ul>
					</section>
				</div>

				<section className="space-y-12 py-12 lg:py-32">
					<div>
						<h2
							className={clsx(
								'text-xs uppercase tracking-widest font-sans mb-2 text-zinc-200 font-bold',
								neuzeitGrotesk.className,
							)}
						>
							Projects
						</h2>

						<div className="space-y-4 group">
							{projects.map(({ id, url, category, title, description, inProgress }) => (
								<div key={id} className="relative">
									<Link
										href={url}
										className="block bg-zinc-900 p-10 rounded-md space-y-2 hover:scale-105 transition duration-200 ease-in-out group-hover:opacity-50 hover:!opacity-100"
										target="_blank"
										rel="noopener noreferrer"
									>
										<small className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
											{category}
										</small>
										<h3 className={clsx('text-2xl font-bold leading-5', neuzeitGrotesk.className)}>
											{title}
										</h3>
										<p className="text-sm text-zinc-200 font-medium">{description}</p>

										{inProgress && (
											<div className="absolute top-2 right-4 bg-purple-400/80 rounded px-2">
												<span className="text-xs font-bold">Work in progress</span>
											</div>
										)}
									</Link>
								</div>
							))}
						</div>
					</div>

					<div>
						<h2
							className={clsx(
								'text-xs uppercase tracking-widest font-sans mb-2 text-zinc-200 font-bold',
								neuzeitGrotesk.className,
							)}
						>
							Work
						</h2>

						<div className="space-y-4 group">
							{workProjects.map(({ id, url, category, title, description }) => (
								<Link
									key={id}
									href={url}
									className="block bg-zinc-900 p-10 rounded-md space-y-2 hover:scale-105 transition duration-200 ease-in-out group-hover:opacity-50 hover:!opacity-100"
									target="_blank"
									rel="noopener noreferrer"
								>
									<small className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
										{category}
									</small>
									<h3 className={clsx('text-2xl font-bold leading-5', neuzeitGrotesk.className)}>
										{title}
									</h3>
									<p className="text-sm text-zinc-200 font-medium">{description}</p>
								</Link>
							))}
						</div>
					</div>
				</section>
			</Container>
		</>
	);
}
