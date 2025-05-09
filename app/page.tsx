import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-pink-50">
        <div className="container px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#87271e]">
                Authentic Mexican <span className="text-[#fb399d]">Mole</span> Sauce
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the rich, complex flavors of traditional Mexican cuisine with our premium mole sauce. Crafted
                with authentic recipes passed down through generations.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#fb399d] text-[#fb399d]">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[400px]">
                <Image
                  src="/placeholder.svg?key=7ioal"
                  alt="La Mejicana Mole"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[url('/wave-pattern.png')] bg-repeat-x bg-bottom"></div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-[#fb399d]">
              Premium Quality
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#87271e]">
              Why Choose La Mejicana Mole?
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mole sauce brings authentic Mexican flavors to your table with carefully selected ingredients and
              traditional preparation methods.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-12 pt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-pink-100 p-6 shadow-sm">
              <div className="rounded-full bg-pink-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#fb399d]"
                >
                  <path d="M12 20v-6M6 20V10M18 20V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#87271e]">Authentic Recipe</h3>
              <p className="text-center text-gray-700">
                Made with traditional recipes passed down through generations of Mexican families.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-pink-100 p-6 shadow-sm">
              <div className="rounded-full bg-pink-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#fb399d]"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#87271e]">Premium Ingredients</h3>
              <p className="text-center text-gray-700">
                Carefully selected spices, chiles, and chocolate for the perfect balance of flavors.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-pink-100 p-6 shadow-sm">
              <div className="rounded-full bg-pink-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#fb399d]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#87271e]">No Preservatives</h3>
              <p className="text-center text-gray-700">
                Made with natural ingredients without artificial preservatives or additives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-pink-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#87271e]">
              Our Product Range
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our selection of authentic Mexican mole sauces, perfect for any dish.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 pt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?key=0qt4r" alt="Traditional Mole" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#87271e]">Traditional Mole</h3>
              <p className="text-center text-gray-700">
                Our classic recipe with over 20 ingredients including chiles, chocolate, and spices.
              </p>
              <Link href="/products#traditional-mole">
                <Button variant="outline" className="border-[#fb399d] text-[#fb399d]">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-lg">
                <Image src="/spicy-mole-sauce-jar.png" alt="Spicy Mole" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#87271e]">Spicy Mole</h3>
              <p className="text-center text-gray-700">
                A hotter version of our traditional mole with extra chiles for those who love heat.
              </p>
              <Link href="/products#spicy-mole">
                <Button variant="outline" className="border-[#fb399d] text-[#fb399d]">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-lg">
                <Image src="/green-mole-sauce-jar.png" alt="Green Mole" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#87271e]">Green Mole</h3>
              <p className="text-center text-gray-700">
                A lighter, fresher mole made with green chiles, pumpkin seeds, and herbs.
              </p>
              <Link href="/products#green-mole">
                <Button variant="outline" className="border-[#fb399d] text-[#fb399d]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#87271e]">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from chefs and food lovers who have experienced the authentic taste of La Mejicana Mole.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col space-y-4 rounded-lg border border-pink-100 p-6 shadow-sm">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#ff9630] text-[#ff9630]" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "La Mejicana Mole brings authentic Mexican flavors to my kitchen. The depth and complexity of flavors
                  is unmatched by any other product I've tried."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src="/chef-portrait.png" alt="Customer" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-[#87271e]">Chef {["Maria", "Carlos", "Elena"][i - 1]}</p>
                    <p className="text-sm text-gray-500">Professional Chef</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="bg-[#87271e] py-16 md:py-24 text-white">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Where to Buy</h2>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find La Mejicana Mole at these fine retailers or contact us directly for wholesale inquiries.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4 pt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6">
                <div className="relative h-16 w-16">
                  <Image src="/generic-grocery-logo.png" alt={`Retailer ${i}`} fill className="object-contain" />
                </div>
                <p className="font-medium text-[#87271e]">Retailer {i}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-center space-y-4">
            <p className="font-medium">Can't find our products near you?</p>
            <Link href="/contact">
              <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exclusive Distributor Section */}
      <section className="bg-pink-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl rounded-lg bg-white p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#87271e]">
                  Our Exclusive Distributor
                </h2>
                <p className="md:text-xl/relaxed text-gray-700">
                  Durvill Foods is the exclusive distributor of La Mejicana Mole products. With their extensive network
                  and commitment to quality, they ensure our authentic Mexican mole reaches customers nationwide.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact#distributor-contact">
                    <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Contact Durvill Foods</Button>
                  </Link>
                  <Link href="/about#distributor">
                    <Button variant="outline" className="border-[#fb399d] text-[#fb399d]">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[150px] w-[300px]">
                  <Image
                    src="/durvill_logo.png"
                    alt="Durvill Foods - Exclusive Distributor"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
