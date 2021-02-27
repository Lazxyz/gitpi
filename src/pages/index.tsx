import { useState } from "react";
import { useRouter } from "next/router";

import {
  Container,
  Login,
  Header,
  Main,
  InputContainer,
  Input,
  Button,
} from "../styles/pages/index";
import HeaderComponent from "../components/Header";

import { FiSearch } from "react-icons/fi";
import { BsArrowRight, BsPerson } from "react-icons/bs";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  function redirectUserPage(e) {
    e.preventDefault();

    if (username.length > 0) {
      return router.push("/user/" + username);
    }
  }

  return (
    <>
      <HeaderComponent />

      <Container>
        <Login>
          <Header>
            <span>Buscar Github</span>
            <BsArrowRight />
          </Header>

          <Main>
            <span>Nome de usuário</span>

            <form onSubmit={redirectUserPage}>
              <InputContainer>
                <div>
                  <BsPerson />
                </div>
                <Input
                  type="text"
                  placeholder="Lazxyz"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputContainer>

              <Button type="submit">Procurar</Button>
            </form>
          </Main>
        </Login>
      </Container>
    </>
  );
}
