
import './App.css';
import {ChatEngine} from 'react-chat-engine'
import  ChatFeed  from './components/ChatFeed';
export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='chat admin'
			userSecret='zxcv1234'
			projectID='8eee3fca-876f-4193-a32b-bbc630d7440d'
			renderChatFeed={(chatAppProps) => <ChatFeed  {... chatAppProps}/>}
		/>
	);
}

export default App;
