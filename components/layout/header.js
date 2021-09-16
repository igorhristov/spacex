import React from 'react';
import Head from 'next/head';
const header = () => {
	return (
		<>
			<Head>
				<link
					rel='preconnect'
					href='https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.0-alpha.3/antd.min.js'
				/>
				<title>SpaceX App</title>
				<meta name='description' content='Building Space X app' />
			</Head>
		</>
	);
};

export default header;
