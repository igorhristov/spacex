import React, { useState } from 'react';
import { Layout } from 'antd';
import Nav from './nav';

import Footer from './footer';

const { Header, Content, Sider } = Layout;

const LayoutComponent = (props) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => setCollapsed(!collapsed);

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
		breakpoint="sm"
				collapsible
				collapsed={collapsed}
				onCollapse={toggleCollapsed}>
				<div className='logo' />
				<Nav />
			</Sider>
			<Layout className='site-layout'>
				<Header className='site-layout-background' style={{ padding: 0 }} />
				<Content style={{ margin: '0 16px' }}>
					<div
						className='site-layout-background'
						style={{ padding: 24, minHeight: 360 }}>
						{props.children}
					</div>
				</Content>
				<Footer />
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;
