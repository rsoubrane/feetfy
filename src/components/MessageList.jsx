import React from "react";

//Apollo and Graph
import { useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

//Components
import ProfilePicture from "./ProfilePicture";

//React Router
import { Link } from "react-router-dom";

//Styles
import { MessageFromListContainer, MessageData, Name, Objet, Content } from "../style/theme";

function Message({ message }) {
	const data = useApolloClient().readFragment({
		id: message.id,
		fragment: gql`
			fragment Message on isRead {
				isRead
			}
		`
	}) || { isRead: false };

	return (
		<Link
			to={{ pathname: `/message/${message.id}`, state: { message: message } }}
			style={{ textDecoration: "none" }}
			params={{ message: message }}>
			<MessageFromListContainer>
				<ProfilePicture username={message.username} />

				<MessageData>
					<Name className={data.isRead ? "isRead" : ""}>{message.username}</Name>
					<Objet className={data.isRead ? "isRead" : ""}>{message.objet}</Objet>
					<Content>{message.content}</Content>
				</MessageData>
			</MessageFromListContainer>
		</Link>
	);
}
export default Message;
