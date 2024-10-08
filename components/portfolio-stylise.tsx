'use client'

import React from 'react';

const PortfolioStylise: React.FC = () => {
  const projets = [
    "Création de table donnée produits",
    "Ciblage et catégorisation client",
    "Automatisation de reporting",
    "Scraping de plus de 2000 produits",
    "Elaboration DashBoard PowerBI"
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Portfolio de MAIROT Hugo</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cadre d'informations à gauche */}
        <div className="md:w-1/3 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">À propos de moi</h2>
          <ul className="space-y-2">
            <li>24 ans</li>
            <li>Data analyste</li>
            <li>Python - PowerBI - SQL/NoSQL</li>
            <li>GSA Healthcare</li>
            <li>MSC Analytics for Business</li>
          </ul>
        </div>

        {/* Projets à droite */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projets.map((projet, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-blue-50">
              <h3 className="text-lg font-semibold mb-2">Projet {index + 1}</h3>
              <p>{projet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioStylise;