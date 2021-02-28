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

interface Data {
  owner: string;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
  language: string | null;
}

interface RepositoryProps {
  children?: ReactNode;
  data: Data;
}

export default function Repository({ data }: RepositoryProps) {
  return (
    <Container>
      <Info>
        <Name>
          <div>
            <a
              href={`https://github.com/${data.owner}/${data.name}`}
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
