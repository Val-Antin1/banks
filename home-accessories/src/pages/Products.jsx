import { useState } from "react"

export default function Products() {
  // Mock products data - Updated for lock & door solutions
  const allProducts = [
    {
      id: 1,
      name: "Face Recognition Smart Lock",
      price: 150000,
      image: "/face_lock.jpeg",
      category: "Smart Locks",
      description: "Advanced biometric door lock with face recognition and smart access control.",
      mainFeature: "Advanced biometric door lock with face recognition and smart access control.",
      keyFeatures: [
        "Face recognition + PIN + fingerprint + card + mechanical key",
        "Fast recognition speed (<1 second)",
        "Built-in camera with night vision",
        "Indoor display screen",
        "Mobile app support (Android & iOS)",
        "Anti-tamper alarm system"
      ],
      power: "Rechargeable / AA batteries with emergency USB power",
      compatibility: "Wooden & metal doors",
      bestFor: "Homes, apartments, offices, hotels",
      warranty: "1 year"
    },
    {
      id: 2,
      name: "Keypad Door Lock",
      price: 95000,
      image: "/keypad_lock.jpeg",
      category: "Digital Locks",
      description: "Digital door lock with secure keypad access.",
      mainFeature: "Digital door lock with secure keypad access.",
      keyFeatures: [
        "PIN code + card + fingerprint + mechanical key",
        "Supports multiple users",
        "Strong metal body",
        "Auto-lock function",
        "Low battery warning"
      ],
      power: "AA batteries",
      compatibility: "Wooden & metal doors",
      bestFor: "Homes, offices, rental properties",
      warranty: "1 year"
    },
    {
      id: 3,
      name: "Euro Cylinder Lock",
      price: 25000,
      image: "/euro_cyl.jpeg",
      category: "Lock Cylinders",
      description: "High-quality mechanical lock cylinder for standard doors.",
      mainFeature: "High-quality mechanical lock cylinder for standard doors.",
      keyFeatures: [
        "Strong metal construction",
        "Smooth key operation",
        "Anti-pick design",
        "Durable and long-lasting"
      ],
      sizeOptions: "60mm / 70mm / 80mm",
      keysIncluded: "3–5 keys",
      bestFor: "Wooden & metal doors",
      warranty: "6 months"
    },
    {
      id: 4,
      name: "Door Hinge",
      price: 15000,
      image: "/hinge.jpeg",
      category: "Door Hardware",
      description: "Heavy-duty metal hinge for secure door movement.",
      mainFeature: "Heavy-duty metal hinge for secure door movement.",
      keyFeatures: [
        "Strong and durable",
        "Rust-resistant coating",
        "Smooth opening and closing"
      ],
      material: "Stainless steel / iron",
      sizeOptions: "3 inch / 4 inch / 5 inch",
      bestFor: "Wooden and metal doors",
      package: "1 piece or pair"
    },
    {
      id: 5,
      name: "Pull Door Handle",
      price: 20000,
      image: "/pull_handle.jpeg",
      category: "Door Hardware",
      description: "Modern pull handle for stylish door operation.",
      mainFeature: "Modern pull handle for stylish door operation.",
      keyFeatures: [
        "Strong metal build",
        "Modern design",
        "Comfortable grip"
      ],
      material: "Aluminum / stainless steel",
      lengthOptions: "300mm / 400mm / 600mm",
      compatibility: "Wooden, glass, aluminum doors",
      included: "Screws & mounting brackets",
      bestFor: "Homes, offices, shops"
    },
    {
      id: 6,
      name: "Black Glass Pull Handle",
      price: 25000,
      image: "/black_glass_pull_handle.jpeg",
      category: "Door Hardware",
      description: "Elegant black glass pull handle for modern interiors.",
      mainFeature: "Elegant black glass pull handle for modern interiors.",
      keyFeatures: [
        "Premium glass construction",
        "Black finish",
        "Smooth operation",
        "Stylish design"
      ],
      material: "Glass with metal mounting",
      lengthOptions: "300mm / 400mm / 600mm",
      compatibility: "Glass, wooden, aluminum doors",
      included: "Mounting hardware",
      bestFor: "Modern homes, offices, showrooms"
    },
    {
      id: 7,
      name: "Stainless Steel Double Pull Handle",
      price: 35000,
      image: "/ss_double_pull_handle.jpeg",
      category: "Door Hardware",
      description: "Heavy-duty stainless steel double pull handle for commercial doors.",
      mainFeature: "Heavy-duty stainless steel double pull handle for commercial doors.",
      keyFeatures: [
        "Stainless steel construction",
        "Double pull design",
        "High durability",
        "Corrosion resistant"
      ],
      material: "Stainless steel",
      lengthOptions: "600mm / 800mm / 1000mm",
      compatibility: "Metal, wooden, glass doors",
      included: "Mounting brackets and screws",
      bestFor: "Commercial buildings, heavy doors"
    },
    {
      id: 8,
      name: "Euro Cylinder Lock with Thumb Turn",
      price: 30000,
      image: "/euro_cylinder_lock_thumb.jpeg",
      category: "Lock Cylinders",
      description: "Euro profile cylinder lock with convenient thumb turn mechanism.",
      mainFeature: "Euro profile cylinder lock with convenient thumb turn mechanism.",
      keyFeatures: [
        "Thumb turn operation",
        "Euro profile design",
        "Anti-pick protection",
        "Multiple key options"
      ],
      sizeOptions: "60mm / 70mm / 80mm",
      keysIncluded: "3–5 keys",
      bestFor: "Interior doors, bathrooms, bedrooms",
      warranty: "1 year"
    },
    {
      id: 9,
      name: "Brushed Glass Pull Handle",
      price: 28000,
      image: "/brushed_glass_pull_handle.jpeg",
      category: "Door Hardware",
      description: "Sophisticated brushed glass pull handle for elegant door styling.",
      mainFeature: "Sophisticated brushed glass pull handle for elegant door styling.",
      keyFeatures: [
        "Brushed glass finish",
        "Elegant appearance",
        "Smooth touch",
        "Durable mounting"
      ],
      material: "Glass with brushed finish",
      lengthOptions: "300mm / 400mm / 600mm",
      compatibility: "Glass, wooden doors",
      included: "Mounting hardware",
      bestFor: "Luxury homes, hotels, restaurants"
    },
    {
      id: 10,
      name: "Hydraulic Door Closer",
      price: 45000,
      image: "/hydraulic_door_closer.jpeg",
      category: "Door Hardware",
      description: "Reliable hydraulic door closer for automatic door closing.",
      mainFeature: "Reliable hydraulic door closer for automatic door closing.",
      keyFeatures: [
        "Hydraulic mechanism",
        "Adjustable closing speed",
        "Smooth operation",
        "Weather resistant"
      ],
      material: "Aluminum body with hydraulic components",
      compatibility: "Wooden and metal doors",
      included: "Mounting hardware and instructions",
      bestFor: "Commercial buildings, offices, public spaces",
      warranty: "2 years"
    },
    {
      id: 11,
      name: "Black Stainless Steel Pull Door Handle",
      price: 25000,
      image: "/handle.jpeg",
      category: "Door Hardware",
      description: "Modern pull handle with matte black finish for stylish and durable door operation.",
      mainFeature: "Modern pull handle with matte black finish for stylish and durable door operation.",
      keyFeatures: [
        "Premium stainless steel construction",
        "Elegant matte black finish",
        "Double-sided pull handle design",
        "Rust and corrosion resistant",
        "Smooth and comfortable grip",
        "Strong and long-lasting"
      ],
      material: "Stainless Steel",
      lengthOptions: "400mm / 600mm",
      compatibility: "Wooden, glass, aluminum doors",
      included: "Mounting screws & fixing accessories",
      bestFor: "Homes, offices, shops, commercial buildings",
      warranty: "6 months"
    },
    {
      id: 12,
      name: "Double Action Spring Door Hinge",
      price: 20000,
      image: "/black_glass_pull_handle1.jpeg",
      category: "Door Hardware",
      description: "Self-closing double action hinge allowing doors to swing both inward and outward.",
      mainFeature: "Self-closing double action hinge allowing doors to swing both inward and outward.",
      keyFeatures: [
        "Opens in both directions",
        "Automatic self-centering spring mechanism",
        "Heavy-duty stainless steel body",
        "Smooth and quiet operation",
        "Suitable for high-traffic areas"
      ],
      material: "Stainless Steel",
      finish: "Satin / Brushed Silver",
      doorWeightSupport: "Medium to heavy doors",
      compatibility: "Wooden and metal swing doors",
      bestFor: "Kitchens, restaurants, offices, commercial spaces",
      warranty: "6 months"
    },
    {
      id: 13,
      name: "Stainless Steel Mortise Door Lock Handle Set",
      price: 30000,
      image: "/hydraulic_door2.jpeg",
      category: "Lock Cylinders",
      description: "Secure mortise lock with integrated lever handle and key access.",
      mainFeature: "Secure mortise lock with integrated lever handle and key access.",
      keyFeatures: [
        "Strong stainless steel lever handle",
        "Durable mortise locking mechanism",
        "Smooth handle movement",
        "Key-operated locking system",
        "Modern polished chrome finish"
      ],
      lockType: "Mortise lock with key",
      material: "Stainless Steel + steel lock body",
      compatibility: "Wooden and metal doors",
      keysIncluded: "3 keys",
      bestFor: "Homes, apartments, offices, hotels",
      warranty: "1 year"
    },
    {
      id: 14,
      name: "Adjustable Hydraulic Door Closer",
      price: 45000,
      image: "/euro.jpeg",
      category: "Door Hardware",
      description: "Automatic hydraulic door closer for smooth and controlled door closing.",
      mainFeature: "Automatic hydraulic door closer for smooth and controlled door closing.",
      keyFeatures: [
        "Hydraulic closing mechanism",
        "Adjustable closing and latching speed",
        "Prevents door slamming",
        "Quiet and smooth operation",
        "Strong aluminum alloy body"
      ],
      material: "Aluminum Alloy",
      finish: "Silver",
      doorWeightCapacity: "40–80 kg",
      compatibility: "Wooden, metal, fire-rated doors",
      bestFor: "Offices, commercial buildings, residential doors",
      warranty: "1 year"
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = ["All", "Smart Locks", "Digital Locks", "Lock Cylinders", "Door Hardware"]

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="w-full bg-black bg-gradient-to-b from-black via-slate-950 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 border border-amber-500/30 rounded-full">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Security Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Professional locks and door hardware for residential and commercial security
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 pl-14 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/30"
                    : "bg-slate-900/50 text-gray-300 border border-slate-800 hover:border-amber-500/50 hover:text-amber-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Counter */}
          <div className="text-center text-gray-400 text-sm">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full text-black text-xs font-bold shadow-lg">
                    {product.category}
                  </div>
                  
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                      {product.price.toLocaleString()} RWF
                    </span>
                    <button className="w-11 h-11 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 flex items-center justify-center hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 group/btn">
                      <svg className="w-5 h-5 text-black group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-6 border border-slate-800">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        {filteredProducts.length > 0 && (
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-slate-900 to-black rounded-2xl p-12 border border-slate-800/50">
              <h3 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us for specialized locks, master key systems, or commercial security installations
              </p>
              <a
                href="https://wa.me/250798738972"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-800">
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full text-black text-xs font-bold">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProduct.name}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProduct.mainFeature}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Key Features:</h3>
                  <ul className="text-gray-300 space-y-1">
                    {selectedProduct.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {selectedProduct.power && (
                    <div>
                      <span className="text-amber-400 font-semibold">Power:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.power}</span>
                    </div>
                  )}
                  {selectedProduct.compatibility && (
                    <div>
                      <span className="text-amber-400 font-semibold">Compatibility:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.compatibility}</span>
                    </div>
                  )}
                  {selectedProduct.bestFor && (
                    <div>
                      <span className="text-amber-400 font-semibold">Best For:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.bestFor}</span>
                    </div>
                  )}
                  {selectedProduct.warranty && (
                    <div>
                      <span className="text-amber-400 font-semibold">Warranty:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.warranty}</span>
                    </div>
                  )}
                  {selectedProduct.material && (
                    <div>
                      <span className="text-amber-400 font-semibold">Material:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.material}</span>
                    </div>
                  )}
                  {selectedProduct.sizeOptions && (
                    <div>
                      <span className="text-amber-400 font-semibold">Size Options:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.sizeOptions}</span>
                    </div>
                  )}
                  {selectedProduct.lengthOptions && (
                    <div>
                      <span className="text-amber-400 font-semibold">Length Options:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.lengthOptions}</span>
                    </div>
                  )}
                  {selectedProduct.keysIncluded && (
                    <div>
                      <span className="text-amber-400 font-semibold">Keys Included:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.keysIncluded}</span>
                    </div>
                  )}
                  {selectedProduct.included && (
                    <div>
                      <span className="text-amber-400 font-semibold">Included:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.included}</span>
                    </div>
                  )}
                  {selectedProduct.package && (
                    <div>
                      <span className="text-amber-400 font-semibold">Package:</span>
                      <span className="text-gray-300 ml-2">{selectedProduct.package}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                    {selectedProduct.price.toLocaleString()} RWF
                  </span>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://wa.me/250798738972"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 text-center"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
