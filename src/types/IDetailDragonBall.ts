export interface IDetailDragonBall {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
  originPlanet: {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: string | null;
  };
  // Corregido: 'transformations' para coincidir con el JSON de la API
  transformations: {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt: string | null;
  }[];
}