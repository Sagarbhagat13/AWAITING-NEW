
import { Separator } from "@/components/ui/separator";

// Partner logos with their names
const partners = [
  {
    id: 1,
    name: "MSME",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ministry_of_Micro%2C_Small_and_Medium_Enterprises_logo.svg/1200px-Ministry_of_Micro%2C_Small_and_Medium_Enterprises_logo.svg.png",
  },
  {
    id: 2,
    name: "AIR INDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Air_India_Logo.svg/2560px-Air_India_Logo.svg.png",
  },
  {
    id: 3,
    name: "GST",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Goods_and_Services_Tax_logo.svg/1200px-Goods_and_Services_Tax_logo.svg.png",
  },
  {
    id: 4,
    name: "IDFC BANK",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/IDFC_First_Bank_Logo.svg/2560px-IDFC_First_Bank_Logo.svg.png",
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
