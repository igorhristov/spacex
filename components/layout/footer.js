import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const footer = () => {
	return (
		<Footer theme="dark" style={{ textAlign: 'center', background: '#111d2c', color:"whitesmoke" }}>
			©2021 Created by Igor Hristov
		</Footer>
	);
};

export default footer;
