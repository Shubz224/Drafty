import { Trophy, Code2, ShieldCheck } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Coding Proficiency',
      description: 'Solved 500+ problems | LeetCode 1500+ | CodeChef 2⭐ (1400+)',
      icon: Code2,
    },
    {
      title: 'Competitive Rankings',
      description: 'Top 2000 in Technex’24 (IIT BHU) | Top 3000 in CodeChef Starters 122',
      icon: Trophy,
    },
    {
      title: 'Hackathon Winner',
      description: 'Won Ethereum Hackathon – Unfold 2024, Bangalore (OKTO Wallet Track)',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">
            Achievements
          </h2>
          <p className="font-inter text-gray-600 text-lg">
            Milestones and recognition along the journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-space font-semibold text-xl mb-3">
                  {achievement.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
