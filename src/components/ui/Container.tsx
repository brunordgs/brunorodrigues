import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export function Container({ className, children }: HTMLAttributes<HTMLDivElement>) {
	return <div className={clsx('w-screen max-w-[1440px] mx-auto p-32 relative', className)}>{children}</div>;
}
