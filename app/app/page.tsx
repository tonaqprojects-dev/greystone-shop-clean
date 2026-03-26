const featuredProducts = [ { name: "Greystone Hoodie", price: "$30", description: "Premium Greystone hoodie designed for comfort, warmth, and identity.", image: "/images/hoodie.jpg", tag: "Best Seller", }, { name: "Greystone Backpack", price: "$25", description: "Durable and stylish, built for everyday academic use.", image: "/images/backpack.jpg", tag: "Student Essential", }, { name: "Greystone Cap", price: "$10", description: "Simple, clean, and proudly Greystone.", image: "/images/cap.jpg", tag: "Classic", }, { name: "Greystone Bottle", price: "$12", description: "Stay hydrated. Stay sharp.", image: "/images/bottle.jpg", tag: "Daily Use", }, ];

const bundles = [ { name: "Starter Pack", price: "$30", items: "Backpack + Notebook + Pen", description: "Perfect for everyday school use.", }, { name: "Premium Student Pack", price: "$45", items: "Hoodie + Cap + Bottle", description: "Maximum identity, best value.", featured: true, }, ];

const lifestyleImages = [ "/images/lifestyle-1.jpg", "/images/lifestyle-2.jpg", "/images/lifestyle-3.jpg", ];

const WHATSAPP_NUMBER = "263776706614"; const MAIN_SITE_URL = "https://greystonecollege.co.zw"; const SHOP_EMAIL = "info@greystonecollege.co.zw";

function CrestMark() { return ( <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-amber-500 bg-white shadow-sm"> <img
src="/images/greystone-crest.png"
alt="Greystone College Crest"
className="h-full w-full object-cover"
/> </div> ); }

