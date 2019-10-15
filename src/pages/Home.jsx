import React from "react";

//Apollo and Graph
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

//Components
import Message from "../components/MessageList";

//Style
import { ContentContainer, MessageListContainer } from "../style/theme";

function Home() {
	const { loading, data } = useQuery(FETCH_MESSAGES);

	return (
		<ContentContainer>
			<MessageListContainer>
				{loading ? (
					<h2>Loading Messages ...</h2>
				) : (
					data.messages
						.map(message => <Message key={message.id} message={message} />)
				)}
			</MessageListContainer>
		</ContentContainer>
	);
}

const FETCH_MESSAGES = gql`
	{
		messages(orderBy:username_ASC){
			id
			username
			slug
			objet
			content
		}
	}
`;

export default Home;
