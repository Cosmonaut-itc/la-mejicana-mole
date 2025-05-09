import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RecipesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-pink-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#87271e]">
              Delicious <span className="text-[#fb399d]">Recipes</span>
            </h1>
            <p className="mt-4 text-gray-700 md:text-xl/relaxed">
              Explore our collection of authentic Mexican recipes featuring La Mejicana Mole sauces.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Recipe */}
      <section id="featured-recipe" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-[#fb399d] mb-4">
              Featured Recipe
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Chicken Mole Poblano</h2>
            <p className="mt-4 text-gray-700">A classic Mexican dish featuring our Traditional Mole sauce.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="relative h-[500px] w-full">
              <Image
                src="/placeholder.svg?key=chicken-mole-poblano"
                alt="Chicken Mole Poblano"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-[#fb399d]" />
                  <span className="text-gray-700">45 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-[#fb399d]" />
                  <span className="text-gray-700">Serves 4</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#87271e]">Ingredients:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>4 chicken breasts or 8 chicken thighs</li>
                  <li>1 jar of La Mejicana Traditional Mole</li>
                  <li>2 cups chicken broth</li>
                  <li>1 tablespoon vegetable oil</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic, minced</li>
                  <li>Salt and pepper to taste</li>
                  <li>Sesame seeds and cilantro for garnish</li>
                  <li>Rice for serving</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#87271e]">Instructions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Season chicken with salt and pepper. In a large pot, heat oil and brown chicken on all sides.</li>
                  <li>Add onion and garlic, sauté until fragrant.</li>
                  <li>Pour in chicken broth and bring to a simmer.</li>
                  <li>Stir in La Mejicana Traditional Mole sauce and mix well.</li>
                  <li>Cover and simmer for 30 minutes until chicken is cooked through and sauce has thickened.</li>
                  <li>Serve over rice, garnished with sesame seeds and cilantro.</li>
                </ol>
              </div>

              <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Print Recipe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* More Recipes */}
      <section id="more-recipes" className="py-16 md:py-24 bg-pink-50">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">More Delicious Recipes</h2>
            <p className="mt-4 text-gray-700">Try these other fantastic dishes featuring our mole sauces.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Enchiladas with Mole Sauce",
                time: "30 min",
                serves: "4",
                image: "/placeholder.svg?key=enchiladas-mole",
                description: "Corn tortillas filled with shredded chicken and topped with our Traditional Mole sauce.",
              },
              {
                title: "Spicy Mole Tacos",
                time: "25 min",
                serves: "6",
                image: "/placeholder.svg?key=spicy-mole-tacos",
                description: "Tender beef tacos with our Spicy Mole sauce, topped with fresh vegetables.",
              },
              {
                title: "Green Mole with Fish",
                time: "35 min",
                serves: "2",
                image: "/placeholder.svg?key=green-mole-fish",
                description: "Delicate white fish fillets simmered in our Green Mole sauce with fresh herbs.",
              },
            ].map((recipe, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-pink-100">
                <div className="relative h-48 w-full">
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#87271e]">{recipe.title}</h3>
                  <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-[#fb399d]" />
                      <span className="text-sm text-gray-700">{recipe.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-[#fb399d]" />
                      <span className="text-sm text-gray-700">Serves {recipe.serves}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{recipe.description}</p>
                  <Button variant="outline" className="w-full border-[#fb399d] text-[#fb399d]">
                    View Recipe
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Tips */}
      <section id="recipe-tips" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Cooking Tips</h2>
            <p className="mt-4 text-gray-700">Get the most out of your La Mejicana Mole with these helpful tips.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#87271e] mb-4">Serving Suggestions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mole is traditionally served with rice to complement the rich sauce.</li>
                <li>Warm corn tortillas are the perfect accompaniment.</li>
                <li>Garnish with sesame seeds for authentic presentation.</li>
                <li>A squeeze of lime can brighten the flavors.</li>
                <li>For a complete meal, add a side of refried beans.</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#87271e] mb-4">Preparation Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dilute mole sauce with broth for desired consistency.</li>
                <li>Simmer gently to allow flavors to develop fully.</li>
                <li>Taste before adding salt - our mole already has a balanced flavor.</li>
                <li>Store unused mole in the refrigerator for up to one week.</li>
                <li>Mole flavors often improve the next day, making it perfect for meal prep.</li>
              </ul>
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
