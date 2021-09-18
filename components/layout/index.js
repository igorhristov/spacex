import React from 'react';
import { Layout, Affix } from 'antd';
import Nav from './nav';
import Footer from './footer';
import Header from './header';
const { Content } = Layout;

const LayoutComponent = (props) => {
	return (
		<Layout className='layout'>
			<Header />
			<Affix>
				<Nav />
			</Affix>
			<Content>
				<main className='site-layout-content'>{props.children}</main>
			</Content>
			<Footer />
		</Layout>
	);
};

export default LayoutComponent;
