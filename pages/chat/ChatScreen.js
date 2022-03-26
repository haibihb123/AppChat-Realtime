import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SearchIcon from "@material-ui/icons/Search";

export default function ChatScreen() {
    return (
        <Container>
            <HContainer>
                <PeopleContainer>
                    <Search>
                        <SearchIcon />
                        <SearchInput placeholder="Search" />
                    </Search>
                    <SidebarButton >Start a new Group chat</SidebarButton>
                    <Gcontainer>
                        <GroupContainer>
                            <h2>Group and People</h2>
                        </GroupContainer>
                        <GButton>
                            <UserAvatar />
                            <Nickname>Name </Nickname>
                        </GButton>
                        <GButton>
                            <UserAvatar />
                            <Nickname>Name </Nickname>
                        </GButton>
                        <GButton>
                            <UserAvatar />
                            <Nickname>Name </Nickname>
                        </GButton>
                        <GButton>
                            <UserAvatar />
                            <Nickname>Name </Nickname>
                        </GButton>
                        <GButton>
                            <UserAvatar />
                            <Nickname>Name </Nickname>
                        </GButton>
                    </Gcontainer>
                </PeopleContainer>
                <ChatContainer>
                    <HeaderChat>
                        <User>
                            <UserAvatar />
                            <Nickname>Nick Name</Nickname>

                        </User>
                        <Time>time online</Time>
                        <IconContainer>
                            <IconButton>
                                <AttachmentOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <MoreHorizOutlinedIcon />
                            </IconButton>
                        </IconContainer>
                    </HeaderChat>

                    <MesContainer>

                    </MesContainer>

                    <InputContainer>
                        <IconButton><InsertEmoticonIcon /></IconButton>
                        <Input />
                        <IconButton><SendIcon /></IconButton>
                        <IconButton><MicIcon /></IconButton>
                    </InputContainer>
                </ChatContainer>
            </HContainer>
        </Container>
    )

}


const Input = styled.input`
    flex: 1;
    outline: 0;
    align-items: center;
    padding: 10px;
    position: sticky;
    border: none;
    bottom: 0;
    background-color: whitesmoke;
    margin-left: 15px;
    margin-right: 15px;
`;

const InputContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 10px;
    position: sticky;
    bottom: 0;
    background-color: white;
    z-index: 100;
    margin-bottom: 30px;
`;
const Container = styled.div`
    flex: 1;
    outline-width: 0;
    height: 100px;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
const HContainer = styled.div`
    
    display: flex;
    outline-width: 0;
    height: 100px;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
const PeopleContainer = styled.div`
    
`;
const ChatContainer = styled.div`
    flex: 1;
    margin-left: 30px;
    margin-top: 30px;
    margin-right: 70px;
    outline-width: 0;
    height: 100px;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

const HeaderChat = styled.div`
    display: flex;
    position: sticky;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
     &&&{ 
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
        }
`;
const IconContainer = styled.div`
`;

const MesContainer = styled.div`
    padding: 30px;
    background-color: #e5ded8;
    min-height: 57vh;
`;
const User = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
  
`;
const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.6;
    }
`;

const Nickname = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
    :hover {
        opacity: 0.6;
    }
`;

const Time = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;
const Search = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    height: 50px;
    padding: 20px;
    &&&{ 
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        background-color: white;
        }
    border-radius: 50px;
    width: 350px;
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;

`;
const SidebarButton = styled(Button)`
    width: 100%;
     &&&{ 
         margin-top: 10px;
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
        }
   
`;
const Gcontainer = styled.div`
    margin-top: 10px;
    margin-right: 30px;
     &&&{ 
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        }
`;
const GButton = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;
const GroupContainer = styled.div`
    display: flex;
    position: sticky;
    background-color: whitesmoke;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;