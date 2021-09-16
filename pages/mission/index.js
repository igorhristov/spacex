import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Button, Divider, Image, Row, Col, Card } from 'antd';
import { Typography } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import Link from 'next/link';
import LayoutComponent from '../../components/layout';

export default function Missions({ launches }) {
	const { Meta } = Card;
	const { Title, Text } = Typography;
	return (
		<LayoutComponent>
			<Row gutter={[24, 32]}>
					{launches.map((launch) => {
						return (
							<Col  xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}  key={launch.id} >
								<Link href={`/rocket/${launch.rocket.rocket.id}`}>
									<Card
										title={launch.mission_name}
										hoverable
										cover={
											<img alt='example' src={launch.links.flickr_images[0]} />
										}
										actions={[<RocketOutlined key='rockets' />]}>
										<Meta
											title={launch.rocket.rocket.name}
											description={new Date(
												launch.launch_date_local
											).toLocaleDateString('en-US')}
										/>
									</Card>
								</Link>
							</Col>
						);
					})}
			</Row>
		</LayoutComponent>
	);
}
export async function getStaticProps() {
	const client = new ApolloClient({
		uri: 'https://api.spacex.land/graphql/',
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			query GetLaunches {
				launchesPast(limit: 30) {
					rocket {
						rocket {
							id
							name
						}
					}
					mission_name
					id
					links {
						flickr_images
					}
					launch_date_local
				}
			}
		`,
	});

	return {
		props: {
			launches: data.launchesPast,
		},
	};
}
