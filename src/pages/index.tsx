import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  Container,
  Login,
  Header,
  Main,
  InputContainer,
  Input,
  Button,
} from "../styles/pages/index";

import { FiSearch } from "react-icons/fi";
import { BsArrowRight, BsPerson } from "react-icons/bs";

import { MoonLoader } from "react-spinners";

export default function Home() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  function redirectUserPage(e: FormEvent) {
    e.preventDefault();

    if (username.length > 0) {
      router.push("/user/" + username);
      setIsLoading(true);
    }
  }

  return (
    <>
      <Container>
        <Head>
          <title>GitPi</title>
        </Head>
        <Login>
          <Header>
            <span>Buscar Github</span>
            <BsArrowRight />
          </Header>

          <Main>
            <span>
              Nome de usuário
              <MoonLoader color="var(--black)" loading={isLoading} size={17} />
            </span>

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
