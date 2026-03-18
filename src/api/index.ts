export const genericFetcher= async<T>(url:string):Promise<T>=>{
    const res= await fetch(url);
    if(!res.ok){
        throw new Error("paso algo ..")
    }
    return res.json();
}