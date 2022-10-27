import Image from "next/image";
import pizza from "/public/pizza.jpg";

export default function Veggie() {
  return (
    <>
      <h1>Veggie</h1>
      <p>Pizza</p>
      <Image src={pizza} alt="Pizza Image" width={600} height={400} />
    </>
  );
}
