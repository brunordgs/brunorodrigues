import { FONT_SIZES, FONT_WEIGHTS, neuzeitGrotesk } from '@/shared/constants';
import type { Typography } from '@/shared/interfaces/Typography';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

type Props = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: keyof typeof FONT_SIZES;
} & HTMLAttributes<HTMLHeadingElement> &
	Typography;

export default function Heading({
	as: Tag = 'h1',
	size = 'base',
	weight = 'bold',
	transform = 'normal-case',
	children,
	className,
	...props
}: Props) {
	return (
		<Tag
			className={clsx(
				!className?.includes('font-sans') && neuzeitGrotesk.className,
				FONT_SIZES[size],
				FONT_WEIGHTS[weight],
				transform,
				className,
			)}
			{...props}
		>
			{children}
		</Tag>
	);
}
