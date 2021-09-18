import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Typography, Button, Row } from 'antd';
import LayoutComponent from '../../components/layout';
import { RocketTwoTone } from '@ant-design/icons';

import Link from 'next/link';

const Rockets = ({ rockets }) => {
	const { Title } = Typography;
	return (
		<LayoutComponent>
			{rockets.map((rocket) => (
				<Row justify='center' style={{ minHeight: '12vh' }} align='middle'>
					<Button type='link' size='large' key={rocket.id}>
						<Link href={`/rocket/${rocket.id}`}>
							<Title onMouse>
								<RocketTwoTone twoToneColor='#10239e' /> {rocket.name}{' '}
								<RocketTwoTone twoToneColor='#10239e' />
							</Title>
						</Link>
					</Button>
				</Row>
			))}
		</LayoutComponent>
	);
};

export default Rockets;

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: 'https://api.spacex.land/graphql/',
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			query GetRockets {
				rockets {
					id
					name
					active
				}
			}
		`,
	});

	return {
		props: {
			rockets: data.rockets,
		},
	};
}
