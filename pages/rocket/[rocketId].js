import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import LayoutComponent from '../../components/layout';
const RocketInfo = ({ rocket }) => {
	const { company, description, name, engines, mass, height, cost_per_launch } =
		rocket.data.rocket;

	if (!rocket) {
		return 'LOADING...';
	}
	return (
		<LayoutComponent>
			<h2>Company: {company}</h2>
			<h2>Rocket Name: {name}</h2>
			<p>Description: {description}</p>
			<p>engines: {engines.type}</p>
			<p>Mass: {mass.kg} kg</p>
			<p>Mass: {height.meters} m</p>
			<p>Mass: {height.meters} m</p>
			<p>Cost per Launch: {cost_per_launch}$</p>
		</LayoutComponent>
	);
};

export default RocketInfo;

export async function getStaticProps({ params }) {
	const { rocketId } = params;
	const client = new ApolloClient({
		uri: 'https://api.spacex.land/graphql/',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			{
			  rocket(id: "${rocketId}"){
				company
				description
				height {
				  meters
				}
				name
				mass {
				  kg
				}
				engines {
				  type
				}
				cost_per_launch
			  }
			}
			`,
	});

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			rocket: data,
		},
	};
}

export async function getStaticPaths() {
	const client = new ApolloClient({
		uri: 'https://api.spacex.land/graphql/',
		cache: new InMemoryCache(),
	});
	const {
		data: { rockets },
	} = await client.query({
		query: gql`
			{
				rockets(limit: 4) {
					id
				}
			}
		`,
	});
	const paths = rockets.map((rocket) => {
		const { id } = rocket;
		return { params: { rocketId: id } };
	});
	return {
		paths,
		fallback: false,
	};
}
