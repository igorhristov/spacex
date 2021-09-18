import React from 'react';
import LayoutComponent from '../components/layout';
import { Button, Row, Typography } from 'antd';
import { RocketTwoTone, ScheduleTwoTone } from '@ant-design/icons';
import Link from 'next/link';

import Image from 'next/image';
const Home = () => {
	const { Title } = Typography;

	return (
		<LayoutComponent>
			<Row justify='center' style={{ minHeight: '20vh' }}>
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg'
					layout='intrinsic'
					width={300}
					height={40}
				/>
			</Row>
			<Row justify='center'>
				<Title style={{ textAlign: 'center' }} level={2} type='success'>
					Welcome
				</Title>
			</Row>

			<Row justify='center' style={{ textAlign: 'center' }}>
				<Title level={4}>This is my Platform for Spacex Data!</Title>
			</Row>

			<Row justify='center' style={{ marginTop: '5rem' }}>
				<Link href='/mission'>
					<Button type='link'>
						<Title level={4} type='warning'>
							<ScheduleTwoTone /> Explore Missions <ScheduleTwoTone />
						</Title>
					</Button>
				</Link>
			</Row>
			<Row justify='center'>
				<Button type='link'>
					<Link href='/rocket'>
						<Title level={4} type='warning'>
							<RocketTwoTone /> Discover SpaceX Rockets <RocketTwoTone />
						</Title>
					</Link>
				</Button>
			</Row>
		</LayoutComponent>
	);
};

export default Home;
