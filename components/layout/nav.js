import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
import {
	CarryOutOutlined,
	RocketOutlined,
	HomeOutlined,
} from '@ant-design/icons';

const Nav = () => {
	const router = useRouter();
	return (
		<Menu theme='dark' selectedKeys={router.pathname} mode='inline'>
			<Menu.Item key='/' icon={<HomeOutlined />}>
				<Link href='/'>Home</Link>
			</Menu.Item>
			<Menu.Item key='/mission' icon={<CarryOutOutlined />}>
				<Link href='/mission'>Past Missions</Link>
			</Menu.Item>
			<Menu.Item key='/rocket' icon={<RocketOutlined />}>
				<Link href='/rocket'>Rockets</Link>
			</Menu.Item>
		</Menu>
	);
};

export default Nav;
