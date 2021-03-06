export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
    baseUrl:'./assets/img',
    images: [
      {
        key: 'ground',
        url: 'ground.png',
      },
      {
        key: 'food',
        url: 'food.png',
      },
      {
        key: 'download',
        url: 'download.jpg',
      },
      {
        key: 'f2',
        url: 'f2.jpg',
      },
    ],
};