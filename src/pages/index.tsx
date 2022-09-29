// import PageLayout from 'layouts/PageLayout';
import PageLayout from '@/layouts/PageLayout';
import type { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
	return (
		<PageLayout title='OpenDavidSea' description='app of ntfs '>
			<h1 className='text-3xl font-bold'>Hello world!</h1>
		</PageLayout>
	);
};

export default Home;
