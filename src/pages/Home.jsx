import React from "react";

//Apollo and Graph
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

//Components
import Header from "../components/Header";
import Message from "../components/MessageList";

//Style
import { GlobalContainer, ContentContainer, MessageListContainer } from "../style/theme";

function Home() {
	const { loading, data } = useQuery(FETCH_MESSAGES);

	return (
		<ContentContainer>
			<MessageListContainer>
				{loading ? (
					<h2>Loading Messages ...</h2>
				) : (
					//Sort the data to have the messages based on first names then map them
					data.messages
						.sort((a, b) => (a.username > b.username ? 1 : -1))
						.map(message => <Message key={message.id} message={message} />)
				)}
			</MessageListContainer>
		</ContentContainer>
	);
}

const FETCH_MESSAGES = gql`
	{
		messages {
			id
			username
			slug
			objet
			content
		}
	}
`;

export default Home;
