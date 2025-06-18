
interface TripDescriptionProps {
  description: string;
}

const TripDescription = ({ description }: TripDescriptionProps) => {
  return (
    <div className="mb-8">
      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default TripDescription;
