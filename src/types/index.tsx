export interface IStory {
  id: number;
  by: string;
  score: number;
  time: number;
  title: string;
}

export interface IStoryDetail extends IStory {
  url: string;
  kids: Array<number>;
  descendants: number;
}

export interface IComment {
  by: string;
  id: number;
  kids: Array<number>;
  parent: number;
  text: string;
  time: number;
}
