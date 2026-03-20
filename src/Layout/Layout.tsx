import { Outlet } from "react-router-dom";
import {  Toaster } from "react-hot-toast";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function Layout() {
    return (
        /* flex-col + min-h-screen son la clave */
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <NavBar />
            </header>
             <Toaster position="top-right" reverseOrder={false}></Toaster>
            <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
                <Outlet />
            </main>
           
            <Footer />
        </div>
    );
}
