import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  const isUserSignedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <StyledLink to='/'>
        <Title>Expense App</Title>
      </StyledLink>
      <List>
        {isUserSignedIn ? (
          <>
            <StyledLink to='/account'>
              <ListItem>Account</ListItem>
            </StyledLink>
            <ListItem>
              <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
            </ListItem>
          </>
        ) : (
          <>
            <StyledLink to='/login'>
              <ListItem>Login</ListItem>
            </StyledLink>
            <StyledLink to='/signup'>
              <ListItem>Signup</ListItem>
            </StyledLink>
          </>
        )}
      </List>
    </NavbarContainer>
  );
}



const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-bottom: 2px solid rgba(197, 162, 20, 0.75);
  background-color: rgba(26, 26, 26, 0.9);
  color: #ccc;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const StyledLink = styled(Link)`
  color: #ccc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 1rem;
  color: rgba(197, 162, 20, 0.75)
  
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 1.5rem;
`;

const SignOutButton = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(197, 162, 20, 0.75);
  cursor: pointer;
`;


export default Navbar;
