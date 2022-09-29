import type { NextPage } from 'next';
import type { ReactNode } from 'react';

import Head from 'next/head';

interface PropsPageLayout {
	description: string;
	title: string;
	children: ReactNode;
}

const PageLayout: NextPage<PropsPageLayout> = ({
	children,
	title,
	description,
}): JSX.Element => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='title' content={title} />
				<meta name='description' content={description} />
			</Head>
			<main className='main-app'>{children}</main>
			<style jsx>
				{`
					.main-app {
						padding: 3rem 5rem;
					}
				`}
			</style>
		</>
	);
};

export default PageLayout;
