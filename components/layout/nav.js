import React from 'react';
import Link from 'next/link'
import { Menu } from 'antd';
import {
	CarryOutOutlined,
	UserOutlined,
	TeamOutlined,
	FileOutlined,
	RocketOutlined,
	HomeOutlined,
} from '@ant-design/icons';

const Nav = () => {
	return (
		<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
			<Menu.Item key='1' icon={<HomeOutlined />}>
				<Link href='/' passHref>
					Home
				</Link>
			</Menu.Item>
			<Menu.Item key='2' icon={<CarryOutOutlined />}>
				<Link href='/mission' passHref>
					Past Missions
				</Link>
			</Menu.Item>
			<Menu.Item key='3' icon={<RocketOutlined />}>
				<Link href='/rocket' passHref>
					Rockets
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export default Nav;
