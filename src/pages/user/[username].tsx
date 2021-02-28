import { Fragment } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

import {
  IUserProps,
  IRepository,
  IResponse,
} from "../../interfaces/interfaces";

import {
  Container,
  Header,
  UserInfo,
  Followers,
  Repositories,
  Grid,
} from "../../styles/pages/user/[username]";
import Repository from "../../components/Repository";

import { FiStar, FiUser, FiGlobe } from "react-icons/fi";

export default function User(props: IUserProps) {
  return (
    <Container>
      <Header>
        <UserInfo>
          <div>
            <img src={props.avatar_url} alt="avatar" />
          </div>
          <div>
            <strong>
              {props.login}
              <span>
                <FiStar />
                {props.stars}
              </span>
            </strong>

            <p>{props.bio ? props.bio : "Nenhuma biografia definida."}</p>
            <Followers>
              <span>
                <FiUser />
                {props.followers} seguidores
              </span>
              <span>
                <FiGlobe />
                {props.following} seguindo
              </span>
            </Followers>
          </div>
        </UserInfo>
      </Header>

      <Repositories>
        <h2>Repositórios ({props.repositories.length})</h2>
        <Grid>
          {props.repositories.map((c) => (
            <Fragment key={c.name}>
              <Repository
                data={{
                  ...c,
                  owner: props.login,
                }}
              />
            </Fragment>
          ))}
        </Grid>
      </Repositories>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.params;

  try {
    const response = await axios.get<IResponse>(
      "https://api.github.com/users/" + username
    );

    const repositories = await axios.get<IRepository[]>(
      "https://api.github.com/users/" + username + "/repos"
    );

    let stars = 0;
    repositories.data.map(
      (repository) => (stars += repository.stargazers_count)
    );

    return {
      props: {
        ...response.data,
        repositories: repositories.data,
        stars,
      },
    };
  } catch (e) {
    if (e.response.status === 404) {
      return {
        notFound: true,
      };
    }

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
