import { Fragment } from "react";
import { GetServerSideProps } from "next";

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

interface Repository {
  owner: string;
  name: string;
  description: string;
  stargazers_count: number;
  homepage: string | null;
  language: string | null;
}

interface DataProps {
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  repositories: Repository[];
  stars: number;
}

export default function User(props: DataProps) {
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

  const response = await fetch("https://api.github.com/users/" + username);
  if (response.status === 403) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (response.status === 404) {
    return {
      notFound: true,
    };
  }

  const repository = await fetch(
    "https://api.github.com/users/" + username + "/repos"
  );

  const data: DataProps = {
    ...(await response.json()),
    repositories: await repository.json(),
  };

  const { login, avatar_url, bio, followers, following, repositories } = data;

  let stars = 0;
  repositories.map((c) => (stars += c.stargazers_count));

  return {
    props: {
      login,
      avatar_url,
      bio,
      followers,
      following,
      repositories,
      stars,
    },
  };
};
