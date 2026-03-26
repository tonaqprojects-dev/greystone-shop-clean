const WHATSAPP_NUMBER = "2637XXXXXXXX";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="p-6 border-b text-center">
        <img
          src="/images/greystone-crest.png"
          className="h-16 mx-auto mb-2"
          alt="Greystone College Crest"
        />
        <h1 className="text-2xl font-bold text-sky-900">
          Greystone College Shop
        </h1>
        <p className="text-sm text-gray-500">Official Merchandise</p>
      </header>

      <main className="p-6 grid md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg">
          <img src="/images/hoodie.jpg" alt="Hoodie Sand Gold" />
          <h2 className="font-bold mt-2">Hoodie (Sand/Gold)</h2>
          <p>$30</p>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/hoodie2.jpg" alt="Hoodie Dark Turquoise" />
          <h2 className="font-bold mt-2">Hoodie (Dark Turquoise)</h2>
          <p>$30</p>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/backpack.jpg" alt="Backpack" />
          <h2 className="font-bold mt-2">Backpack</h2>
          <p>$25</p>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/cap.jpg" alt="Cap" />
          <h2 className="font-bold mt-2">Cap</h2>
          <p>$10</p>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/bottle.jpg" alt="Bottle" />
          <h2 className="font-bold mt-2">Water Bottle</h2>
          <p>$12</p>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/scarf.jpg" alt="Scarf" />
          <h2 className="font-bold mt-2">Scarf</h2>
          <p>$15</p>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/stationary.jpg" alt="Stationery Set" />
          <h2 className="font-bold mt-2">Stationery Set</h2>
          <p>$20</p>
        </div>
      </main>

      <div className="text-center p-6">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="bg-amber-500 px-6 py-3 rounded-full font-bold"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
