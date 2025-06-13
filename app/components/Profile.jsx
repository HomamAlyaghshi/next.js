// ./components/Profile.js
const Profile = ({ name, image, role }) => {
  return (
    <div className="flex flex-col items-center bg-gray-900 bg-opacity-75 p-6 rounded-2xl shadow-xl w-72 h-full text-center">
      <img 
        src={image} 
        alt={name} 
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-cyan-400 mb-10" 
      />
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-cyan-300 ">{role}</p>
    </div>
  );
};
export default Profile;