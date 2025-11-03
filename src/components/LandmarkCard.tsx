import { Card } from "@/components/ui/card";

interface LandmarkCardProps {
  image: string;
  name: string;
}

const LandmarkCard = ({ image, name }: LandmarkCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300 cursor-pointer hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-2xl font-bold group-hover:scale-105 transition-transform">
            {name}
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default LandmarkCard;
