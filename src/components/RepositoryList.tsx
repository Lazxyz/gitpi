import { Fragment } from "react";
import { Container, Repositories } from "../styles/components/RepositoryList";
import Repository from "./Repository";

import { IRepository } from "../functions/fetchUser";

export interface IRepositoryListProps {
  repositories: IRepository[];
  author: string;
}

export default function RepositoryList(props: IRepositoryListProps) {
  return (
    <Container>
      <h2>Repositórios ({props.repositories.length})</h2>
      <Repositories>
        {props.repositories.map((c) => (
          <Fragment key={c.name}>
            <Repository
              data={{
                ...c,
                author: props.author,
              }}
            />
          </Fragment>
        ))}
      </Repositories>
    </Container>
  );
}
