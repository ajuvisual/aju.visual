import React from "react";

const packages = [
  {
    name: "Básico",
    description: [
      "3 posts por semana",
      "Resposta de mensagens no chat da rede social"
    ],
  },
  {
    name: "Intermediário",
    description: [
      "Divulgação com tráfego pago",
      "4 posts por semana",
      "1 Reels",
      "Resposta de clientes nas redes sociais"
    ],
  },
  {
    name: "Premium",
    description: [
      "Estratégias de crescimento da marca",
      "Divulgação com tráfego pago",
      "5 posts por semana",
      "2 Reels"
    ],
  },
];

const whatsappLink = (pacote) =>
  `https://wa.me/5586994650771?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20pacote%20${encodeURIComponent(
    pacote
  )}%20de%20social%20media!`;

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-6 text-center bg-gradient-to-r from-pink-400 to-purple-500 text-white">
        <h1 className="text-4xl font-bold mb-2">Aju Visual</h1>
        <p className="text-lg">Transformando sua presença digital com estilo</p>
      </header>

      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Nossos Pacotes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-pink-600">{pkg.name}</h3>
              <ul className="mb-4 space-y-2">
                {pkg.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl"
              >
                Fale comigo no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Aju Visual. Todos os direitos reservados.
      </footer>
    </div>
  );
}
