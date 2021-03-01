export interface IRepository {
  author: string;
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
  bio: string;
  created_at: string;
  blog: string | null;
  location: string | null;
  twitter_username: string | null;
  followers: number;
  following: number;
}

export interface IUserProps {
  data: IResponse;
  stars: number;
  repositories: IRepository[];
  created_at: Date;
}

export interface IRepositoryListProps {
  repositories: IRepository[];
  author: string;
}