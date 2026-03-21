
  
export interface IDetailRickAndMorty{

    id:number;
    name:string;
    status:string;
    species:string;
    gender:string;
    location:{
        name:string;
    }
    image:string;
    episode:string[];
    created:string;
}