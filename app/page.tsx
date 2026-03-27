const WHATSAPP_NUMBER = "263776706614";

const products = [
  {
    name: "Hoodie (Dark Turquoise)",
    price: 30,
    image: "/images/hoodie.jpg",
  },
  {
    name: "Hoodie (Sand/Gold)",
    price: 30,
    image: "/images/hoodie2.jpg",
  },
  {
    name: "Backpack",
    price: 25,
    image: "/images/backpack.jpg",
  },
  {
    name: "Cap",
    price: 15,
    image: "/images/cap.jpg",
  },
  {
    name: "Water Bottle",
    price: 10,
    image: "/images/bottle.jpg",
  },
  {
    name: "Scarf",
    price: 12,
    image: "/images/scarf.jpg",
  },
  {
    name: "Stationery Set",
    price: 20,
    image: "/images/stationary.jpg",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="text-center py-6 border-b bg-white">
        <img
          src="/images/greystone-crest.png"
          alt="Greystone Crest"
          className="h-16 mx-auto mb-2"
        />
        <h1 className="text-2xl font-bold text-teal-800">
          Greystone College Shop
        </h1>
        <p className="text-sm text-gray-500">Official Merchandise</p>
      </header>

      {/* PRODUCTS */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => {
          const message = encodeURIComponent(
            `Hello, I would like to order: ${product.name}`
          );
          const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover rounded-lg"
              />

              <h2 className="font-semibold mt-3 text-lg">
                {product.name}
              </h2>

              <p className="text-teal-700 font-bold mb-3">
                ${product.price}
              </p>

              <a
                href={link}
                target="_blank"
                className="block text-center bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition"
              >
                Order on WhatsApp
              </a>
            </div>
          );
        })}
      </main>
    </div>
  );
            }
