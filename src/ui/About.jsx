import React from 'react';

function About() {
  return (
    <div className="lg:px-15 lg:mx-15  mx-5 mt-5  px-5 xl:mx-20 xl:px-20">
      <div className="my-10 ">
        <h1 className="mb-5 text-center text-2xl font-bold lg:text-3xl">
          About us
        </h1>
        <div className="mx-auto mb-10 mt-3 w-12 rounded-md border-[3px] border-yellow-500"></div>
        <p className="md:text-lg">
          Welcome to Opulence Guard, where tradition meets innovation in the
          world of banking. At Opulence Guard, we are dedicated to bringing a
          unique banking experience to the forefront. Our philosophy revolves
          around simplicity, logic, and a commitment to providing you with a
          banking solution that stands out in a crowded and complex landscape.
          Presenting our unique ideas.
        </p>
      </div>
      <div className="">
        <div className="mb-10 gap-2 md:flex">
          <h2 className="text-2xl font-black text-yellow-500 md:text-justify md:text-[50px] md:leading-[130px] lg:leading-[90px] xl:leading-[60px] ">
            Elevating Finance, Simplifying Lives Togethe
          </h2>
          <div className="my-4">
            <h2 className="text-xl font-bold lg:text-2xl">Who We Are</h2>
            <p className="md:text-lg lg:text-xl">
              Embark on your financial journey effortlessly with Opulence
              Guard's intuitive and secure registration process. Dive into the
              realm of luxury banking in just a few clicks, as our commitment to
              simplicity begins from the moment you join us.
              <br /> <br /> Navigate the corridors of convenience with Opulence
              Guard. Our user-friendly online banking platform ensures your
              financial activities flow smoothly, bringing opulence to every
              transaction. Experience a seamless and efficient way of managing
              your finances with us. Your Financial
            </p>
          </div>
        </div>
        <div className=" mb-10 gap-2 md:flex">
          <h2 className=" text-2xl font-black text-yellow-500 md:order-1 md:text-justify md:text-[50px] md:leading-[110px] lg:leading-[70px] ">
            Innovating Tradition, Redefining Your Wealth
          </h2>
          <div className="my-4">
            <h2 className="text-xl font-bold lg:text-2xl">How We Work</h2>
            <p className="md:text-lg lg:text-xl">
              At Opulence Guard, we bring a new-fashioned approach to banking,
              where logic prevails over unnecessary complexities. Our
              streamlined processes and advanced technology ensure that you
              experience banking the way it should be – straightforward,
              efficient, and secure.
              <br /> <br /> Join us on a journey where innovation meets
              tradition, and where your financial comfort is our top priority.
              Welcome to Opulence Guard, where simplicity and opulence coexist
              harmoniously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
