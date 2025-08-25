"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sofa, Armchair, Bed, Lamp, Menu, Truck, ShieldCheck, Leaf,
  Star, Search, ShoppingCart, Heart, Filter, Sparkles, Phone, Mail, MapPin, ChevronRight
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Demo Data
const PRODUCTS = [
  { id: "p1", name: "Royal Linen Sofa", price: 820, rating: 4.7, tag: "Bestseller", category: "Sofas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop" },
  { id: "p2", name: "Luxury Lounge Chair", price: 240, rating: 4.6, tag: "New", category: "Chairs",
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1200&auto=format&fit=crop" },
  { id: "p3", name: "Designer Floor Lamp", price: 120, rating: 4.4, tag: "Eco", category: "Lighting",
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop" },
  { id: "p4", name: "Premium Oak Bed", price: 1090, rating: 4.8, tag: "Premium", category: "Beds",
    image: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop" },
  { id: "p5", name: "Modern Coffee Table", price: 180, rating: 4.5, tag: "Limited", category: "Tables",
    image: "https://images.unsplash.com/photo-1598300183876-1b9c06c1a595?q=80&w=1200&auto=format&fit=crop" },
  { id: "p6", name: "Cloud Luxury Sectional", price: 1490, rating: 4.9, tag: "Luxury", category: "Sofas",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop" },
];

const CATEGORIES = [
  { name: "Sofas", icon: Sofa },
  { name: "Chairs", icon: Armchair },
  { name: "Beds", icon: Bed },
  { name: "Lighting", icon: Lamp },
  { name: "Tables", icon: Armchair },
];

const priceFmt = (n: number) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);

// Components
function Navbar({ onNav }: { onNav: (href: string) => void }) {
  return (
    <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
            <div className="h-9 w-9 grid place-items-center rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-400 shadow-lg">
              <Sofa className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Al Hoourr Furniture
            </span>
            <Badge className="ml-2 hidden sm:inline-flex bg-black/10 text-black">Premium Since 2011</Badge>
          </motion.div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {[["Home", "#home"], ["Shop", "#shop"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
              <motion.button key={label} onClick={() => onNav(href)} whileHover={{ scale: 1.08 }}
                className="hover:text-rose-600 transition-colors">
                {label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-xl"><Search className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon" className="rounded-xl"><Heart className="h-5 w-5" /></Button>
            <Button size="sm" className="rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white">
              <ShoppingCart className="mr-2 h-4 w-4" /> Cart
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden rounded-xl"><Menu className="h-5 w-5" /></Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero({ onNav }: { onNav: (href: string) => void }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_-10%,rgba(251,191,36,0.25),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Luxury Living with <span className="bg-gradient-to-tr from-amber-500 to-rose-600 bg-clip-text text-transparent">Al Hoourr Furniture</span>
            </h1>
            <p className="mt-6 text-lg text-black/70 leading-relaxed max-w-prose">
              Handcrafted with elegance, built with passion. Experience premium comfort and timeless style with our exclusive collections.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button size="lg" className="rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 text-white" onClick={() => onNav('#shop')}>
                  Shop now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button size="lg" variant="outline" className="rounded-2xl border-2 border-rose-400" onClick={() => onNav('#about')}>
                  Learn more
                </Button>
              </motion.div>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free delivery over $100</motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> 5-year warranty</motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Eco-friendly woods</motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <img alt="Luxury Living Room"
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop"
              className="rounded-3xl w-full shadow-2xl" />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur rounded-2xl shadow p-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose-500" /> New collections every month
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CategoryPills({ active, setActive }: { active: string | null; setActive: (v: any) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      {CATEGORIES.map(({ name, icon: Icon }) => (
        <Button key={name} variant={active === name ? "default" : "outline"} className="rounded-full"
          onClick={() => setActive(active === name ? null : name)}>
          <Icon className="mr-2 h-4 w-4" /> {name}
        </Button>
      ))}
      <Button variant={!active ? "default" : "outline"} className="rounded-full" onClick={() => setActive(null)}>All</Button>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <Card className="group rounded-3xl overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
        <div className="absolute left-3 top-3">
          <Badge className="rounded-full px-3 py-1">{product.tag}</Badge>
        </div>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3 rounded-full">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-base">{product.name}</CardTitle>
        <div className="flex items-center gap-1 text-sm text-amber-600">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? '' : 'opacity-30'}`} />
          ))}
          <span className="ml-1 text-black/60">{product.rating}</span>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{priceFmt(product.price)}</span>
          <Badge className="rounded-full bg-black/10 text-black">{product.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full rounded-xl"><ShoppingCart className="mr-2 h-4 w-4" /> Add to cart</Button>
      </CardFooter>
    </Card>
  );
}

function ProductGrid() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => (!cat || p.category === cat) && p.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, cat]);

  return (
    <section id="shop" className="py-16 md:py-20 bg-gradient-to-b from-white via-white to-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Explore our collection</h2>
            <p className="text-black/70 mt-2">Curated pieces for living, dining, and sleeping spaces.</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
            <div className="flex w-full md:w-80 items-center gap-2">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/50" />
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." className="pl-9 rounded-xl" />
              </div>
              <Button variant="outline" className="rounded-xl"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
            </div>
            <CategoryPills active={cat} setActive={setCat} />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img alt="Workshop"
            src="https://images.unsplash.com/photo-1582582494700-89d62f0f10f3?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl shadow-xl" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Crafted with care, built to last</h3>
          <p className="mt-3 text-black/70 leading-relaxed">
            We partner with artisan workshops and certified suppliers to bring you furniture that blends durability with modern aesthetics.
            Every piece goes through a 40-point quality inspection and is backed by our 5-year warranty.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Leaf className="h-4 w-4" /> Sustainable</CardTitle></CardHeader>
              <CardContent className="text-sm text-black/70">FSC-certified wood & low-VOC finishes.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Warranty</CardTitle></CardHeader>
              <CardContent className="text-sm text-black/70">5 years of hassle-free protection.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Truck className="h-4 w-4" /> Fast Delivery</CardTitle></CardHeader>
              <CardContent className="text-sm text-black/70">Get it in 3–7 business days.</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Sadia R.", text: "Stunning sofa and excellent build quality. Delivery was quick and the team set everything up!" },
    { name: "Hasan A.", text: "Minimal design that fits perfectly in our apartment. Great customer service as well." },
    { name: "Rafi N.", text: "Worth every penny. The oak bed is solid and super comfortable." },
  ];
  return (
    <section className="py-16 md:py-20 bg-amber-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">What customers say</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
              <Card className="rounded-3xl">
                <CardContent className="pt-6 text-black/80">“{t.text}”</CardContent>
                <CardFooter className="text-sm font-medium">— {t.name}</CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Visit our studio</h3>
          <p className="mt-3 text-black/70">Showroom open Sat–Thu, 10am–8pm. Come try out our bestsellers and get design advice.</p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Green Road, Dhaka</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +880 1234-567890</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@alhoourr.com</div>
          </div>
          <div className="mt-6">
            <img alt="Showroom map"
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl shadow" />
          </div>
        </div>
        <Card className="rounded-3xl">
          <CardHeader><CardTitle>Send us a message</CardTitle></CardHeader>
          <CardContent className="grid gap-4">
            <Input placeholder="Full name" className="rounded-xl" />
            <Input type="email" placeholder="Email address" className="rounded-xl" />
            <Input placeholder="Subject" className="rounded-xl" />
            <textarea placeholder="Your message" className="min-h-32 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10" />
          </CardContent>
          <CardFooter><Button className="rounded-xl">Send message</Button></CardFooter>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 py-12">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 grid place-items-center rounded-xl bg-gradient-to-tr from-amber-400 to-rose-400 shadow">
                <Sofa className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Al Hoourr Furniture</span>
            </div>
            <p className="mt-3 text-sm text-black/70 max-w-xs">Redefining modern luxury with comfort and elegance.</p>
          </div>
          <div>
            <h4 className="font-medium">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>Sofas</li>
              <li>Chairs</li>
              <li>Tables</li>
              <li>Lighting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>Shipping</li>
              <li>Returns</li>
              <li>Warranty</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-3 text-sm text-black/70">
          <p>© {new Date().getFullYear()} Al Hoourr Furniture. All rights reserved.</p>
          <p className="text-xs">Website created with passion by <span className="font-medium">AV Team</span></p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const onNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <Navbar onNav={onNav} />
      <Hero onNav={onNav} />
      <ProductGrid />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
