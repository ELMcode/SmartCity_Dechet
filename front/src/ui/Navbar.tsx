import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-100 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo et titre */}
                <div className="flex items-center space-x-4">
                    <Link href="/front/public">
                        <img src="/logo.svg" alt="Ville de Lille" className="h-12" />
                    </Link>
                    <span className="text-xl font-semibold text-blue-900">Traitement des déchets et du recyclage</span>
                </div>


                {/* Liens barre nav */}
                <ul className="flex space-x-8 text-sm font-medium text-gray-700">
                    <li>
                        <Link href="/accueil" className="hover:text-blue-700">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/calendrier-des-collectes" className="hover:text-blue-700">
                            Calendrier
                        </Link>
                    </li>
                    <li>
                        <Link href="/carte-des-points-de-collecte" className="hover:text-blue-700">
                            Carte
                        </Link>
                    </li>
                    <li>
                        <Link href="/informations-personnelles" className="hover:text-blue-700">
                            Accéder à mon espace
                        </Link>
                    </li>
                </ul>

                {/* Logo connexion */}
                <div className="flex items-center space-x-2">
                    <Link href="/connexion" className="flex items-center text-blue-900 hover:text-blue-700">
                        <img src="/power-icon.svg" alt="Se connecter" className="h-5 w-5" />
                        <span className="ml-1">Se connecter</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
