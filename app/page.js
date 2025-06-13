import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <main
      className="flex flex-col h-screen bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay to improve text readability */}
      <div className="flex flex-col flex-grow  backdrop-blur-xs">
        <Hero
          title="Star X"
          description="مشروع مبتكر يقوم بتحليل الأجرام السماوية باستخدام الذكاء الصناعي، ويهدف إلى تبسيط استكشاف الكون للباحثين والهواة."
        />
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row flex-grow items-center justify-around">
          {/* Left Section: Profile 1 */}
          <div className="flex-1 flex justify-center items-center p-4 transform transition-transform duration-500 hover:scale-105 hover:z-10">
            <Profile
              name="Homam Al yaghshi"
              role="Full Stack"
              image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>

          {/* Center Section: Project Details */}
          <div className="flex-1 flex flex-col justify-center items-center text-center p-4 max-w-2xl">
            <div className="mt-8">
              <Countdown targetDate="2025-12-20T00:00:00" />
            </div>
          </div>

          {/* Right Section: Profile 2 */}
          <div className="flex-1 flex justify-center items-center p-4 transform transition-transform duration-500 hover:scale-105 hover:z-10">
            <Profile
              name="Omar Snobar"
              role="Machine Learning"
              image="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
        {/* Footer at the bottom */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
