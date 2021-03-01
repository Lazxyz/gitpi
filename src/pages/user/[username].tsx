import { Fragment } from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

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
  Infos,
  Separator,
  BackToHomepage,
} from "../../styles/pages/user/[username]";

import RepositoryList from "../../components/RepositoryList";

import { FiStar, FiUser, FiGlobe, FiLink, FiTwitter } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

export default function User(props: IUserProps) {
  return (
    <Container>
      <Head>
        <title>
          {props.login} - {props.stars} stars
        </title>
      </Head>
      <Header>
        <div>
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
              <Infos>
                {props.twitter_username && (
                  <a href={`https://twitter.com/${props.twitter_username}`}>
                    <FiTwitter />@{props.twitter_username}
                  </a>
                )}
                {props.blog && (
                  <a href={props.blog} target="_blank">
                    <FiLink />
                    {props.blog}
                  </a>
                )}
                {props.location && (
                  <span>
                    <HiLocationMarker />
                    {props.location}
                  </span>
                )}

                <Separator />

                <span>
                  <FiUser />
                  {props.followers} seguidores
                </span>
                <span>
                  <FiGlobe />
                  {props.following} seguindo
                </span>

                <Separator />

                <small>Conta criada em {props.created_at}</small>
              </Infos>
            </div>
          </UserInfo>
        </div>
        <div>
          <Link href="/" passHref>
            <BackToHomepage>
              <BsArrowLeft />
              Voltar
            </BackToHomepage>
          </Link>
        </div>
      </Header>

      <RepositoryList repositories={props.repositories} owner={props.login} />
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

    const date = new Date(response.data.created_at);
    let created_at = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "UTC",
    })
      .format(date)
      .split("-")
      .map((c) => c.padStart(2, "0"))
      .reverse()
      .join("/");

    return {
      props: {
        ...response.data,
        repositories: repositories.data,
        stars,
        created_at,
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
