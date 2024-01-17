import Messenger from './Components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '488878505715-jrd2hvvkskdgq5ugu8q24bu746ui8b8k.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId} >
      <AccountProvider>
    <Messenger/>
    </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
