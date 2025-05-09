import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-pink-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#87271e]">
              About <span className="text-[#fb399d]">La Mejicana</span>
            </h1>
            <p className="mt-4 text-gray-700 md:text-xl/relaxed">
              Discover the story behind our authentic Mexican mole and our commitment to bringing traditional flavors to
              your table.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg?key=mexican-kitchen"
                alt="Traditional Mexican Kitchen"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Our Story</h2>
              <p className="text-gray-700">
                La Mejicana's mole recipe is a celebration of Mexico's diverse culinary heritage, drawing inspiration
                from multiple regions across the country. Our unique blend combines traditional techniques and
                ingredients from Michoacan, Estado de Mexico, and Jalisco - three states renowned for their distinctive
                mole variations.
              </p>
              <p className="text-gray-700">
                Each region contributes its own character to our recipe: the earthy depth from Michoacan, the balanced
                complexity from Estado de Mexico, and the aromatic spice profile from Jalisco. This multi-regional
                approach creates a mole that represents the rich tapestry of Mexican cuisine.
              </p>
              <p className="text-gray-700">
                What began as a collection of family recipes passed down through generations has evolved into a premium
                product enjoyed by food lovers across the United States. We remain committed to authentic preparation
                methods and high-quality ingredients that honor these regional traditions.
              </p>
              <p className="text-gray-700">
                Every jar of La Mejicana Mole contains the essence of Mexico's culinary diversity, carefully crafted to
                bring authentic flavors from multiple Mexican states to your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="our-values" className="py-16 md:py-24 bg-pink-50">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Our Values</h2>
            <p className="mt-4 text-gray-700">
              At La Mejicana, we are guided by our commitment to quality, authenticity, and tradition.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-pink-100">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
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
                  className="text-[#fb399d]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#87271e] mb-2">Authenticity</h3>
              <p className="text-gray-700">
                We stay true to traditional Mexican recipes and preparation methods, ensuring every product delivers an
                authentic taste experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-pink-100">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
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
                  className="text-[#fb399d]"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#87271e] mb-2">Quality</h3>
              <p className="text-gray-700">
                We use only the finest ingredients, carefully selected to create the perfect balance of flavors in every
                jar of our mole.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-pink-100">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
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
                  className="text-[#fb399d]"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#87271e] mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We are committed to sustainable practices in our sourcing and production, respecting both cultural
                traditions and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Our Team</h2>
            <p className="mt-4 text-gray-700">
              Meet the passionate people behind La Mejicana Mole who work tirelessly to bring authentic Mexican flavors
              to your table.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Maria Rodriguez",
                role: "Founder & CEO",
                image: "/placeholder.svg?key=woman-chef",
              },
              {
                name: "Carlos Mendez",
                role: "Master Chef",
                image: "/placeholder.svg?key=man-chef",
              },
              {
                name: "Elena Gomez",
                role: "Quality Control",
                image: "/placeholder.svg?key=woman-food-scientist",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#87271e]">{member.name}</h3>
                <p className="text-[#fb399d]">{member.role}</p>
                <p className="mt-2 text-gray-700">
                  Passionate about authentic Mexican cuisine and dedicated to preserving traditional flavors.
                </p>
              </div>
            ))}
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
