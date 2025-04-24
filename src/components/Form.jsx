import React, { useState } from "react";

export default function StudentVerification() {
  const [formData, setFormData] = useState({
    studentId: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0078FF] text-white p-4">
      <div className="w-full max-w-md flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col mt-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Tələbə iştirak yoxlaması</h1>
            <p className="text-xl">Müvafiq xanaları doldurun</p>
          </div>

          <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
            <div className="mb-6">
              <label htmlFor="studentId" className="block text-xl mb-2">
                Tələbə ID
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                placeholder="Sizə verilən ID yazın"
                value={formData.studentId}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#0078FF] border-2 border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="firstName" className="block text-xl mb-2">
                Adınız
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Adınızı yazın"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#0078FF] border-2 border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="lastName" className="block text-xl mb-2">
                Soyadınız
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Soyadınızı yazın"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#0078FF] border-2 border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
            </div>

            <div className="mt-auto mb-8">
              <button
                type="submit"
                className="w-full p-4 bg-white text-[#0078FF] rounded-lg text-xl font-medium hover:bg-white/90 transition-colors"
              >
                Göndər
              </button>
            </div>
          </form>

          {/* Logo */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-48 h-24 relative">
              <img
                src="/img/assets/logo/Aztu.png"
                alt="Azerbaijan Technical University"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
