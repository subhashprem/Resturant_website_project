export default function TeamMember({ member }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-center p-6 max-w-xs mx-auto">
      <div className="relative w-36 h-36 mx-auto mb-6 group">
        <img 
          src={member.image} 
          alt={`Portrait of ${member.name}, ${member.role}`} 
          className="w-full h-full rounded-full object-cover border-4 border-amber-100 group-hover:border-amber-200 transition-colors duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
      
      <h3 className="text-2xl font-bold text-amber-900 mb-1">{member.name}</h3>
      <p className="text-amber-600 font-medium mb-4">{member.role}</p>
      <p className="text-gray-700 text-sm leading-relaxed px-2">
        {member.bio}
      </p>
      
      <div className="mt-6 flex justify-center space-x-3">
        <button 
          aria-label={`Contact ${member.name}`}
          className="text-amber-700 hover:text-amber-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        <button 
          aria-label={`View ${member.name}'s profile`}
          className="text-amber-700 hover:text-amber-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
    </div>
  );
}