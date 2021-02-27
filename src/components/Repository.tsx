import { Container, Name, Language } from "../styles/components/Repository";

import { FiStar, FiBookOpen, FiLink } from "react-icons/fi";
import { ReactNode } from "react";

interface Data {
  owner: string;
  name: string;
  description: string;
  stargazers_count: number;
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
      <div>
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
              <a href={data.homepage}>
                <FiLink />
              </a>
            </div>
          )}
        </Name>

        <p>{data.description}</p>
      </div>
      <div>
        <span>
          <FiStar />
          {data.stargazers_count}
        </span>

        {data.language && <Language>{data.language}</Language>}
      </div>
    </Container>
  );
}