function ProductCard({ name, price, description, image, tag, }: { name: string; price: string; description: string; image: string; tag: string; }) { return ( <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"> <div className="relative"> <img src={image} alt={name} className="h-72 w-full object-cover" /> <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-slate-950"> {tag} </span> </div> <div className="p-6"> <div className="flex items-start justify-between gap-4"> <h3 className="text-xl font-semibold text-sky-950">{name}</h3> <span className="text-lg font-bold text-amber-600">{price}</span> </div> <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p> <a href={https://wa.me/${WHATSAPP_NUMBER}} className="mt-5 inline-flex rounded-full bg-sky-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800" > Order Now </a> </div> </div> ); }

export default function GreystoneShopPage() { return ( <div className="min-h-screen bg-white text-slate-900"> <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur"> <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"> <div className="flex items-center gap-3"> <CrestMark /> <div> <p className="text-lg font-semibold tracking-wide text-sky-950">Greystone College Shop</p> <p className="text-sm text-slate-500">Official Merchandise</p> </div> </div>

<nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
        <a href="#featured" className="hover:text-sky-900">Featured</a>
        <a href="#bundles" className="hover:text-sky-900">Bundles</a>
        <a href="#identity" className="hover:text-sky-900">Identity</a>
        <a href="#order" className="hover:text-sky-900">Order</a>
        <a
          href={MAIN_SITE_URL}
          className="rounded-full border border-slate-300 px-4 py-2 hover:border-sky-900 hover:text-sky-900"
        >
          Main Website
        </a>
      </nav>
    </div>
  </header>

  <section className="relative overflow-hidden bg-sky-950">
    <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-sky-900 to-slate-950" />
    <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
    <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

    <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div className="flex flex-col justify-center">
        <div className="mb-6 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
          Official Merchandise • Identity • Excellence
        </div>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Greystone College Shop
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
          Discover premium Greystone College merchandise designed for pride, performance, and everyday use.
        </p>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
          Wear the identity. Represent the standard.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#featured"
            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
          >
            Shop Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-sky-950"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl backdrop-blur">
          <img
            src={featuredProducts[0].image}
            alt={featuredProducts[0].name}
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl backdrop-blur sm:mt-16">
          <img
            src={featuredProducts[1].image}
            alt={featuredProducts[1].name}
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  </section>

  <section id="featured" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="mb-12 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Featured Collection</p>
      <h2 className="mt-3 text-3xl font-bold text-sky-950 md:text-4xl">Top picks from the Greystone collection</h2>
      <p className="mt-4 text-lg text-slate-600">
        Curated essentials designed for student pride, daily use, and a premium Greystone identity.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {featuredProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  </section>

  <section id="bundles" className="bg-slate-50 py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Best Value Bundles</p>
        <h2 className="mt-3 text-3xl font-bold text-sky-950 md:text-4xl">Designed to give more value</h2>
        <p className="mt-4 text-lg text-slate-600">
          Bundle your essentials for a stronger identity and better value.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {bundles.map((bundle) => (
          <div
            key={bundle.name}
            className={`rounded-3xl border p-8 shadow-sm ${
              bundle.featured
                ? "border-amber-400 bg-sky-950 text-white"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            {bundle.featured && (
              <span className="mb-4 inline-flex rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-slate-950">
                Most Popular
              </span>
            )}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">{bundle.name}</h3>
                <p className={`mt-2 text-sm ${bundle.featured ? "text-slate-200" : "text-slate-500"}`}>
                  {bundle.items}
                </p>
              </div>
              <span className={`text-2xl font-bold ${bundle.featured ? "text-amber-400" : "text-amber-600"}`}>
                {bundle.price}
              </span>
            </div>
            <p className={`mt-4 text-base leading-7 ${bundle.featured ? "text-slate-100" : "text-slate-600"}`}>
              {bundle.description}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className={`mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                bundle.featured
                  ? "bg-amber-500 text-slate-950 hover:scale-[1.02]"
                  : "bg-sky-900 text-white hover:bg-sky-800"
              }`}
            >
              Order Bundle
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="identity" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">More Than Merchandise</p>
        <h2 className="mt-3 text-3xl font-bold text-sky-950 md:text-4xl">The Greystone identity</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Every item represents the Greystone College identity — excellence, discipline, and pride.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-600">
          This is more than what you wear. It is what you represent. Designed for students, families, and supporters who want to carry the Greystone standard into everyday life.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-sky-950">Premium Branding</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Built around Greystone colours, crest, and a premium student identity.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-sky-950">Everyday Use</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Practical products designed for school life, events, and daily pride.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-3xl sm:col-span-2">
          <img src={lifestyleImages[0]} alt="Greystone lifestyle" className="h-72 w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img src={lifestyleImages[1]} alt="Students lifestyle" className="h-56 w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img src={lifestyleImages[2]} alt="Greystone campus culture" className="h-56 w-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  <section id="order" className="bg-sky-950 py-20 text-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Order Now</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Fast, simple ordering through WhatsApp</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            To place your order, simply contact us via WhatsApp. Our team will confirm your item, size, colour, payment method, and collection or delivery details.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Order via WhatsApp
            </a>
            <a
              href={`mailto:${SHOP_EMAIL}`}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-sky-950"
            >
              Email Us
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Delivery & Collection</h3>
          <div className="mt-6 space-y-5 text-sm leading-6 text-slate-200">
            <div>
              <p className="font-semibold text-white">Collection</p>
              <p>Greystone College campus collection point</p>
            </div>
            <div>
              <p className="font-semibold text-white">Delivery</p>
              <p>Delivery available on request. Fees may apply depending on location.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Processing Time</p>
              <p>Orders are typically processed within 24–48 hours.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Support</p>
              <p>Fast response • Secure ordering • Limited stock on selected items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer className="border-t border-slate-200 bg-white">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <p className="text-base font-semibold text-sky-950">Greystone College Shop</p>
        <p className="mt-1">Achieving Excellence Together</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a href={MAIN_SITE_URL} className="hover:text-sky-900">Main Website</a>
        <a href={`mailto:${SHOP_EMAIL}`} className="hover:text-sky-900">{SHOP_EMAIL}</a>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-sky-900">WhatsApp</a>
      </div>
    </div>
  </footer>
</div>

); }


