import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-pink-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#87271e]">
              Contact <span className="text-[#fb399d]">Us</span>
            </h1>
            <p className="mt-4 text-gray-700 md:text-xl/relaxed">
              Get in touch with our team for inquiries, feedback, or to learn more about our products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Send Us a Message</h2>
              <p className="text-gray-700">
                Have questions about our products or want to provide feedback? Fill out the form below and we'll get
                back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} />
                </div>
                <Button className="w-full bg-[#fb399d] hover:bg-[#e02e8a]">Send Message</Button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden h-[300px] relative">
                <Image src="/placeholder.svg?key=map-location" alt="Map Location" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#fb399d] mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900">Address</h3>
                      <p className="text-gray-700">123 Mole Avenue, Puebla City, Mexico</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#fb399d] mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <p className="text-gray-700">+52 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#fb399d] mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-gray-700">info@lamejicanamole.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Contact Section */}
      <section id="distributor-contact" className="py-16 md:py-24 bg-pink-50">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl rounded-lg bg-white p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#87271e]">
                  Our Exclusive Distributor
                </h2>
                <p className="md:text-xl/relaxed text-gray-700">
                  For wholesale inquiries, retail locations, or distribution information, please contact our exclusive
                  distributor, Durvill Foods.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#fb399d] mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#fb399d] mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-gray-700">sales@durvillfoods.com</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-[#fb399d] hover:bg-[#e02e8a]">Contact Durvill Foods</Button>
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

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#87271e]">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-700">Find answers to common questions about our products and services.</p>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "Where can I buy La Mejicana Mole products?",
                answer:
                  "Our products are available through our exclusive distributor, Durvill Foods. They supply to specialty food stores, Mexican markets, and select grocery chains across the United States. Contact Durvill Foods for specific retail locations near you.",
              },
              {
                question: "Are your mole sauces gluten-free?",
                answer:
                  "Our Traditional and Green Mole sauces are gluten-free. However, we always recommend checking the label for the most up-to-date information, as ingredients may change.",
              },
              {
                question: "How long do your products last once opened?",
                answer:
                  "Once opened, our mole sauces should be refrigerated and used within 7-10 days for optimal flavor and quality.",
              },
              {
                question: "Do you offer international shipping?",
                answer:
                  "Currently, our products are only distributed within the United States through Durvill Foods. We hope to expand to international markets in the future.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-pink-100 p-6">
                <h3 className="text-lg font-bold text-[#87271e] mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
