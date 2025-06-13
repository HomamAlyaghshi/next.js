// ./components/Hero.js
const Hero = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
        {title}
      </h1>
      <p className="text-lg lg:text-xl text-gray-200">
        {description}
      </p>
    </div>
  );
};
export default Hero;