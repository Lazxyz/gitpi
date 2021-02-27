import { Container } from "../styles/components/Header";

import { FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <Container>
      <h1>
        <FiSearch />
        Gitpi
      </h1>
    </Container>
  );
}
