import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Typography, Button, Row } from 'antd';
import LayoutComponent from '../../components/layout';
import { RocketTwoTone } from '@ant-design/icons';

import Link from 'next/link';

const Rockets = ({ rockets }) => {
	const { Title, Text } = Typography;
	return (
		<LayoutComponent>
			{rockets.map((rocket) => (
				<Row key={rocket.id}>
					<Title>
			
						<Link href={`/rocket/${rocket.id}`}>
							<Button type='link' size='large'>
								<RocketTwoTone twoToneColor="#eb2f96" /> {rocket.name}
							</Button>
						</Link>
					</Title>
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
