
interface TripCancellationPolicyTabProps {
  cancellationPolicy?: {
    period: string;
    refundPercentage: number;
    description: string;
  }[];
}

const TripCancellationPolicyTab = ({ cancellationPolicy }: TripCancellationPolicyTabProps) => {
  const defaultPolicy = [
    {
      period: "30+ days before departure",
      refundPercentage: 100,
      description: "Full refund minus processing fee"
    },
    {
      period: "15-29 days before departure", 
      refundPercentage: 75,
      description: "75% refund of total trip cost"
    },
    {
      period: "7-14 days before departure",
      refundPercentage: 50,
      description: "50% refund of total trip cost"
    },
    {
      period: "3-6 days before departure",
      refundPercentage: 25,
      description: "25% refund of total trip cost"
    },
    {
      period: "0-2 days before departure",
      refundPercentage: 0,
      description: "No refund applicable"
    }
  ];

  const policyData = cancellationPolicy || defaultPolicy;

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
        <p className="text-yellow-700 text-sm">
          Cancellation charges are calculated from the date of booking confirmation. 
          All refunds are subject to processing fees and will be credited within 7-10 working days.
        </p>
      </div>

      <div className="space-y-4">
        {policyData.map((policy, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-800">{policy.period}</h4>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                policy.refundPercentage >= 75 ? 'bg-green-100 text-green-800' :
                policy.refundPercentage >= 25 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {policy.refundPercentage}% Refund
              </span>
            </div>
            <p className="text-gray-600 text-sm">{policy.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">Special Circumstances</h3>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Medical emergencies with valid documentation may be eligible for additional refund</li>
          <li>• Weather-related cancellations by the operator will receive full refund</li>
          <li>• Group bookings may have different cancellation terms</li>
        </ul>
      </div>
    </div>
  );
};

export default TripCancellationPolicyTab;
