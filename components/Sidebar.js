import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvatar />

                <IconContainer>
                    <ChatIcon />
                    <MoreVertIcon />
                </IconContainer>
            </Header>
        </Container>
    )
}
export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;

const IconContainer = styled.div``;