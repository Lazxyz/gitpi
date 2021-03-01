import { Fragment } from "react";
import { IRepositoryListProps } from "../interfaces/interfaces";

import { Container, Repositories } from "../styles/components/RepositoryList";
import Repository from "./Repository";

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
