import React from 'react';

const mockNFTs = [
  {
    id: 1,
    name: 'Crypto Monkey #1',
    image: '/nfts/monkey1.png',
    price: '0.35 ETH',
  },
  {
    id: 2,
    name: 'Alien Ape #92',
    image: '/nfts/ape92.png',
    price: '0.65 ETH',
  },
  {
    id: 3,
    name: 'Pixel Cat #7',
    image: '/nfts/cat7.png',
    price: '0.20 ETH',
  },
  {
    id: 4,
    name: 'Cyber Dog #55',
    image: '/nfts/dog55.png',
    price: '1.15 ETH',
  },
];

const Explore: React.FC = () => {
  return (
    <section className="px-6 py-12 bg-[#0A0A23] min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">Explore NFTs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mockNFTs.map((nft) => (
            <div
              key={nft.id}
              className="bg-[#1C1C2E] rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
            >
              <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{nft.name}</h2>
                <p className="text-purple-400 font-medium">{nft.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
