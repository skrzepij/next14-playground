type Character = {
  id: number;
  name: string;
  images: string[];
  debut: {
    manga: string;
    anime: string;
    game: string;
    appearsIn: string;
  };
  family: { [key: string]: string };
  personal: {
    sex: string;
    age: [];
    affiliation: string;
    titles: string[];
  };
};
