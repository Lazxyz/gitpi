import { IRepository } from "../functions/fetchUser";

import {
  Container,
  Info,
  Name,
  Details,
  Language,
} from "../styles/components/Repository";

import { FiStar, FiBookOpen, FiLink } from "react-icons/fi";
import { BiGitRepoForked } from "react-icons/bi";

import { ReactNode } from "react";

interface RepositoryProps {
  children?: ReactNode;
  data: IRepository;
}

export default function Repository({ data }: RepositoryProps) {
  return (
    <Container>
      <Info>
        <Name>
          <div>
            <a
              href={`https://github.com/${data.author}/${data.name}`}
              target="_blank"
            >
              <FiBookOpen />
              {data.name}
            </a>
          </div>
          {data.homepage && (
            <div>
              <a href={`https://${data.homepage}`} target="_blank">
                <FiLink />
              </a>
            </div>
          )}
        </Name>

        <p>{data.description}</p>
      </Info>
      <Details>
        <div>
          <span>
            <FiStar />
            {data.stargazers_count}
          </span>
          <span>
            <BiGitRepoForked />
            {data.forks_count}
          </span>
        </div>
        <div>{data.language && <Language>{data.language}</Language>}</div>
      </Details>
    </Container>
  );
}
