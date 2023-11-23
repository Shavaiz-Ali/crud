import { useLocation } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  const user = location.state.item;

  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded shadow-lg mt-5">
      <img
        className="w-full h-64 object-cover"
        src={user.image}
        alt="user"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2 text-indigo-600">{user.name}</div>
        <p className="text-gray-600 text-lg">{user.email}</p>
        <p className="text-gray-600 text-lg">Age: {user.age}</p>
        <p className="text-gray-600 text-lg">Gender: {user.gender}</p>
        <p className="text-gray-600 text-lg">Country: {user.country}</p>
      </div>
    </div>
  );
};

export default UserDetail;
