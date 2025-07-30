import { Link } from 'react-router-dom';
import TeamMember from '../components/TeamMember';
import AnimatedPage from '../components/AnimatedPage';

const teamMembers = [
{
    "id": 1,
    "name": "Chef Michael Rossi",
    "role": "Executive Chef",
    "bio": "With 20 years of culinary experience, Chef Michael brings authentic Italian techniques with a modern twist.",
    "image": "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    "id": 2,
    "name": "Christan cole",
    "role": "Pastry Chef",
    "bio": "Trained in Paris, Sarah creates desserts that are both visually stunning and delicious.",
    "image": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    "id": 3,
    "name": "David Morales",
    "role": "Sommelier",
    "bio": "Our wine expert who curates pairings that elevate every dining experience.",
    image : "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "General Manager",
    bio: "Ensures every guest receives impeccable service from arrival to departure.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 5,
    name: "Carlos Mendez",
    role: "Head Mixologist",
    bio: "Creates craft cocktails using seasonal ingredients and innovative techniques.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 6,
    name: "Aisha Patel",
    role: "Sous Chef",
    bio: "Specializes in fusion cuisine that blends Eastern and Western flavors.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  }
];

const awards = [
  {
    id: 1,
    title: "Michelin Star",
    year: "2023",
    icon: "⭐",
    description: "Recognized for exceptional culinary artistry"
  },
  {
    id: 2,
    title: "Best Fine Dining",
    year: "2022",
    icon: "🏆",
    description: "Top-rated fine dining experience"
  },
  {
    id: 3,
    title: "Chef's Choice",
    year: "2021",
    icon: "👨‍🍳",
    description: "Peer-nominated culinary excellence"
  },
  {
    id: 4,
    title: "Wine Spectator",
    year: "2023",
    icon: "🍷",
    description: "Award-winning wine selection"
  }
];

export default function About() {
  return (
    <AnimatedPage>
    <div className="bg-white">
      {/* Hero Section with Parallax Effect */}
<div className="relative h-[70vh] min-h-[500px] overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
  
  <img 
    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80"
    alt="Fine dining table setup"
    className="w-full h-full object-cover object-center absolute inset-0"
  />

  <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
    <div className="max-w-4xl">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-md">
        Our <span className="text-amber-300">Culinary Journey</span>
      </h1>
      
      <div className="w-32 h-1.5 bg-amber-400 mx-auto mb-8 rounded-full" />
      
      <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
        A decade of passion, innovation, and unforgettable dining experiences.
      </p>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6 font-serif">
              From Humble <span className="text-amber-600">Beginnings</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8 rounded-full" />
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              What began as a modest 12-seat bistro in 2010 has blossomed into an award-winning culinary destination, while never losing sight of our founding principles: authenticity, quality, and warm hospitality.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-50 relative overflow-hidden group">
              <div className="absolute -top-5 -left-5 text-7xl text-amber-400 opacity-20">"</div>
              <p className="italic text-gray-700 text-lg relative z-10">
                "We don't just serve meals - we create experiences that linger in memory long after the last bite."
              </p>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-amber-400">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Founders"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-amber-800">Marco & Elena</p>
                  <p className="text-gray-500 text-sm">Founders</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:shadow-xl">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Chefs preparing food"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Our Kitchen</h3>
                  <p className="text-amber-100">Where culinary magic happens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-w-3 aspect-h-2">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Farm fresh ingredients"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 flex items-start justify-end p-8 flex-col">
                <div className="text-white text-right">
                  <h3 className="text-xl font-bold mb-2">Farm to Table</h3>
                  <p className="text-amber-100">Fresh ingredients, exceptional flavors</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6 font-serif">
              Our <span className="text-amber-600">Philosophy</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8 rounded-full" />
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              We're committed to sustainable sourcing, working directly with local farmers and producers to bring you the freshest seasonal ingredients.
            </p>
            <div className="space-y-4">
              {[
                { 
                  icon: (
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                  title: "Sustainable Sourcing",
                  description: "Partnering with local organic farms"
                },
                { 
                  icon: (
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Time-Honored Techniques",
                  description: "Traditional methods meet modern innovation"
                },
                { 
                  icon: (
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                  title: "Seasonal Menus",
                  description: "Rotating dishes based on what's freshest"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-amber-50 p-4 rounded-lg group hover:bg-amber-100 transition-colors">
                  <div className="bg-white p-2 rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3 font-serif">
            Meet Our <span className="text-amber-600">Family</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The passionate individuals who make every dining experience memorable
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {teamMembers.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>

        {/* Awards Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-900 to-amber-700 p-0.5 mb-20">
          <div className="relative bg-white rounded-[calc(1.5rem-1px)] p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3 font-serif">
                Our <span className="text-amber-600">Accolades</span>
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Recognition for our dedication to culinary excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map(award => (
                <div key={award.id} className="bg-amber-50 rounded-xl p-6 text-center group hover:bg-amber-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                    {award.icon}
                  </div>
                  <h3 className="text-xl font-bold text-amber-800 mb-1">{award.title}</h3>
                  <div className="text-amber-600 font-medium mb-2">{award.year}</div>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-amber-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-serif">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Book your table today and embark on a culinary journey you won't forget
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg">
              Reserve a Table
            </button>
            <Link
              to="/menu" className="border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300">
              View Our Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}