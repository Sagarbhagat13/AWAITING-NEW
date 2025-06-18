
interface TripThingsToCarryTabProps {
  thingsToCarry?: {
    category: string;
    items: string[];
    essential: boolean;
  }[];
}

const TripThingsToCarryTab = ({ thingsToCarry }: TripThingsToCarryTabProps) => {
  const defaultItems = [
    {
      category: "Clothing",
      essential: true,
      items: [
        "Comfortable trekking pants",
        "Quick-dry t-shirts",
        "Warm jacket/fleece",
        "Rain jacket/poncho",
        "Comfortable walking shoes",
        "Extra socks and undergarments"
      ]
    },
    {
      category: "Personal Care",
      essential: true,
      items: [
        "Sunscreen (SPF 30+)",
        "Personal medications",
        "Toiletries",
        "Towel",
        "Wet wipes",
        "Hand sanitizer"
      ]
    },
    {
      category: "Equipment",
      essential: false,
      items: [
        "Backpack (30-40L)",
        "Water bottle",
        "Headlamp/flashlight",
        "Power bank",
        "Camera",
        "Binoculars (optional)"
      ]
    },
    {
      category: "Documents",
      essential: true,
      items: [
        "Valid photo ID",
        "Trip voucher",
        "Emergency contact details",
        "Medical insurance (if any)",
        "Permits (if required)"
      ]
    }
  ];

  const itemsData = thingsToCarry || defaultItems;

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-semibold text-green-800 mb-2">Packing Tips</h3>
        <p className="text-green-700 text-sm">
          Pack light and smart. Weather can change quickly in the mountains. 
          Layering is key to staying comfortable throughout your journey.
        </p>
      </div>

      <div className="grid gap-6">
        {itemsData.map((category, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <h4 className="font-semibold text-gray-800">{category.category}</h4>
              {category.essential && (
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">
                  Essential
                </span>
              )}
            </div>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                  <span className="text-tripvidya-primary mt-1">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h3 className="font-semibold text-orange-800 mb-2">What Not to Bring</h3>
        <ul className="text-orange-700 text-sm space-y-1">
          <li>• Heavy cotton clothing (takes long to dry)</li>
          <li>• Excessive jewelry or valuables</li>
          <li>• Plastic bags (not eco-friendly)</li>
          <li>• Glass containers</li>
          <li>• Prohibited items as per local regulations</li>
        </ul>
      </div>
    </div>
  );
};

export default TripThingsToCarryTab;
