const MyMessage = (message) =>{
    if(message?.attachments?.lenght > 0){
        return(
            <img src={message.attachments[0].file}
                alt="message-attahments"
                className="message-image"
                style={{float: "right"}}
                /> )
    }
    return(
        <div className="message" style={{float:"right", color:"white", marginRight:"18px", backgroundColor:"#3B2A50"}}>
           {message.text}
        </div>
    )
}
export default MyMessage;