import { useContext } from "react";
import { Dialog , Box, Typography , List, ListItem , styled} from "@mui/material";
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const Component = styled(Box)`
    display: flex; 
`;

const Container =styled(Box)`
    padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
    font-size:26px;
    margin-bottom:25px;
    color: #525252;
    font-family:Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight:300;
`;

const StyledList = styled(List)`
    & > li  {
        padding: 0;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
        color: #4a4a4a;
    }
`;



const dialogStyle ={
    marginTop: '12%',
    height: '96%',
    width: '60%',
    maxWidth: '100%',
    maxHeight:'100%',
    borderRadius: 0 ,
    boxShadow:'none',
    overFlow:'hidden'

}

const LoginDialog = () => {

    const{setAccount} = useContext(AccountContext);

    const onLoginError = (res) => {

        console.log('Login failed' , res);
    }

    const onLoginSuccess = async (res) => {

       const decoded = jwt_decode(res.credential);
       setAccount(decoded);
       await addUser(decoded);
    }

    return(
        <Dialog open = {true}
        BackdropProps={{style: {backgroundColor: 'unset'}}}
        maxWidth={'md'}
        PaperProps={{sx: dialogStyle}}
        // hideBackdrop={true}
            >
                <Component>
                    <Container>
                        <Title>To use Whatsapp on your computer:</Title>
                        <StyledList>
                            <ListItem>1. Open Whatsapp on your phone</ListItem>
                            <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                        </StyledList>
                    </Container>
                    <Box style={{position: 'relative'}}>
                        <Box style={{position: 'absolute' , top:'50%' , transform:'translateX(25%) translateY(-25%)' }}>
                        <GoogleLogin
                                buttonText = ""
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            />
                        </Box>
                    </Box>
                </Component>
            
        </Dialog>
    )
}

export default LoginDialog;