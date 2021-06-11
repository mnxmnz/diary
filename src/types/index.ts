export interface ICardData {
  userData: {
    id: number;
    date: number;
    title: string;
    image: string;
    weather: string;
    tags: string[];
    summary: string;
    text: string;
  };
}

export interface IData {
  id: number;
  date: number;
  title: string;
  image: string;
  weather: string;
  tags: string[];
  summary: string;
  text: string;
}

export interface IUserData {
  userData: string[];
}

export interface IRawData {
  date: number;
  id: number;
  title: string;
  image: string;
  weather: string;
  tags: string[];
  summary: string;
  text: string;
}
