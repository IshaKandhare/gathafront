

import React from 'react'
import Navbar from '../Compoents/Navbar'
import Footer from '../Compoents/Footer'
import { ChatEngine } from 'react-chat-engine';
import './Community.css'
import ChatFeed from '../Compoents/Chat/ChatFeed';

const projectID = 'ae68c2cd-5739-4d06-bfcc-e2613ab0afae';

export default function Community() {
  return (
    <>
    <div><Navbar/></div>
    <div style={{marginTop:"5rem"}}><ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Gatha"
      userSecret="Gatha"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      </div>
    <div><Footer/></div>
    </>
  )
}
