import { FONT_SIZES, FONT_WEIGHTS } from '@/shared/constants';
import { type Typography } from '@/shared/interfaces/Typography';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export type Props = {
	as?: 'p' | 'span' | 'small' | 'strong';
	size?: keyof typeof FONT_SIZES;
} & HTMLAttributes<HTMLParagraphElement> &
	Typography;

export function Text({
	as: Tag = 'p',
	size = 'base',
	weight = 'normal',
	transform = 'normal-case',
	children,
	className,
	...props
}: Props) {
	return (
		<Tag
			className={clsx(
				Tag === 'small' ? 'text-xs' : FONT_SIZES[size],
				Tag === 'strong' ? 'font-bold' : FONT_WEIGHTS[weight],
				transform,
				className,
			)}
			{...props}
		>
			{children}
		</Tag>
	);
}
