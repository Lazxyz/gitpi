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
  created_at: Date;
  blog: string | null;
  location: string | null;
  twitter_username: string | null;
  followers: number;
  following: number;
}

export interface IUserProps {
  login: string;
  avatar_url: string;
  stars: string;
  bio: string;
  created_at: string;
  blog: string | null;
  location: string | null;
  twitter_username: string | null;
  followers: number;
  following: number;
  repositories: IRepository[];
}

export interface IRepositoryListProps {
  repositories: IRepository[];
  owner: string;
}