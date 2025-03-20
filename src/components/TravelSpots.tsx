import { MapPin } from "lucide-react";

const TravelSpots = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-12">
          観光スポット
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for travel spots content */}
          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <MapPin className="text-gold" />
              <a href="https://hako-eco.com/">湯の川・熱帯植物園</a>
            </h3>
            <p className="text-gray-300">サル山の温泉が見れる！</p>
          </div>

          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <MapPin className="text-gold" />
              <a href="https://www.hakodate-jts-kosya.jp/park/hakodate/">
                函館公園
              </a>
            </h3>
            <p className="text-gray-300">エゾタヌキ“ポン太”に会える！</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSpots;
