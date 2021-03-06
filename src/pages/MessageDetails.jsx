import React from "react";

//Apollo and Graph
import { useApolloClient, useQuery } from "@apollo/react-hooks";

// import gql from "graphql-tag";
import { gql } from "apollo-boost";

//Components
import ProfilePicture from "../components/ProfilePicture";

//Style
import styled from "styled-components";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	ContentContainer,
	MessageListContainer,
	MessageDetailsContainer,
	ProfileContainer,
	NameDetails,
	ObjetDetails,
	ContentDetails
} from "../style/theme";

const FETCH_MESSAGE = gql`
	query FETCH_MESSAGE($messageId: ID!) {
		message(where:{id:$messageId}){
			id
			username
			slug
			objet
			content
		}
	}
`;


const StyledIcon = styled(FontAwesomeIcon)`
	position: absolute;
	top: 7rem;
	left: 8%;
	font-size: 2rem;
	font-weight: 300;
	text-align: left;
	cursor:pointer;
`;

function MessageDetails(props) {
	const messageId = props.match.params.messageId
	const { loading, data } = useQuery(FETCH_MESSAGE, {variables: {messageId}});

	useApolloClient().writeFragment({
		id: messageId,
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
		<React.Fragment>
		<StyledIcon
			icon={faChevronLeft}
			onClick={props.history.goBack}
		/>

		<ContentContainer>
			<MessageListContainer>
				{loading ?(
					<h2>Loading Messages ...</h2>
				) : (
					<MessageDetailsContainer>
						<ProfileContainer>
							<ProfilePicture username={data.message.username} />
							<NameDetails>{data.message.username}</NameDetails>
						</ProfileContainer>
						<ObjetDetails>{data.message.objet}</ObjetDetails>
						<ContentDetails>{data.message.content}</ContentDetails>
					</MessageDetailsContainer>
				)
			}
			</MessageListContainer>
		</ContentContainer>
	</React.Fragment>
	)
}

export default MessageDetails;
