export const About = () => {
  return (
    <section id="about" className="py-[4.4rem] bg-[#050506]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="section-enter-soft mb-16 pb-8 border-b border-white/10">
          <span id="about_title" className="text-xs font-mono-display text-white/40 mb-4 block">003 // ABOUT</span>
          <h2 className="text-6xl md:text-8xl font-black text-white brutalist-text">
            About
            <br />
            <span className="text-white/30">Me</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-3 space-y-6">
            <div className="section-enter-soft border border-white/10 p-10">
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  Hi, I’m Parsa — an aspiring game developer who started his journey with curiosity
                  about computers and software, and is now pursuing the world of game development and
                  game design.
                </p>
                <p>
                  As a computer student, I’m currently focused entirely on learning{' '}
                  <span className="text-white font-semibold">Unity</span> and{' '}
                  <span className="text-white font-semibold">C#</span> to turn my ideas into interactive experiences.
                </p>
                <p>
                  My current skills revolve around prototyping gameplay mechanics and analyzing gameplay
                  systems, story, lore, and more. I don’t just want to make games — I love understanding
                  how the gears of a game work together to create enjoyable player experiences.
                </p>
                <p>
                  I’m fascinated by dystopian narratives, cyberpunk atmospheres, and post-apocalyptic
                  worlds where technology and humanity collide. My goal is to move toward system design
                  and creating independent, systems-driven games.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="section-enter-soft border border-white/10 p-8" style={{ animationDelay: '80ms' }}>
              <h3 className="text-sm font-mono-display tracking-wider text-white/40 mb-6">QUICK_FACTS</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-white/50">Age</span>
                  <span className="text-white font-bold">16</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-white/50">Education</span>
                  <span className="text-white">Tech High</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-white/50">Focus</span>
                  <span className="text-white">Unity & C#</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Dream</span>
                  <span className="text-white">Game Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
