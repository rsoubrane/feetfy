import React from "react";

//Apollo and Graph
import { useApolloClient } from "@apollo/react-hooks";

import { gql } from "apollo-boost";

// import gql from "graphql-tag";

//Components
import Header from "../components/Header";
import ProfilePicture from "../components/ProfilePicture";

//Style
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	GlobalContainer,
	ContentContainer,
	MessageListContainer,
	MessageDetailsContainer,
	ProfileContainer,
	NameDetails,
	ObjetDetails,
	ContentDetails
} from "../style/theme";

function MessageDetails(props) {
	const message = props.location.state.message;

	useApolloClient().writeFragment({
		id: message.id,
		fragment: gql`
			fragment MessageWrite on isRead {
				isRead
			}
		`,
		data: {
			isRead: true,
			__typename: "isRead"
		}
	});

	return (
		<GlobalContainer>
			<Header />
			<FontAwesomeIcon
				icon={faChevronLeft}
				onClick={props.history.goBack}
				style={{
					position: "absolute",
					top: "7rem",
					left: "8%",
					fontSize: "2rem",
					fontWeight: "300",
					textAlign: "left"
				}}
			/>

			{/* <button
				onClick={this.test(message.id)}
				style={{ textAlign: "center", color: "white", position: "absolute", bottom: "10%" }}>
				TEST
			</button> */}

			<ContentContainer>
				<MessageListContainer>
					<MessageDetailsContainer>
						<ProfileContainer>
							<ProfilePicture username={message.username} />
							<NameDetails>{message.username}</NameDetails>
						</ProfileContainer>
						<ObjetDetails>{message.objet}</ObjetDetails>
						<ContentDetails>{message.content}</ContentDetails>
					</MessageDetailsContainer>
				</MessageListContainer>
			</ContentContainer>
		</GlobalContainer>
	);
}

export default MessageDetails;
