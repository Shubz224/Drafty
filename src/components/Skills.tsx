
const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Technical Skills',
      skills: [
        { 
          category: 'Frontend', 
          items: 'React.js, Next.js, Redux Toolkit, TypeScript, JavaScript',
          icon: '⚛️'
        },
        { 
          category: 'Backend', 
          items: 'Node.js, Express.js, Prisma, MVC Architecture',
          icon: '🚀'
        },
        { 
          category: 'Databases', 
          items: 'MongoDB, PostgreSQL, SQL, Vector DB',
          icon: '🗄️'
        },
        { 
          category: 'AI/ML', 
          items: 'LangChain (LLMs & RAG systems)',
          icon: '🤖'
        },
        { 
          category: 'Tools & DevOps', 
          items: 'Git, GitHub, Postman',
          icon: '🔧'
        }
      ]
    },
    {
      title: 'Foundational & Language Proficiency',
      skills: [
        { 
          category: 'Programming Languages', 
          items: 'C, C++, C#, Java, Python',
          icon: '💻'
        },
        { 
          category: 'Fundamentals', 
          items: 'DBMS, Computer Networks, Data Structures & Algorithms',
          icon: '📚'
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-space font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
            Skills & Expertise
          </h2>
          <p className="font-inter text-gray-600 text-base md:text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${sectionIndex * 0.2}s` }}
            >
              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="font-space font-semibold text-lg md:text-xl mb-4 md:mb-6 text-gray-800">
                  {section.title}
                </h3>
                <div className="space-y-4 md:space-y-5">
                  {section.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.category}
                      className="animate-fade-in"
                      style={{ animationDelay: `${(sectionIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="flex items-center mb-2 md:mb-3">
                        <span className="text-lg md:text-xl mr-2 md:mr-3">{skill.icon}</span>
                        <span className="font-inter font-semibold text-gray-700 text-sm md:text-base">
                          {skill.category}:
                        </span>
                      </div>
                      <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed pl-6 md:pl-8 border-l-2 border-gray-200">
                        {skill.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
