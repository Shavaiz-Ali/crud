import {useState} from "react"
import axios from "axios"
const Contact = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: ""
  });

  const onChange = (e) => {
    setFormdata({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
        try {
           const data =  await axios.post("http://localhost:8000/contact", formData);
           console.log(data)
            // Reset the form data to its initial state
            setFormdata({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
  }

  const {name, email, message} = formData
  return (
    <div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            value={message}
            onChange={onChange}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
        <div>
          <button type="submit"
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Contact
