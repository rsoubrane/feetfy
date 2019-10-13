import styled from "styled-components";

export const GlobalContainer = styled.div`
	height: 100vh;
	width: 100vw;
	margin: 0;
	color: white;
	background-color: #16275c;
`;

export const FlexContainer = styled.div`
	display: flex;
`;

export const ContentContainer = styled(FlexContainer)`
	text-decoration: none;
	color: black;
`;

export const FlexRow = styled(FlexContainer)`
	flex-direction: row;
`;

export const FlexColumn = styled(FlexContainer)`
	flex-direction: column;
`;

export const MessageListContainer = styled.div`
	width: 85%;
	margin: 2rem auto;
	border-radius: 0.3rem;
	background-color: #fcfcfc;
	text-align: center;
`;

export const MessageFromListContainer = styled(FlexRow)`
	width: calc(100%-2rem);
	align-items: center;
	justify-content: left;
	margin: 1rem;
`;

export const MessageData = styled(FlexColumn)`
	width: calc(100% - (50px + 2rem));
	align-items: left;
	justify-content: center;
	text-align: left;
`;

export const MessageDetailsContainer = styled(FlexColumn)`
	width: calc(100%-2rem);
	align-items: left;
	text-align: left;
	margin: 1rem;
`;

export const ProfileContainer = styled(FlexRow)`
	width: calc(100% - (50px + 2rem));
	align-items: center;
	justify-content: center;
	text-align: left;
`;

export const Text = styled.p`
	color: black;
`;

export const TextNoWrap = styled(Text)`
	margin: 0.1rem 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Name = styled(TextNoWrap)`
	font-weight: 500;
	font-size: 1rem;
	&.isRead {
		font-weight: 300;
	}
`;

export const Objet = styled(TextNoWrap)`
	font-weight: 400;
	font-size: 0.9rem;
	&.isRead {
		font-weight: 300;
	}
`;

export const Content = styled(TextNoWrap)`
	font-weight: 300;
	font-size: 0.9rem;
`;

export const NameDetails = styled(Text)`
	width: calc(100% - 50px);
	font-weight: 500;
	font-size: 1.3rem;
`;

export const ObjetContainer = styled(ContentContainer);

export const ObjetDetails = styled(Text)`
	width: 60%;
	font-weight: 400;
	font-size: 1.4rem;
`;

export const ContentDetails = styled(Text)`
	width: calc(100%-3rem);
	font-weight: 300;
	font-size: 1rem;
`;
