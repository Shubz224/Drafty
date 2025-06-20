import { useState } from 'react';
import { ArrowLeft, Palette, ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ArtGallery = () => {
   const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Art pieces with your actual images
const artPieces = [
  {
    id: 1,
    title: "Mechanized Muse",
    description: "A pencil sketch blending human expression with mechanical intricacies, exploring the harmony of organic and artificial forms.",
    image: "/Resources/1.jpeg",
    category: "Sketches"
  },
  {
    id: 2,
    title: "Fragmented Reality",
    description: "A charcoal portrait study using broken and textured segments to depict emotional depth and layered identity.",
    image: "/Resources/2.jpeg",
    category: "Portraits"
  },
  {
    id: 3,
    title: "Veins of Nature",
    description: "Detailed linework mimicking organic structures, this piece captures the geometric symmetry found in natural elements.",
    image: "/Resources/3.jpeg",
    category: "Nature"
  },
  {
    id: 4,
    title: "Mechanical Geometry",
    description: "A fusion of machinery and abstract geometry, rendered in precise graphite lines, emphasizing symmetry and imagination.",
    image: "/Resources/4.jpeg",
    category: "Abstract"
  },
  {
    id: 5,
    title: "Noir Reflection",
    description: "A stylized black-and-white ink illustration portraying urban solitude and cinematic mood with stark contrast.",
    image: "/Resources/5.jpeg",
    category: "Urban"
  },
  {
    id: 6,
    title: "Shaded Persona",
    description: "An expressive character sketch capturing subtle emotion and depth through soft shading and sharp contour.",
    image: "/Resources/6.jpeg",
    category: "Characters"
  }
];


  const handleImageError = (pieceId) => {
    setImageErrors(prev => ({ ...prev, [pieceId]: true }));
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/85 border-b border-white/40 shadow-lg shadow-black/10">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </button>
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-lg">Art Gallery</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 md:px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Sketches & Drawings
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of my artistic explorations through pencil, charcoal, and ink - 
              where creativity meets technical precision.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 md:py-12 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {artPieces.map((piece, index) => (
                <div
                  key={piece.id}
                  className="cursor-pointer group"
                  onClick={() => setSelectedImage(piece.image)}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105 transform border border-white/20">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden relative">
                      {!imageErrors[piece.id] ? (
                        <img 
                          src={piece.image} 
                          alt={piece.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={() => handleImageError(piece.id)}
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-gray-400">
                          <ImageIcon className="w-12 h-12 md:w-16 md:h-16 mb-2" />
                          <span className="text-xs text-center px-2">
                            Image not found<br />
                            {piece.image}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {piece.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2 group-hover:text-gray-900">
                        {piece.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {piece.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upload Instructions */}
        <section className="py-8 md:py-12 px-4 md:px-6 bg-gray-50/30">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20">
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Selected artwork" 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;