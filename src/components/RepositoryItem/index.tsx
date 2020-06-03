import React from "react";

import { Repository } from "../../store/ducks/repositories/types";

interface OwnProps {
  repository: Repository;
}

const RepositoryItem = ({ repository }: OwnProps) => {
  return <li> {repository.name} </li>;
};

export default RepositoryItem;
