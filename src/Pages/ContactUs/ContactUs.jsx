import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      // Sending the form data to the backend API
      const response = await axiosPublic.post("/email", formData);

      if (response.status === 200) {
        // console.log("Form data successfully submitted", response.data);
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-168px)]">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 border rounded w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full py-2">
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
          <p>
            Your message has been successfully sent. We will get back to you
            shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
