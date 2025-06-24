
import { Separator } from "@/components/ui/separator";

// Partner logos with their names
const partners = [
  {
    id: 1,
    name: "MSME",
    logo: "https://w7.pngwing.com/pngs/158/831/png-transparent-ministry-of-micro-small-and-medium-enterprises-government-of-india-industry-small-business-india.png",
  },
  {
    id: 2,
    name: "AIR INDIA",
    logo: "https://thehardcopy.co/wp-content/uploads/Air-India-Logo-1200x522.jpg",
  },
  {
    id: 3,
    name: "GST",
    logo: "https://www.presentations.gov.in/wp-content/uploads/2020/01/NE_Preview1.png",
  },
  {
    id: 4,
    name: "IDFC BANK",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3CmS5o5iOFRFh-5MH-UMWwwn5oXM2h1hwQ&s",
  },
  {
    id: 5,
    name: "INDIGO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png",
  },
  {
    id: 6,
    name: "OTM",
    logo: "https://www.otm-india.com/images/OTM-logo.png",
  },
  {
    id: 7,
    name: "MAHARASHTRA TOURISM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Maharashtra_Tourism_Logo.svg/1200px-Maharashtra_Tourism_Logo.svg.png",
  },
  {
    id: 8,
    name: "IRCTC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Indian_Railway_Catering_and_Tourism_Corporation_logo.svg/1200px-Indian_Railway_Catering_and_Tourism_Corporation_logo.svg.png",
  },
  {
    id: 9,
    name: "STARTUP INDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Startup_India_Logo.svg/1200px-Startup_India_Logo.svg.png",
  },
];

const GovAffiliationsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          GOV Affiliations and Partners
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col items-center p-4 rounded-lg transition-all hover:shadow-md"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-12 md:h-14 object-contain filter grayscale hover:grayscale-0 transition-all"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
              <span className="text-xs text-gray-500 mt-2 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovAffiliationsSection;
