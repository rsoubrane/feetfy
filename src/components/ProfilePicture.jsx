import React, { Component } from "react";

//Styles
import styled from "styled-components";

const ProfileImageContainer = styled.div`
	justify-content: center;
	margin-right: 1rem;
`;

const ProfileImage = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #459dac;
	font-size: 25px;
	color: white;
	text-align: center;
	line-height: 50px;
`;

class ProfilePicture extends Component {
	render() {
		const usernameLetter = this.props.username.charAt(0).toUpperCase(); // Returns the fist letter of the username

		return (
			<div>
				<ProfileImageContainer>
					<ProfileImage>{usernameLetter}</ProfileImage>
				</ProfileImageContainer>
			</div>
		);
	}
}

export default ProfilePicture;
