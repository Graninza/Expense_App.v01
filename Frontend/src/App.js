
import styled from "styled-components";
import bg from './img/bg.png'
import {Routes, Route} from'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Account from './Pages/Account'


function App() {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <AppStyled bg={bg} className="App">
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        {isUserSignedIn && <Route path='/account' element={<Account />} />}
      </Routes>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
`;

export default App;