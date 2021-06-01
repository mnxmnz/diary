export interface ICardData {
  userData: {
    date: number;
    title: string;
    image: string;
    weather: string;
    tags: string[];
  };
}

export interface IData {
  date: number;
  title: string;
  image: string;
  weather: string;
  tags: string[];
}

export interface IUserData {
  userData: string[];
}
