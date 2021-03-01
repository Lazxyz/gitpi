import { Fragment } from "react";
import { IUserResponse } from "../../functions/fetchUser";

import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { fetchUser } from "../../functions/fetchUser";

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

export default function User(props: IUserResponse) {
  return (
    <Container>
      <Head>
        <title>
          {props.user.login} - {props.stars} stars
        </title>
      </Head>
      <Header>
        <div>
          <UserInfo>
            <div>
              <img src={props.user.avatar_url} alt="avatar" />
            </div>
            <div>
              <strong>
                {props.user.login}
                <span>
                  <FiStar />
                  {props.stars}
                </span>
              </strong>

              <p>{props.user.bio || "Nenhuma biografia definida."}</p>
              <Infos>
                {props.user.twitter_username && (
                  <a
                    href={`https://twitter.com/${props.user.twitter_username}`}
                  >
                    <FiTwitter />@{props.user.twitter_username}
                  </a>
                )}
                {props.user.blog && (
                  <a href={props.user.blog} target="_blank">
                    <FiLink />
                    {props.user.blog}
                  </a>
                )}
                {props.user.location && (
                  <span>
                    <HiLocationMarker />
                    {props.user.location}
                  </span>
                )}

                <Separator />

                <span>
                  <FiUser />
                  {props.user.followers} seguidores
                </span>
                <span>
                  <FiGlobe />
                  {props.user.following} seguindo
                </span>

                <Separator />

                <small>Conta criada em {props.user.created_at}</small>
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

      <RepositoryList
        repositories={props.repositories}
        author={props.user.login}
      />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.params;

  const response = await fetchUser(username);
  if (response.status === 404) {
    return {
      notFound: true,
    };
  }

  if (response.status === 403) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: response,
  };
};
