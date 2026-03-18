import { Outlet } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function Layout() {
    return (

        <div className="flex flex-col min-h screen bg-gray-50">
            <header className="sticky  top-0 z-50">
                <NavBar/>
            </header>
  
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet/>
            </main>
           

            <Footer />




        </div>



    );
}
