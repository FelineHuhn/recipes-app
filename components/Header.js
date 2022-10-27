import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavigation></StyledNavigation>
      <Anchor>Desserts</Anchor>
      <Anchor>Veggie</Anchor>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Anchor = styled.a`
  color: var(--text-secondary);

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;
