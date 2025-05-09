import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-pink-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#87271e]">
              Our <span className="text-[#fb399d]">Products</span>
            </h1>
            <p className="mt-4 text-gray-700 md:text-xl/relaxed">
              Discover our range of authentic Mexican mole sauces, crafted with traditional recipes and premium
              ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Mole Section */}
      <section id="traditional-mole" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg?key=traditional-mole-jar"
                alt="Traditional Mole"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-[#fb399d]">
                Signature Product
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Traditional Mole</h2>
              <p className="text-gray-700">
                Our classic recipe features over 20 ingredients including multiple varieties of chiles, chocolate, nuts,
                and spices. This rich, complex sauce offers the perfect balance of sweet, savory, and spicy flavors that
                define authentic Mexican mole.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#87271e]">Key Ingredients:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Ancho, guajillo, and pasilla chiles</li>
                  <li>Mexican chocolate</li>
                  <li>Toasted sesame seeds and almonds</li>
                  <li>Cinnamon, cloves, and other spices</li>
                  <li>Ripe tomatoes and onions</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#87271e]">Perfect For:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Chicken and turkey dishes</li>
                  <li>Special occasions and celebrations</li>
                  <li>Traditional Mexican feasts</li>
                </ul>
              </div>
              <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Where to Buy</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Spicy Mole Section */}
      <section id="spicy-mole" className="py-16 md:py-24 bg-pink-50">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-[#fb399d]">
                For Heat Lovers
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Spicy Mole</h2>
              <p className="text-gray-700">
                Our Spicy Mole takes the traditional recipe and adds extra heat with additional chiles and spices.
                Perfect for those who love a more intense flavor experience while still enjoying the complex depth of
                authentic mole.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#87271e]">Key Ingredients:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Extra chipotle and árbol chiles for heat</li>
                  <li>Dark Mexican chocolate</li>
                  <li>Toasted pumpkin seeds</li>
                  <li>Traditional spice blend</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#87271e]">Perfect For:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Spice enthusiasts</li>
                  <li>Pork and beef dishes</li>
                  <li>Adding excitement to any meal</li>
                </ul>
              </div>
              <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Where to Buy</Button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] w-full">
              <Image src="/spicy-mole-sauce-jar.png" alt="Spicy Mole" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Green Mole Section */}
      <section id="green-mole" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] w-full">
              <Image src="/green-mole-sauce-jar.png" alt="Green Mole" fill className="object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-[#fb399d]">
                Light & Fresh
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Green Mole</h2>
              <p className="text-gray-700">
                Our Green Mole (Mole Verde) offers a lighter, fresher take on traditional mole. Made with green chiles,
                pumpkin seeds, and herbs, this vibrant sauce brings a different but equally authentic Mexican flavor
                experience.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#87271e]">Key Ingredients:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Poblano and jalapeño chiles</li>
                  <li>Tomatillos</li>
                  <li>Cilantro and epazote</li>
                  <li>Pumpkin seeds (pepitas)</li>
                  <li>Fresh herbs</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#87271e]">Perfect For:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Chicken and fish dishes</li>
                  <li>Lighter meals</li>
                  <li>Spring and summer entertaining</li>
                </ul>
              </div>
              <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Where to Buy</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Section */}
      <section id="distributor" className="py-16 md:py-24 bg-pink-50">
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
                  <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Contact Durvill Foods</Button>
                  <Button variant="outline" className="border-[#fb399d] text-[#fb399d]">
                    Learn More
                  </Button>
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
