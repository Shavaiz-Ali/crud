import {useState, useEffect, useCallback} from "react";
import axios from  "axios"
import UpdateContactModel from "./UpdateContactModel";
const Admin = () => {
    const [data, setData] = useState([]);
    const [updateContact, setUpdateContact] = useState(false);
    const [selectedContactId, setSelectedContactId] = useState(null);
    const fetchData = useCallback (async () => {
      try {
        const response = await axios.get("http://localhost:8000/contact");
        const result = response.data.contact;
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, []);
    useEffect(() => {
        fetchData()
      }, [fetchData]); 

      const handleDelete = async (id) => {
        try {
          const response = await axios.delete(`http://localhost:8000/contact/${id}`);
          if (response.status === 200) {
            fetchData();
          }
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      };
      const handleEdit = (id) => {
        setSelectedContactId(id);
        setUpdateContact(true);
      };
    
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Message
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item) =>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item._id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name}
                        </th>
                        <td className="px-6 py-4">
                            {item.email}
                        </td>
                        <td className="px-6 py-4">
                            {item.message}
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleEdit(item._id)}>Edit</button>
                            <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3" onClick={() => handleDelete(item._id)}>Remove</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    {updateContact && selectedContactId && (
        <UpdateContactModel
          setUpdateContact={setUpdateContact}
          id={selectedContactId}
        />
      )}
</div>
  )
}

export default Admin
