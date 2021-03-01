import api from '../services/api';

interface IUser {
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

export interface IRepository {
  author: string;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
  language: string | null;
}

export interface IUserResponse {
  user?: IUser;
  repositories?: IRepository[];
  status: number;
  stars?: number;
}

export async function fetchUser(username: string | string[]): Promise<IUserResponse> {
  try {
    const response = await api.get<IUser>('/users/' + username);
    const repositories = await api.get<IRepository[]>('/users/' + username + '/repos');

    const date = new Date(response.data.created_at);
    const created_at = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "UTC",
    })
      .format(date)
      .split("-")
      .map((c) => c.padStart(2, "0"))
      .reverse()
      .join("/");
    
    let stars = 0;
    repositories.data.map(c => stars += c.stargazers_count);

    return {
      user: {
        ...response.data,
        created_at,
      },
      repositories: repositories.data,
      stars,
      status: 200,
    }
  } catch(e) {
    if(e.response.status === 404) {
      return {
        status: 404,
      }
    }

    return {
      status: 403,
    }
  }
}