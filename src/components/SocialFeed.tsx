import { Instagram } from "lucide-react";

const SocialFeed = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-12">
          #さいとうあすかたび をつけてシェアしよう！
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder for social feed content */}
          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <Instagram className="text-gold" />
            </h3>
            <p className="text-gray-300">Coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
