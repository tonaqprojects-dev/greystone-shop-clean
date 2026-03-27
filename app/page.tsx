const WHATSAPP_NUMBER = "263776706614";

const products = [
  {
    name: "Dark Turquoise Hoodie",
    price: "USD $35",
    image: "/images/hoodie.jpg",
    badge: "Founders Edition",
    message:
      "Hello Greystone College,%0A%0AI would like to register interest in the Dark Turquoise Hoodie.%0A%0AName:%0ASize:%0AQuantity:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch.",
    details:
      "Available sizes: S, M, L, XL • Available colours: Dark Turquoise / Sand-Gold",
  },
  {
    name: "Sand/Gold Hoodie",
    price: "USD $35",
    image: "/images/hoodie2.jpg",
    badge: "Premium",
    message:
      "Hello Greystone College,%0A%0AI would like to register interest in the Sand/Gold Hoodie.%0A%0AName:%0ASize:%0AQuantity:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch.",
    details:
      "Available sizes: S, M, L, XL • Available colours: Dark Turquoise / Sand-Gold",
  },
  {
    name: "Backpack",
    price: "USD $25",
    image: "/images/backpack.jpg",
    badge: "Student Essential",
    message:
      "Hello Greystone College,%0A%0AI would like to register interest in the Backpack.%0A%0AName:%0AQuantity:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch.",
    details:
      "Official Greystone College merchandise for everyday identity and pride.",
  },
  {
    name: "Cap",
    price: "USD $15",
    image: "/images/cap.jpg",
    badge: "Founding Series",
    message:
      "Hello Greystone College,%0A%0AI would like to register interest in the Cap.%0A%0AName:%0AQuantity:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch.",
    details:
      "Official Greystone College merchandise for everyday identity and pride.",
  },
  {
    name: "Water Bottle",
    price: "USD $10",
    image: "/images/bottle.jpg",
    badge: "Daily Essential",
    message:
      "Hello Greystone College,%0A%0AI would like to register interest in the Water Bottle.%0A%0AName:%0AQuantity:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch.",
    details:
      "Official Greystone College merchandise for everyday identity and pride.",
  },
  {
    name: "Scarf",
    price: "USD $12",
    image: "/images/scarf.jpg",
    badge: "Founding Series",
    message:
      "Hello Greystone College,%0A%0AI would like to register interest in the Scarf.%0A%0AName:%0AQuantity:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch.",
    details:
      "Official Greystone College merchandise for everyday identity and pride.",
  },
  {
    name: "Stationery Set",
    price: "USD $20",
    image: "/images/stationary.jpg",
    badge: "School Pack",
    message:
      "Hello Greystone College,%0A%0AI would like to register interest in the Stationery Set.%0A%0AName:%0AQuantity:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch.",
    details:
      "Official Greystone College merchandise for everyday identity and pride.",
  },
];

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function ProductCard({
  name,
  price,
  image,
  badge,
  message,
  details,
}: {
  name: string;
  price: string;
  image: string;
  badge: string;
  message: string;
  details: string;
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden bg-slate-50">
        <div className="absolute left-4 top-4 z-10 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-slate-950 shadow">
          {badge}
        </div>
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold leading-6 text-[#0F4C5C]">{name}</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-[#0F4C5C]">
            {price}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Official Greystone College merchandise designed for identity, pride, and everyday use.
        </p>

        <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
          {details}
        </p>

        <p className="mt-3 text-sm font-medium leading-6 text-[#0F4C5C]">
          Launching with the opening of Greystone College — January 2027.
        </p>

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 block rounded-2xl bg-[#0F4C5C] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#123C49]"
        >
          Join Waiting List
        </a>

        <p className="mt-3 text-center text-xs text-slate-500">
          Secure interest registration via official Greystone College WhatsApp
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F4C5C]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="https://greystonecollege.co.zw"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-[#D4AF37] bg-white shadow-sm">
              <img
                src="/images/greystone-crest.png"
                alt="Greystone College Crest"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-base font-bold tracking-wide text-white md:text-lg">
                Greystone College Shop
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-200">
                Official Merchandise
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#preview"
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              Preview
            </a>
            <a
              href="#collection"
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              Collection
            </a>
            <a
              href="#waitlist"
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              Waiting List
            </a>
            <a
              href="#order"
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              How It Works
            </a>
            <a
              href={whatsappLink(
                "Hello Greystone College,%0A%0AI would like to join the merchandise waiting list.%0A%0AName:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch."
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-95"
            >
              Join Waiting List
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F4C5C] via-[#123C49] to-slate-950">
        <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Founding Collection Preview
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Wear the Identity. Live the Standard.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              Premium Greystone College apparel, accessories, and official essentials crafted in our signature dark turquoise and sand-gold identity.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              Designed for students, families, and supporters who represent excellence beyond the classroom.
            </p>

            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#D4AF37] md:text-lg">
              Launching with the opening of Greystone College — January 2027.
            </p>

            <div className="mt-6 space-y-2 text-sm font-medium text-slate-100">
              <p>✔ Official Greystone College merchandise</p>
              <p>✔ Designed with our authentic crest and identity</p>
              <p>✔ Available now as an early access waiting list</p>
              <p>✔ For students, parents, alumni, and early supporters</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
              >
                View Collection
              </a>
              <a
                href={whatsappLink(
                  "Hello Greystone College,%0A%0AI would like to join the merchandise waiting list.%0A%0AName:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch."
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F4C5C]"
              >
                Join Waiting List
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-200">
              Trusted by the growing Greystone College community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <img
                src="/images/hoodie.jpg"
                alt="Greystone hoodie"
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <img
                src="/images/backpack.jpg"
                alt="Greystone backpack"
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="preview" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-10">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Founding Collection Preview
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-[#0F4C5C] md:text-4xl">
            The official merchandise identity of Greystone College
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600 md:text-base">
            The Greystone College Shop introduces our official merchandise ahead of the school’s opening in January 2027. This collection represents the identity, culture, and standard that will define Greystone College from day one.
          </p>
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Founding Collection
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#0F4C5C] md:text-4xl">
              Preview the Greystone essentials
            </h2>
          </div>
          <a
            href={whatsappLink(
              "Hello Greystone College,%0A%0AI need help with the merchandise waiting list.%0A%0APlease keep me updated for the January 2027 launch."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-[#0F4C5C] transition hover:border-[#0F4C5C]"
          >
            Need help?
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section id="waitlist" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Early Access Registration
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F4C5C] md:text-4xl">
            Join the waiting list
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Be among the first to access official Greystone College merchandise when orders open. Register your interest to get priority access, receive launch updates, and be part of the founding Greystone community.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink(
                "Hello Greystone College,%0A%0AI would like to join the merchandise waiting list.%0A%0AName:%0APhone Number:%0AInterested Items:%0A%0APlease keep me updated for the January 2027 launch."
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#0F4C5C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123C49]"
            >
              Register Interest on WhatsApp
            </a>
            <a
              href="mailto:info@greystonecollege.co.zw?subject=Greystone%20Merchandise%20Waiting%20List"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0F4C5C] transition hover:border-[#0F4C5C]"
            >
              Register by Email
            </a>
          </div>
        </div>
      </section>

      <section id="order" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F4C5C] md:text-4xl">
            Simple registration process
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold text-[#D4AF37]">Step 1</p>
              <h3 className="mt-2 text-lg font-bold text-[#0F4C5C]">Choose your item</h3>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold text-[#D4AF37]">Step 2</p>
              <h3 className="mt-2 text-lg font-bold text-[#0F4C5C]">Click “Join Waiting List”</h3>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold text-[#D4AF37]">Step 3</p>
              <h3 className="mt-2 text-lg font-bold text-[#0F4C5C]">Confirm size and quantity</h3>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold text-[#D4AF37]">Step 4</p>
              <h3 className="mt-2 text-lg font-bold text-[#0F4C5C]">Receive launch and ordering updates</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-3 md:px-8">
          <div className="rounded-3xl bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-[#0F4C5C]">Official Branding</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Every item reflects the Greystone College identity with our official crest and signature colours.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-[#0F4C5C]">Pre-Launch Access</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Join early and be part of the founding collection before the official school opening in January 2027.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-[#0F4C5C]">Premium Presentation</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Clean design, consistent layout, and stronger visual hierarchy give the shop a refined professional feel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-[#0F4C5C] to-[#123C49] px-8 py-10 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#D4AF37]">
            Greystone Standard
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Greystone College is more than a school — it is a standard.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            Official merchandise of a rising centre of academic excellence in Zimbabwe.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Bulk Orders & Partnerships
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F4C5C] md:text-4xl">
            Built for future scale
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            We will offer bulk ordering options for schools, clubs, organisations, and events. For partnership and early interest enquiries, contact us directly via WhatsApp or email.
          </p>
        </div>
      </section>

      <footer className="bg-[#0F4C5C] px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">Greystone College Shop</p>
            <p className="mt-1 text-sm text-slate-200">Achieving Excellence Together</p>
            <p className="mt-3 text-sm text-slate-200">
              © Greystone College. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://greystonecollege.co.zw"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F4C5C]"
            >
              Main Website
            </a>
            <a
              href={whatsappLink(
                "Hello Greystone College,%0A%0AI would like to join the merchandise waiting list.%0A%0AName:%0APhone Number:%0A%0APlease keep me updated for the January 2027 launch."
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
            >
              Join Waiting List
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
