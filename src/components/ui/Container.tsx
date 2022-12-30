import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export function Container({ className, children }: HTMLAttributes<HTMLDivElement>) {
	return <div className={clsx('container', className)}>{children}</div>;
}
