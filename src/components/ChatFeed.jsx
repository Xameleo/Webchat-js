import MessageForm from "./MessageForm"
import TheirMessage from "./TheirMsg";
import MyMessage from "./MyMessage";


const ChatFeed =(props)=>{
    
    const { chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];
    const renderMessages =()=> {
        const keys = Object.keys(messages);
        //
        return keys.map((key, index)=> {
            const message = messages[key];
            const lastMessageKey = index == 0 ? null: keys[index-1];
            const isMyMessage = userName == message.sender.username;
            return(
                <div keys={`msg_${index}`} style={{width: "100%" }}>
                    <div className="message-block">
                        {
                         isMyMessage
                         ? <MyMessage message={message}/>
                         : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>   
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? "18px" : "0px",
                     marginLeft: isMyMessage ? '0px' : '68px'}}>
                         read-reicepts 
                    </div>
                </div>
            )
        })
    }
    console.log(chat, userName, messages)
    
    if (!chat) return "Loading ....";
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{ chat?.title /* check chat before tittle  */}</div >
                <div className="chat-subtitle">
                    {chat.people.map((person)=>` ${person.person.userName} `)}
                </div>
            
            {renderMessages()}
            </div>
            <div style={{height: "100px"}}/>
            <div className="message-form-container">
                <MessageForm {...props}  chatId={activeChat}/>
            </div>
        </div>
    )
}
export default ChatFeed;