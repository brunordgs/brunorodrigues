import { Container } from '@/components/ui/Container';
import Heading from '@/components/ui/Typography/Heading';
import Link from 'next/link';
import { projects, workProjects } from '@/data';
import { Text } from '@/components/ui/Typography/Text';
import Image from 'next/image';
import Head from 'next/head';

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
									className="grayscale rounded-md"
									alt="Bruno Rodrigues"
								/>
								<Heading
									size="4xl"
									weight="bold"
									className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 sm:text-5xl"
								>
									Bruno
									<br />
									Rodrigues
								</Heading>
							</div>
							<Text className="text-zinc-300">
								<Text as="strong" className="text-zinc-50">
									Software Engineer
								</Text>
								<br />
								I&apos;m a Software Engineer and a lover of new technologies.
							</Text>

							<Text as="small" weight="bold" className="block">
								By the way, I&apos;m looking for a job.
							</Text>
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
						<Heading
							as="h2"
							transform="uppercase"
							size="xs"
							className="tracking-widest font-sans mb-2 text-zinc-200"
						>
							Projects
						</Heading>

						<div className="space-y-4 group">
							{projects.map(({ id, url, category, title, description, inProgress }) => (
								<div key={id} className="relative">
									<Link
										href={url}
										className="block bg-zinc-900 p-10 rounded-md space-y-2 hover:scale-105 transition duration-200 ease-in-out group-hover:opacity-50 hover:!opacity-100"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Text
											as="small"
											transform="uppercase"
											weight="bold"
											className="tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
										>
											{category}
										</Text>
										<Heading as="h3" size="2xl" weight="semibold" className="leading-5">
											{title}
										</Heading>
										<Text size="sm" className="text-zinc-200">
											{description}
										</Text>

										{inProgress && (
											<div className="absolute top-2 right-4 bg-purple-400/80 rounded px-2">
												<Text as="span" size="xs" weight="bold">
													Work in progress
												</Text>
											</div>
										)}
									</Link>
								</div>
							))}
						</div>
					</div>

					<div>
						<Heading
							as="h2"
							transform="uppercase"
							size="xs"
							className="tracking-widest font-sans mb-2 text-zinc-200"
						>
							Work
						</Heading>

						<div className="space-y-4 group">
							{workProjects.map(({ id, url, category, title, description }) => (
								<Link
									key={id}
									href={url}
									className="block bg-zinc-900 p-10 rounded-md space-y-2 hover:scale-105 transition duration-200 ease-in-out group-hover:opacity-50 hover:!opacity-100"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Text
										as="small"
										transform="uppercase"
										weight="bold"
										className="tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
									>
										{category}
									</Text>
									<Heading as="h3" size="2xl" weight="semibold" className="leading-5">
										{title}
									</Heading>
									<Text size="sm" className="text-zinc-200">
										{description}
									</Text>
								</Link>
							))}
						</div>
					</div>
				</section>
			</Container>
		</>
	);
}
