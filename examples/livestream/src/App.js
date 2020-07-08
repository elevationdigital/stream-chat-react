/* eslint-disable */
import React, { Component } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  MessageInputLarge,
  MessageInputSmall,
  MessageLivestream,
  ChannelHeader,
  Thread,
  Window,
} from '@elevationdigital/stream-chat-react';
import '@elevationdigital/stream-chat-react/dist/css/index.css';
import './App.css';

import video from './assets/video.png';

const urlParams = new URLSearchParams(window.location.search);
// const user =
//   urlParams.get('user') || process.env.REACT_APP_CHAT_API_DEFAULT_USER;
const theme = urlParams.get('theme') || 'light';
const channelName = urlParams.get('channel') || 'demo';
// const userToken =
//   urlParams.get('user_token') ||
//   process.env.REACT_APP_CHAT_API_DEFAULT_USER_TOKEN;

class App extends Component {
  constructor(props) {
    super(props);
    this.chatClient = new StreamChat('qk4nn7rpcn75');
    // this.chatClient.setBaseURL(process.env.REACT_APP_CHAT_SERVER_ENDPOINT);
    this.chatClient.setUser(
      {
        id: 'example-user',
      },
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZXhhbXBsZS11c2VyIn0.HlC0dMKL43y3K_XbfvQS_Yc3V314HU4Z7LrBLil777g',
    );
    this.channel = this.chatClient.channel('livestream', channelName, {
      image:
        'https://images.unsplash.com/photo-1512138664757-360e0aad5132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80',
      name: 'The water cooler',
      example: 1,
    });

    this.channel.watch();
  }

  render() {
    return (
      <>
        <div className="example-video-container">
          <div className="example-video">
            <img src={video} alt="fake video" />
          </div>
        </div>
        <div className="fix-pos max-vw-28 min-vw-25 full-width way-forward stayright downlow ec-box-shadow">
          <Chat client={this.chatClient} theme={'livestream dark'}>
            <Channel channel={this.channel}>
              <Window hideOnThread>
                <ChannelHeader live title="All Chat" />
                <MessageList
                  messageActions={['edit', 'delete', 'flag']}
                  Message={MessageLivestream}
                />
                <MessageInput Input={MessageInputSmall} focus />
              </Window>
            </Channel>
          </Chat>
        </div>
      </>
    );
  }
}

export default App;
