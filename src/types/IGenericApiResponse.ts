export interface IApiResponse<T> {
    items?: T[];    // Dragon Ball suele usar 'items'
    results?: T[];  // Rick & Morty suele usar 'results'
    data?: T[];     // Otras APIs usan 'data'
    meta?: {
        totalItems: number;
        itemCount: number;
        totalPages: number;
    };


}