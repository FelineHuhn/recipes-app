import Image from "next/image";
import styled from "styled-components";

export default function Dessert() {
  return (
    <div>
      <DessertHeadline>Dessert</DessertHeadline>
      <DessertTitle>Blueberry Cake</DessertTitle>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="Blueberry Cake Image"
        width={600}
        height={400}
      />
    </div>
  );
}

const DessertHeadline = styled.h1`
  font-size: 2.5em;
`;

const DessertTitle = styled.p`
  color: hotpink;
  font-weight: bold;
  font-size: 1.5em;
`;
