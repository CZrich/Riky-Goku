export interface ICardProps {
     id?:number;
     ruta?:string;
    title: string;
    subtitle: string;
    image: string | null;
    badge?: string; 
    description?: string;
    footerInfo?: string;
}