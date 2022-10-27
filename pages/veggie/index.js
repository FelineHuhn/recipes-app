import Image from "next/image";
import pizza from "/public/pizza.jpg";
import styled from "styled-components";

export default function Veggie() {
  return (
    <>
      <VeggieHeadline>Veggie</VeggieHeadline>
      <VeggieTitle>Pizza</VeggieTitle>
      <Image src={pizza} alt="Pizza Image" width={600} height={400} />
    </>
  );
}

const VeggieHeadline = styled.h1`
  font-size: 2.5em;
  color: darkgreen;
`;

const VeggieTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1.5em;
`;
