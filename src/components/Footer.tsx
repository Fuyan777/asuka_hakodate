import { Instagram, Share2 } from "lucide-react";

const Footer = () => {
  const styles = {
    button: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      textAlign: "center",
    },
  };

  return (
    <footer className="bg-navy/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif text-gold mb-4">About</h3>
            <p className="text-gray-300">
              <a href="https://www.hakobura.jp/">
                函館観光公式サイト「はこぶら」
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-gold mb-4">Follow</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/asuka.3110.official/"
                className="text-white hover:text-gold"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://asukasaito.jp/s/m15/?ima=4506"
                className="text-white hover:text-gold"
              >
                <Share2 size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif text-gold mb-4">Contact</h3>
            <p className="text-gray-300">お問い合わせ先はありません</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2025 #さいとうあすかたび All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
