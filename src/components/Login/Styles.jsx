import styled from "styled-components";

const LoginContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem 1.25rem;
  color: #fff;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(29, 185, 84, 0.22), transparent 52%),
    #000;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    width: min(100%, 420px);
    text-align: center;
  }

  .logo {
    width: min(78vw, 280px);
    height: auto;
  }

  .tagline {
    margin: 0;
    color: #b3b3b3;
    font-size: 1.05rem;
  }
`;

const LoginButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  padding: 0.95rem 1.75rem;
  background-color: #1db954;
  border-radius: 999px;
  color: #000;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.15s ease, background-color 0.15s ease;

  &:hover {
    background-color: #1ed760;
    transform: scale(1.03);
  }
`;

const Credit = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 0.95rem;
  border-bottom: 1px solid transparent;

  &:hover {
    color: #fff;
    border-bottom-color: #fff;
  }
`;

export { LoginContainer, LoginButton, Credit };
