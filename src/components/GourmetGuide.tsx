import { Heart } from "lucide-react";

const GourmetGuide = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-12">
          グルメ巡り
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for gourmet content */}

          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <Heart className="text-gold" />
              <a href="https://luckypierrot.jp/">ラッキーピエロ</a>
            </h3>
            <p className="text-gray-300">
              ハンバーガー、カレー、オムライス、焼きそば、なんでもある！
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <Heart className="text-gold" />
              <a href="https://www.angeliquevoyage.com/">
                アンジェリックヴォヤージュ
              </a>
            </h3>
            <p className="text-gray-300">クレープ美味しい！</p>
          </div>

          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <Heart className="text-gold" />
              <a href="https://www.hasesuto.co.jp/">ハセガワストア</a>
            </h3>
            <p className="text-gray-300">
              やきとり弁当が食べられる！豚なのに「やきとり」って呼ぶ
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <Heart className="text-gold" />
              <a href="https://daikoku-jgs.com/menu">大黒屋 函館五稜郭店</a>
            </h3>
            <p className="text-gray-300">ジンギスカン！</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GourmetGuide;
