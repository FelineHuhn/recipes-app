import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <StyledNavigation>
        <Link href="/" passHref legacyBehavior>
          <Anchor active={pathname === "/"}>Startseite</Anchor>
        </Link>
        <Link href="/dessert" passHref legacyBehavior>
          <Anchor active={pathname === "/dessert"}>Desserts</Anchor>
        </Link>
        <Link href="/veggie" passHref legacyBehavior>
          <Anchor active={pathname === "/veggie"}>Veggie</Anchor>
        </Link>
      </StyledNavigation>
    </StyledHeader>
  );
}

const Anchor = styled.a`
  color: var(--text-secondary);
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  font-size: 1.3em;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;
