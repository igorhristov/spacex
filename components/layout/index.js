import React from 'react';
import Footer from './footer';
import Header from './header';

import styles from './layout.module.css';

const LayoutComponent = (props) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.content}>{props.children}</main>
			<Footer />
		</div>
	);
};

export default LayoutComponent;
