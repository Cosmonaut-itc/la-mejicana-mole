"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="La Mejicana Mole" width={100} height={30} className="h-auto w-auto max-h-8" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors">
            About
          </Link>
          <Link href="/products" className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors">
            Products
          </Link>
          <Link href="/recipes" className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors">
            Recipes
          </Link>
          <Link href="/contact" className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact">
            <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Contact Sales</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-[#87271e]" /> : <Menu className="h-6 w-6 text-[#87271e]" />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-white p-6 md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col space-y-6">
          <Link
            href="/"
            className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/recipes"
            className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Recipes
          </Link>
          <Link
            href="/contact"
            className="text-[#87271e] hover:text-[#fb399d] font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link href="/contact" className="w-full">
            <Button className="bg-[#fb399d] hover:bg-[#e02e8a] w-full">Contact Sales</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
