import { useState, useEffect, useCallback } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const GetFormData = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8000/newUsers");
      const result = response.data;
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/newUsers/${id}`);
      if (response.status === 200) {
        fetchData();
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="w-full sm:w-auto">
        <table className="w-full table-auto border border-collapse border-gray-800">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">image</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Country</th>
              <th className="py-2 px-4">Delete</th>
              <th className="py-2 px-4">Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className="bg-gray-100" key={item._id}>
                <Link to={`/userDetail/${item._id}`} state={{item:item}}><td className="py-2 px-4">{item.name}</td></Link>
                <td className="py-2 px-4"><img src={item.image} alt="user image" /></td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.age}</td>
                <td className="py-2 px-4">{item.gender}</td>
                <td className="py-2 px-4">{item.country}</td>
                <td className="py-2 px-4">
                  <button className="h-10 w-24 md:w-20 bg-red-600 text-white flex justify-center items-center rounded-[4px]" onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button className="h-10 w-24 md:w-20 bg-blue-600 text-white flex justify-center items-center rounded-[4px]">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetFormData;
