import Hero from "../components/Hero";
import DishCard from "../components/DishCard";
import { FaUtensils, FaShoppingCart } from "react-icons/fa";
import AnimatedPage from "../components/AnimatedPage";
import { Link } from "react-router-dom";

const featuredDishes = [
  {
    id: 1,
    name: "Truffle Pasta",
    description: "Handmade pasta with black truffle sauce and parmesan",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Craft Burger",
    description:
      "Angus beef patty with cheddar, caramelized onions, and special sauce",
    price: 15.25,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1598&q=80",
    category: "Main Courses",
  },
  {
    id: 3,
    name: "Honeydew Mint Cooler",
    description: "Refreshing yogurt drink with fresh mango pulp and cardamom",
    price: 5.5,
    image:
      "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    category: "Drinks",
  },
  // Add more dishes if needed
];

export default function Home() {
  return (
    <AnimatedPage>
      <div>
        <Hero />

        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
              Our Signature Dishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">
              Ready to Experience Our Cuisine?
            </h2>
            <p className="text-amber-700 mb-8 max-w-xl mx-auto">
              Reserve your table now or order online and enjoy our flavors from
              the comfort of your home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* ✅ Updated Reserve Button */}
              <Link
                to="/reserve"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:bg-amber-700 hover:scale-105 hover:-translate-y-1"
                aria-label="Reserve a Table"
              >
                <FaUtensils />
                Reserve a Table
              </Link>

              {/* 🛒 Order Online Button (unchanged) */}
              <button
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
                aria-label="Order Online"
              >
                <FaShoppingCart />
                Order Online
              </button>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}
