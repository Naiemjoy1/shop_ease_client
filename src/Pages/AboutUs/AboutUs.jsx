import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-168px)]">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="mb-4">
            Welcome to ShopEase, your one-stop destination for the best products
            online. We are a team of passionate individuals committed to
            bringing you the highest quality products at competitive prices.
          </p>
          <p className="mb-4">
            Our mission is to provide a seamless shopping experience with a wide
            variety of products. Whether you are looking for the latest gadgets,
            fashion, or home essentials, we have it all.
          </p>
          <p>
            Founded in 2021, we have grown from a small startup to a thriving
            online store, thanks to our customers' trust and support.
          </p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            At ShopEase, our vision is to become the leading e-commerce platform
            where customers can find everything they need with just a few
            clicks. We strive to offer the best customer service and ensure that
            our customers are satisfied with every purchase.
          </p>
          <p>
            We believe in innovation, quality, and customer satisfaction. Our
            team works tirelessly to update our inventory with the latest trends
            and products, ensuring that you always find what you are looking
            for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
