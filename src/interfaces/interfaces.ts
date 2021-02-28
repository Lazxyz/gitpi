export interface IRepository {
  owner: string;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
  language: string | null;
}

export interface IResponse {
  login: string;
  avatar_url: string;
  stars: string;
  bio: string;
  followers: number;
  followng: number;
  repositories: IRepository[];
}

export interface IUserProps {
  login: string;
  avatar_url: string;
  stars: string;
  bio: string;
  followers: number;
  following: number;
  repositories: IRepository[];
}