const WHATSAPP_NUMBER = "263776706614";
const MAIN_SITE_URL = "https://greystonecollege.co.zw";
const SHOP_EMAIL = "info@greystonecollege.co.zw";

const products = [
  {
    name: "Greystone Hoodie – Dark Turquoise Edition",
    price: "$30",
    image: "/images/hoodie2.jpg",
    alt: "Greystone dark turquoise hoodie",
    tag: "Best Seller",
    message: "Hi, I want the Greystone Hoodie – Dark Turquoise Edition.",
  },
  {
    name: "Greystone Hoodie – Sand/Gold Edition",
    price: "$30",
    image: "/images/hoodie.jpg",
    alt: "Greystone sand gold hoodie",
    tag: "Premium",
    message: "Hi, I want the Greystone Hoodie – Sand/Gold Edition.",
  },
  {
    name: "Greystone Premium Backpack",
    price: "$25",
    image: "/images/backpack.jpg",
    alt: "Greystone premium backpack",
    tag: "Student Essential",
    message: "Hi, I want the Greystone Premium Backpack.",
  },
  {
    name: "Greystone Cap",
    price: "$10",
    image: "/images/cap.jpg",
    alt: "Greystone cap",
    tag: "Classic",
    message: "Hi, I want the Greystone Cap.",
  },
  {
    name: "Greystone Water Bottle",
    price: "$12",
    image: "/images/bottle.jpg",
    alt: "Greystone water bottle",
    tag: "Daily Use",
    message: "Hi, I want the Greystone Water Bottle.",
  },
  {
    name: "Greystone Scarf",
    price: "$15",
    image: "/images/scarf.jpg",
    alt: "Greystone scarf",
    tag: "Seasonal",
    message: "Hi, I want the Greystone Scarf.",
  },
  {
    name: "Greystone Stationery Set",
    price: "$20",
    image: "/images/stationary.jpg",
    alt: "Greystone stationery set",
    tag: "Gift Pick",
    message: "Hi, I want the Greystone Stationery Set.",
  },
];

const bundles = [
  {
    name: "Starter Pack",
    price: "$30",
    items: "Backpack + Notebook + Pen",
    description: "A practical everyday starter bundle for Greystone students.",
    highlight: false,
    message: "Hi, I want the Greystone Starter Pack.",
  },
  {
    name: "Premium Student Pack",
    price: "$45",
    items: "Hoodie + Cap + Bottle",
    description: "The best-value Greystone lifestyle bundle.",
    highlight: true,
    message: "Hi, I want the Greystone Premium Student Pack.",
  },
];

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="border-b border-slate-100 bg-slate-50 p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-slate-950">
            {product.tag}
          </span>
          <span className="text-lg font-bold text-[#0F4C5C]">{product.price}</span>
        </div>

        <div className="flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-white p-3">
          <img
            src={product.image}
            alt={product.alt}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="p-5">
        <h3 className="min-h-[56px] text-lg font-bold leading-6 text-[#0F4C5C]">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Official Greystone College merchandise designed for identity, pride, and everyday use.
        </p>

        <a
          href={whatsappLink(product.message)}
          className="mt-4 block rounded-xl bg-[#0F4C5C] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-95"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}

function BundleCard({ bundle }) {
  return (
    <div
      className={
        bundle.highlight
          ? "rounded-3xl border border-[#D4AF37] bg-[#0F4C5C] p-8 text-white shadow-lg"
          : "rounded-3xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm"
      }
    >
      {bundle.highlight && (
        <span className="mb-4 inline-flex rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-slate-950">
          Most Popular
        </span>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">{bundle.name}</h3>
          <p className={bundle.highlight ? "mt-2 text-sm text-slate-200" : "mt-2 text-sm text-slate-500"}>
            {bundle.items}
          </p>
        </div>
        <span className={bundle.highlight ? "text-2xl font-bold text-[#D4AF37]" : "text-2xl font-bold text-[#D4AF37]"}>
          {bundle.price}
        </span>
      </div>

      <p className={bundle.highlight ? "mt-4 text-base leading-7 text-slate-100" : "mt-4 text-base leading-7 text-slate-600"}>
        {bundle.description}
      </p>

      <a
        href={whatsappLink(bundle.message)}
        className={
          bundle.highlight
            ? "mt-6 inline-flex rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
            : "mt-6 inline-flex rounded-full bg-[#0F4C5C] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
        }
      >
        Order Bundle
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F8F6] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-[#D4AF37] bg-white shadow-sm">
              <img
                src="/images/greystone-crest.png"
                alt="Greystone College Crest"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-base font-bold tracking-wide text-[#0F4C5C] md:text-lg">
                Greystone College Shop
              </h1>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Official Merchandise
              </p>
            </div>
          </div>

          <a
            href={whatsappLink("Hi, I would like to order Greystone College merchandise.")}
            className="rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-95"
          >
            WhatsApp Order
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#0F4C5C] via-[#123C49] to-slate-950 px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Identity • Excellence • Pride
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Greystone College Shop
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              Official Greystone College merchandise styled in our signature dark turquoise and sand-gold palette, designed for students, families, and supporters who want to wear the standard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
              >
                Shop Collection
              </a>

              <a
                href={whatsappLink("Hi, I would like to order Greystone College merchandise.")}
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F4C5C]"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm md:px-10">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Official Greystone College Merchandise
          </p>

          <h3 className="mt-3 text-center text-3xl font-bold text-[#0F4C5C] md:text-4xl">
            Designed for Excellence • Built for Identity • Worn with Pride
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600 md:text-base">
            Every item in this collection reflects the Greystone College brand system, with a premium finish, corrected colours, and clean presentation aligned to the school’s official visual identity.
          </p>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Featured Collection
            </p>
            <h3 className="mt-2 text-3xl font-bold text-[#0F4C5C] md:text-4xl">
              Shop the Greystone range
            </h3>
          </div>

          <a
            href={whatsappLink("Hi, I need help ordering Greystone College merchandise.")}
            className="hidden rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-[#0F4C5C] transition hover:border-[#0F4C5C] md:inline-flex"
          >
            Need help ordering?
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Best Value Bundles
            </p>
            <h3 className="mt-2 text-3xl font-bold text-[#0F4C5C] md:text-4xl">
              Bundle and save
            </h3>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {bundles.map((bundle) => (
              <BundleCard key={bundle.name} bundle={bundle} />
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-3 md:px-8">
          <div className="rounded-3xl bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-[#0F4C5C]">Correct Brand Colours</h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Updated to reflect Greystone’s true dark turquoise and sand-gold colour system for a more premium and consistent visual identity.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-[#0F4C5C]">Simple Ordering</h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Each item links directly to WhatsApp, making ordering quick, familiar, and easy for students, parents, and supporters.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-[#0F4C5C]">Premium Presentation</h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Refined spacing, stronger product naming, and improved card styling give the shop a cleaner and more professional retail feel.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F4C5C] px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">Greystone College Shop</p>
            <p className="mt-1 text-sm text-slate-200">Achieving Excellence Together</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={MAIN_SITE_URL}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F4C5C]"
            >
              Main Website
            </a>

            <a
              href={`mailto:${SHOP_EMAIL}`}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F4C5C]"
            >
              Email
            </a>

            <a
              href={whatsappLink("Hi, I would like to order Greystone College merchandise.")}
              className="rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
            }
