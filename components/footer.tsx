import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#87271e] text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.svg" alt="La Mejicana Mole" width={150} height={50} className="h-auto w-auto" />
            </Link>
            <p className="text-sm text-white/80">
              Bringing authentic Mexican flavors to your table with our premium mole sauces.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#fb399d] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-[#fb399d] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-[#fb399d] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products#traditional-mole" className="hover:text-[#fb399d] transition-colors">
                  Traditional Mole
                </Link>
              </li>
              <li>
                <Link href="/products#spicy-mole" className="hover:text-[#fb399d] transition-colors">
                  Spicy Mole
                </Link>
              </li>
              <li>
                <Link href="/products#green-mole" className="hover:text-[#fb399d] transition-colors">
                  Green Mole
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#fb399d] transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about#our-story" className="hover:text-[#fb399d] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about#our-values" className="hover:text-[#fb399d] transition-colors">
                  Our Values
                </Link>
              </li>
              <li>
                <Link href="/about#our-team" className="hover:text-[#fb399d] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about#distributor" className="hover:text-[#fb399d] transition-colors">
                  Our Distributor
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact#contact-form" className="hover:text-[#fb399d] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact#distributor-contact" className="hover:text-[#fb399d] transition-colors">
                  Distributor Contact
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="hover:text-[#fb399d] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-[#fb399d] transition-colors">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} La Mejicana Mole. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
