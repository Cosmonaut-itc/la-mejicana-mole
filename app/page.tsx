import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/icons/logo.svg" alt="La Mejicana Logo" width={120} height={40} className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-pink-600 font-medium">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pink-600 font-medium">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pink-600 font-medium">
              Products
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pink-600 font-medium">
              Recipes
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pink-600 font-medium">
              Contact
            </Link>
          </nav>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6">Contact Sales</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Traditional Mole Dish"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Auténtico sabor
                <br />
                de hogar
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Celebramos la tradición de la cocina mexicana
                <br />
                en nuestra receta de pasta para mole premium.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">Learn more</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lo que nos hace únicos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white text-gray-800 text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src="/icons/tradicion.svg" alt="Tradición" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-pink-600">Tradición</h3>
                <p className="text-sm text-gray-600">
                  Elaboramos nuestros productos siguiendo
                  <br />
                  recetas tradicionales de generación
                  <br />
                  en generación.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-800 text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src="/icons/ingredientes.svg" alt="Ingredientes selectos" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-pink-600">Ingredientes selectos</h3>
                <p className="text-sm text-gray-600">
                  Usamos ingredientes especiales de chiles,
                  <br />
                  especias y semillas cuidadosamente
                  <br />
                  seleccionados para lograr el balance perfecto.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-800 text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src="/icons/sin-conservadores.svg" alt="No preservativos" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-pink-600">No preservativos</h3>
                <p className="text-sm text-gray-600">
                  Mole con sabor natural, ingredientes
                  <br />
                  auténticos y sin conservadores
                  <br />
                  artificiales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-pink-600">Our product family</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 uppercase tracking-wide">TRADICIONAL MOLE</h3>
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Traditional Mole"
                  width={250}
                  height={200}
                  className="mx-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Our classic recipe with over
                <br />
                20 ingredients including chiles, chocolate
                <br />
                and spices.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Learn More</Button>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 uppercase tracking-wide">PIPIÁN</h3>
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Pipián"
                  width={250}
                  height={200}
                  className="mx-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Pipián is an ancient Mexican dish,
                <br />
                known for its thick and flavorful
                <br />
                sauce made with toasted pumpkin seeds.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Learn More</Button>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 uppercase tracking-wide">GREEN MOLE</h3>
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Green Mole"
                  width={250}
                  height={200}
                  className="mx-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Green mole is a Mexican sauce known
                <br />
                for its vibrant color and fresh flavor,
                <br />
                made with pumpkin seeds, green chiles.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Mexico in your table</h2>
            <p className="text-gray-600 uppercase tracking-wide">LA MEJICANA MOLE RECIPES</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Enmoladas"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">Enmoladas</h3>
                  <p className="text-gray-600 mb-4">
                    Soft corn tortillas filled with chicken, rolled up and covered in rich mole sauce.
                    <br />A classic Mexican comfort food.
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Read more</Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">
                    Chicken meatballs with La Mejicana Mole sauce
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tender chicken meatballs in a rich mole sauce — a flavorful blend of chiles,
                    <br />
                    spices, and a hint of sweetness. A comforting taste of Mexican tradition.
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Read more</Button>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Chicken Meatballs"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8">More recipes</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-600 mb-8">Our distributor</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Durvill Foods is the exclusive distributor
                  <br />
                  of La Mejicana Mole products. With their extensive
                  <br />
                  network and commitment to quality,
                  <br />
                  they ensure our authentic Mexican mole reaches
                  <br />
                  customers nationwide.
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Durvill Foods"
                  width={300}
                  height={150}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/icons/logo-white.svg" alt="La Mejicana Logo" width={150} height={60} className="mb-4" />
            </div>
            <div>
              <h4 className="font-semibold mb-4">About us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recipes</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">FAQ</h4>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:opacity-80">
                  <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-pink-500 mt-8 pt-8 text-center text-sm">
            <p>© 2024 La Mejicana Mole. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
