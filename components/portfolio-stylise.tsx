'use client'

import React from 'react';

const PortfolioStylise: React.FC = () => {
  const projets = [
    { titre: "Création de table donnée produits", description: "Développement d'une base de données structurée pour les produits." },
    { titre: "Ciblage et catégorisation client", description: "Mise en place d'un système de segmentation client avancé." },
    { titre: "Automatisation de reporting", description: "Création de scripts pour générer des rapports automatiques." },
    { titre: "Scraping de plus de 2000 produits", description: "Extraction de données à grande échelle pour analyse de marché." },
    { titre: "Elaboration DashBoard PowerBI", description: "Conception de tableaux de bord interactifs pour la visualisation des données." }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-100 to-green-200 p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-green-800">Portfolio de MAIROT Hugo</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cadre d'informations à gauche */}
        <div className="md:w-1/3 bg-green-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">À propos de moi</h2>
          <ul className="space-y-3 text-green-600">
            <li className="flex items-center"><span className="mr-2">🎂</span>25 ans</li>
            <li className="flex items-center"><span className="mr-2">💼</span>Data analyste</li>
            <li className="flex items-center"><span className="mr-2">💻</span>Python - PowerBI - SQL/NoSQL</li>
            <li className="flex items-center"><span className="mr-2">🏢</span>GSA Healthcare</li>
            <li className="flex items-center"><span className="mr-2">🎓</span>MSC Analytics for Business</li>
          </ul>
        </div>

        {/* Projets à droite */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projets.map((projet, index) => (
            <div key={index} className="bg-green-200 rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-green-300">
              <h3 className="text-lg font-semibold mb-2 text-green-700">Projet {index + 1}</h3>
              <p className="font-medium text-green-600">{projet.titre}</p>
              <p className="text-sm text-green-500 mt-2">{projet.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioStylise;
