const WHATSAPP_NUMBER = "263776706614";
const SHOP_EMAIL = "info@greystonecollege.co.zw";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      <header className="p-6 border-b text-center">
        <h1 className="text-2xl font-bold text-sky-900">
          Greystone College Shop
        </h1>
        <p className="text-sm text-gray-500">
          Official Merchandise
        </p>
      </header>

      <main className="p-6 grid md:grid-cols-3 gap-6">

        <div className="border p-4 rounded-lg">
          <img src="/images/hoodie.jpg" />
          <h2 className="font-bold mt-2">Hoodie</h2>
          <p>$30</p>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/backpack.jpg" />
          <h2 className="font-bold mt-2">Backpack</h2>
          <p>$25</p>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/cap.jpg" />
          <h2 className="font-bold mt-2">Cap</h2>
          <p>$10</p>
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
