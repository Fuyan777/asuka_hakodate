import { Camera } from "lucide-react";

const highlights = [
  {
    image: "src/img/tower.jpg",
    title: "五稜郭",
    comment: "隙間からタワーが見える",
  },
  {
    image: "src/img/mt_hakodate.jpg",
    title: "函館山",
    comment: "函館山ってこんな感じ！",
  },
  {
    image: "src/img/asuka_saka.jpg",
    title: "八幡坂",
    comment: "函館のシンボル、ロマンチックな坂道",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-12">
          齋藤飛鳥が函館で出会った、美しい風景と心癒されるグルメたち
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium mb-2">{highlight.title}</h3>
                <p className="flex items-center gap-2">
                  <Camera size={16} className="text-gold" />
                  {highlight.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
