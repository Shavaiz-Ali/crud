import { useState } from "react";
import axios from "axios"
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: "",
        age: 0,
        country: "",
        gender: "",
    });

    const onChange = (e) => {
        // If the input is a radio button (gender)
        if (e.target.type === "radio") {
            setFormData({ ...formData, gender: e.target.value });
        } else {
            // For other input types
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/newUsers", formData);
            // Reset the form data to its initial state
            setFormData({
                name: "",
                email: "",
                age: 0,
                country: "",
                gender: "",
                image: ""
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const { name, email, age, country, gender, image } = formData;

    return (
        <div className="flex justify-center items-center h-[100vh] my-[20px]">
            <form className="border px-[15px] py-[10px] flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="name" className="text-[16px] font-[500] text-[#131313]">
                        Name <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id="name"
                        className="border text-[14px] font-[400] w-[350px] h-[45px] outline-none px-2"
                        placeholder="Enter Your Name"
                        onChange={onChange}
                    />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="email" className="text-[16px] font-[500] text-[#131313]">
                        Email <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        id="email" 
                        className="border text-[14px] font-[400] w-[350px] h-[45px] outline-none px-2"
                        placeholder="Enter Your Email"
                        onChange={onChange}  
                    />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="age" className="text-[16px] font-[500] text-[#131313]">
                        Age <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="number"
                        name="age"
                        value={age}
                        id="age" 
                        className="border text-[14px] font-[400] w-[350px] h-[45px] outline-none px-2"
                        placeholder="Enter Your Age"
                        onChange={onChange}  
                    />
                </div>
                 <div className="flex flex-col items-start gap-2">
                    <label htmlFor="country" className="text-[16px] font-[500] text-[#131313]">
                        Country <span className="text-red-600">*</span>
                    </label>
                    <select
                        name="country"
                        value={country}
                        id="country"
                        className="border text-[14px] font-[400] w-[350px] h-[45px] outline-none px-2"
                        placeholder="Select Your Country"
                        onChange={onChange} 
                    >
                        <option value="Select Your Country">Select Your Country</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                    </select>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label className="text-[16px] font-[500] text-[#131313]">
                        Gender <span className="text-red-600">*</span>
                    </label>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <input type="radio" name="gender" id="male" value="male" onChange={onChange} />
                            <label htmlFor="male" className="text-[16px] font-[500] text-[#131313]">
                                Male
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="radio" name="gender" id="female" value="female" onChange={onChange} />
                            <label htmlFor="female" className="text-[16px] font-[500] text-[#131313]">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="age" className="text-[16px] font-[500] text-[#131313]">
                        Image <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        value={image}
                        id="image" 
                        className="border text-[14px] font-[400] w-[350px] h-[45px] outline-none px-2"
                        placeholder="Add your image URL"
                        onChange={onChange}  
                    />
                </div>
                <button type="submit" className="h-[45px] w-[120px] bg-gray-600/[0.35] rounded-[4px]">Submit</button>
            </form>
        </div>
    );
};

export default Form;
