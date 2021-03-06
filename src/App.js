
import './App.css';
import {ChatEngine} from 'react-chat-engine'
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

export function App() {
		if(!localStorage.getItem('username')) return <LoginForm/>
	return (
		<ChatEngine
			height='100vh'
			projectID='8eee3fca-876f-4193-a32b-bbc630d7440d'
			userName='chat admin'
			userSecret='zxcv1234'
			
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;
