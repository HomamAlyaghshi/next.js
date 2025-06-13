// ./components/Profile.js
const Profile = ({ name, image, role }) => {
  return (
    // يمكنك التحكم بالحجم هنا باستخدام w-72 أو w-80 مثلاً
    <div className="flex flex-col items-center bg-gray-900 bg-opacity-75 p-6 rounded-2xl shadow-xl w-64 text-center">
      <img 
        src={image} 
        alt={name} 
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-cyan-400 mb-4" 
      />
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-cyan-300 mt-1">{role}</p>
    </div>
  );
};
export default Profile;