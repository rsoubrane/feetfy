import React from "react";

//Logo
import LogoImage from "../assets/logo.png";

//Styles
import styled from "styled-components";

const TopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
`;

const Logo = styled.img`
	height: 60px;
	width: 60px;
	resize: contain;
	margin: 2rem auto;
`;

export default function Header() {
	return (
		<div>
			<TopBar>
				<Logo src={LogoImage} alt='App logo' />
			</TopBar>
		</div>
	);
}
