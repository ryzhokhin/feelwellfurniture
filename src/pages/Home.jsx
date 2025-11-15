import HeroSection from "../components/HeroSection";
import FeaturedCollection from "../components/FeaturedCollection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home({ theme }) {
  return (
    <div>
      <HeroSection theme={theme} />
      <FeaturedCollection />
      <WhyChooseUs />

      <section className="py-20 px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-light mb-4 text-gray-900 dark:text-gray-100">Premium Furniture for Modern Living</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          We create beautiful, functional pieces that transform your space into a home.
          Each design balances comfort and style with sustainable materials.
        </p>
      </section>
    </div>
  );
}
