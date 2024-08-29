import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-100 py-4 shadow-md fixed bottom-0 w-full">
            <div className="container mx-auto flex justify-between border-b border-gray-400">
                <p>HÔTEL DE VILLE DE LILLE</p>
                <div className="flex">
                    <p>social icône</p>
                    <p>social icône</p>
                    <p>social icône</p>
                </div>
            </div>
            <div className="container mx-auto flex justify-between">
                <div>
                    Place Augustin Laurent <br />
                    CS 30667 <br />
                    59033 Lille Cedex <br />
                    <a href="#">Nous contacter</a>
                </div>
                <div className="flex flex-col text-center">
                    <a className=" underline" href="#">Accueil Principal</a>
                    <a className=" underline" href="#">CGU</a>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;
