import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Title>Hallo</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Description>
    </div>
  );
}

const Title = styled.h1`
  color: var(--text-primary);
`;

const Description = styled.p`
  color: var(--text-primary);
`;
