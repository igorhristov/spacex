import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import LayoutComponent from '../components/layout';
import { Button, Divider, Image } from 'antd';
import { Typography } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Home({ launches }) {
	const { Title, Text } = Typography;
	return (
		<LayoutComponent>
			<ul style={{ padding: '1rem 2rem' }}>
				{launches.map((launch) => {
					return (
						<div key={launch.id} style={{ padding: '1rem 2rem' }}>
							<p>
								{new Date(launch.launch_date_local).toLocaleDateString('en-US')}
							</p>
							<h2>Mission: {launch.mission_name}</h2>
							<Title level={3}>
								Rocket:{' '}
								<Link href={`/rocket/${launch.rocket.rocket.id}`}>
									<Button type='link' size='large'>
										<RocketOutlined /> {launch.rocket.rocket.name}
									</Button>
								</Link>
							</Title>

							<div>
								{' '}
								<Title level={5}>Mission Detail: </Title>{' '}
								<Text italic>{launch.details}</Text>
							</div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'start',
									gap: '1em',
								}}>
								{' '}
								<Title level={5}>Lunch site: </Title>{' '}
								<Text strong>{launch.launch_site.site_name}</Text>
							</div>

							<Image.PreviewGroup>
								{launch.links.flickr_images.map((image) => (
									<span key={image}>
										<Image
											loading='lazy'
											src={image}
											width={100}
											height={100}
											alt={launch.mission_name}
											preview={{
												src: image,
											}}
										/>
										<Divider type='vertical' />
									</span>
								))}
							</Image.PreviewGroup>
							<Divider />
						</div>
					);
				})}
			</ul>
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
					launch_site {
						site_name
					}
					id
					links {
						flickr_images
					}
					launch_date_local
					details
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
