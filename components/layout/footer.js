import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const footer = () => {
	return (
		<Footer style={{ textAlign: 'center' }}>
			©2021 Created by Igor Hristov
		</Footer>
	);
};

export default footer;
