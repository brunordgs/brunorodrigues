import { Container } from '@/components/ui/Container';
import Heading from '@/components/ui/Typography/Heading';
import Link from 'next/link';

export default function Home() {
	return (
		<Container className="flex flex-col">
			<div className="space-y-4">
				<Heading size="3xl" weight="bold">
					Bruno Rodrigues
				</Heading>
				<p className="text-zinc-300">
					<strong className="text-zinc-50">Software Engineer</strong>
					<br />
					I&apos;m a Software Engineer and a lover of new technologies.
				</p>

				<small className="font-bold block">By the way, I&apos;m looking for a job.</small>
			</div>

			<div className="lg:absolute right-0 max-w-[736px]">
				<Heading
					as="h2"
					transform="uppercase"
					className="text-sm tracking-widest lg:sr-only font-sans"
				>
					Projects
				</Heading>

				<div className="space-y-4">
					<Link
						href="/"
						className="block bg-zinc-900 hover:bg-zinc-800 p-10 rounded-md space-y-2 hover:scale-105 transition-transform"
						target="_blank"
						rel="noopener noreferrer"
					>
						<small className="uppercase font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
							Personal
						</small>
						<Heading as="h3" size="lg" weight="semibold" className="leading-5">
							Sharep
						</Heading>
						<p className="text-sm text-zinc-200">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla illum repellendus
							pariatur facere voluptatibus at itaque iusto animi recusandae, impedit maxime, culpa
							debitis distinctio quis eius? Culpa, laborum rerum!
						</p>
					</Link>

					<Link
						href="/"
						className="block bg-zinc-900 hover:bg-zinc-800 p-10 rounded-md space-y-2 hover:scale-105 transition-transform"
						target="_blank"
						rel="noopener noreferrer"
					>
						<small className="uppercase font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
							Voluntary
						</small>
						<Heading as="h3" size="lg" weight="semibold" className="leading-5">
							Comunidade Evangélica Maranata
						</Heading>
						<p className="text-sm text-zinc-200">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla illum repellendus
							pariatur facere voluptatibus at itaque iusto animi recusandae, impedit maxime, culpa
							debitis distinctio quis eius? Culpa, laborum rerum!
						</p>
					</Link>
				</div>
			</div>
		</Container>
	);
}
