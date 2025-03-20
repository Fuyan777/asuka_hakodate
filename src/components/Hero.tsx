import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "src/img/asuka_saka.jpg",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 text-gold">
          #さいとうあすかたび
        </h1>
        <h2 className="text-2xl md:text-4xl font-serif mb-8">
          〜はるばる来たぜ、函館！〜
        </h2>
        <p className="max-w-2xl text-lg mb-12 leading-relaxed">
          齋藤飛鳥が巡った、函館の絶景＆グルメスポットを大公開！
          <br />
          あなたも飛鳥と同じ旅をしてみませんか？
        </p>
        <div className="flex gap-4">
          <button className="bg-gold text-navy px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gold/90 transition-colors">
            <a
              href="https://www.instagram.com/p/DHVe01LJJZo/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagramの投稿を見る
            </a>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
