import React from "react";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="App ">
      <div className="bg-1 lg:bg-cover bg-center bg-pinky h-786">
        <div class="bg-white lg:pl-213 pl-6 h-16 flex items-center">
          <img
            className="float-left mt-1 mr-2"
            src={require("./images/bitmap_2.jpg")}
            srcSet={`${require("./images/bitmap_2@2x.jpg")} 2x, ${require("./images/bitmap_2@3x.jpg")} 3x`}
            alt="bitmap"
          />
          <p className="header-text leading-4">
            <span className="text-xs">Good Morning</span> <br />
            <span className="font-bold">Fellas</span>
          </p>
        </div>
        <div>
          <div className="pt-21 text-center">
            <p className="lg:text-xl text-mxl text-white font-black mb-5">
              WEEKEND FROM HOME
            </p>
            <p className="lg:text-md text-mmd text-white font-semibold italic mb-67">
              Stay active with a little workout.
            </p>
            <img
              class="absolute m-0 inline -ml-92"
              src={require("./images/bitmap.png")}
              srcSet={`${require("./images/bitmap@2x.png")} 2x, ${require("./images/bitmap@3x.png")} 3x`}
              alt="bitmap"
            />
            <div className="relative flex justify-center mt-272">
              <p className="text-mmd bg-white letsgo shadow-pinky pt-4">
                Let's Go
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pinky h-564 lg:mt-0 -mt-24">
        <div className="flex justify-end lg:pt-24 pt-0">
          <img
            src={require("./images/group-4.png")}
            srcSet={`${require("./images/group-4@2x.png")} 2x, ${require("./images/group-4@3x.png")} 3x`}
            alt="group-4"
          />
        </div>
        <div className="flex justify-center mb-10">
          <p className="lg:text-md text-mmd lg:tracking-tight tracking-wide font-medium lg:leading-8 text-right lg:px-374 px-8">
            <span className="text-richBlue">Deffinition;&nbsp;</span>a practice
            or exercise to test or improve one's fitness for athletic
            competition, ability, or performance to exhaust (something, such as
            a mine) by working to devise, arrange, or achieve by resolving
            difficulties. Merriam-Webster.com Dictionary.
            <br />
            <br />
            <span className="text-white font-semibold italic">
              -weekend team
            </span>
          </p>
        </div>
        <div className="inline-flex">
          <img
            className="pl-16 lg:pl-283 lg:float-left"
            src={require("./images/oval.svg")}
            alt="oval"
          />
          <p className="text-lg font-black text-white lg:pt-36 pt-92 lg:pl-247 lg:ml-0 -ml-123">
            Testimonial
          </p>
        </div>
      </div>
      <div className="bg-half flex justify-center">
        <div className="mt-16 pr-25 md:inline hidden">
          <img src={require("./images/oval-icon-copy.svg")} alt="oval-icon" />
        </div>
        <div className="mask">
          <div className="bg-white h-140 slide mr-3">
            <p className="font-black m-5 text-lg">Blu Kicks</p>
            <p className="text-xs m-5">
              Places where you can leverage tools and software to free up time
              to focus on growing the business.
            </p>
          </div>
          <div className="bg-white h-140 slide mr-3">
            <p className="font-black m-5 text-lg">Angelus</p>
            <p className="text-xs m-5">
              All those apps took me months to get running. Now the site
              practically runs itself!
            </p>
          </div>
          <div className="bg-white h-140 slide">
            <p className="font-black m-5 text-lg">SoYoung</p>
            <p className="text-xs m-5">
              Unless you have a truly unique product, it will be very hard to
              differentiate and gain brand traction
            </p>
          </div>
        </div>
        <div className="mt-16 pl-25 md:inline hidden">
          <img src={require("./images/oval-icon.svg")} alt="oval-icon" />
        </div>
      </div>
      <div className="bg-black">
        <div className="lg:text-center">
          <div className="pt-16">
            <p className="text-lg text-white mb-8 px-32 lg:px-0 font-black">
              POV
            </p>
          </div>
          <div className="flex justify-center">
            <div className="lg:text-sm text-msm px-32 lg:px-400 leading-6 lg:leading-1 lg:tracking-normal tracking-wide text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud ullamco laboris nisi ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:text-center">
          <div className="pt-16">
            <p className="text-lg text-white mb-8 px-32 lg:px-0 font-black">
              Resource
            </p>
          </div>
          <div className="flex justify-center">
            <div className="lg:text-sm text-msm px-32 lg:px-400 leading-6 lg:leading-1 lg:tracking-normal tracking-wide text-white">
              <p>
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best
              </p>
            </div>
          </div>
        </div>
        <div className="lg:text-center bg-path bg-black lg:bg-opacity-100 bg-opacity-0">
          <div className="lg:pt-100 pt-16">
            <p className="text-lg text-white mb-8 px-32 lg:px-0 font-black">
              Help & Tips
            </p>
          </div>
          <div class="px-32 lg:px-0 lg:flex justify-center text-left text-white font-bold text-msm">
            <div className="relative">
              <img
                className="lg:w-376 lg:311 h-176"
                src={require("./images/image.jpg")}
                srcSet={`${require("./images/image@2x.jpg")} 2x, ${require("./images/image@3x.jpg")} 3x`}
                alt="h&t"
              />
              <div className="flex bottom-0 h-18 absolute bg-black bg-opacity-50 w-full px-5">
                <p className="pt-17">Start quickly with simple steps</p>
                <img src={require("./images/oval-icon.svg")} alt="oval-icon" />
              </div>
            </div>

            <div className="relative">
              <img
                className="lg:mx-2 mx-0 lg:my-0 my-2 lg:w-376 lg:311 h-176"
                src={require("./images/image_2.jpg")}
                srcSet={`${require("./images/image_2@2x.jpg")} 2x, ${require("./images/image_2@3x.jpg")} 3x`}
                alt="h&t"
              />
              <div className="flex bottom-0 h-18 absolute bg-black bg-opacity-50 w-full px-5">
                <p className="pt-17">Run smoothly at vero eos et accusamus</p>
                <img src={require("./images/oval-icon.svg")} alt="oval-icon" />
              </div>
            </div>

            <div className="relative">
              <img
                className="lg:w-376 lg:311 h-176"
                src={require("./images/image_3.jpg")}
                srcSet={`${require("./images/image_3@2x.jpg")} 2x, ${require("./images/image_3@3x.jpg")} 3x`}
                alt="h&t"
              />
              <div className="flex bottom-0 h-18 absolute bg-black bg-opacity-50 w-full px-5">
                <p className="pt-17">Denounce with righteous indignation</p>
                <img src={require("./images/oval-icon.svg")} alt="oval-icon" />
              </div>
            </div>
          </div>
        </div>
        {/* lg:pb-203 md:pb-391 pb-366 */}
        <div className="lg:text-center lg:pt-123 pt-16 h-full pb">
        <img
              className="hidden lg:block float-left"
              src={require("./images/group-3.png")}
              srcSet={`${require("./images/group-3@2x.png")} 2x, ${require("./images/group-3@3x.png")} 3x`}
              alt="group-3"
            />
          <p className="text-lg text-white mb-8 lg:px-400 px-32 font-black">
            You're all set.
          </p>
          <p className="lg:text-sm text-msm lg:px-400 px-32 leading-6 lg:leading-1 lg:tracking-normal tracking-wide text-white">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
            <img
              className="lg:pt-0 pt-67 lg:hidden block"
              src={require("./images/group-3.png")}
              srcSet={`${require("./images/group-3@2x.png")} 2x, ${require("./images/group-3@3x.png")} 3x`}
              alt="group-3"
            />
          <div className="">
          </div>
        </div>
      </div>
      <div className="clear-both"></div>
      <div className="px-24 lg:px-213 bg-richBlue py-27 lg:py-24 flex justify-between">
        <p className="text-white text-msm">
          <span className="font-bold">wknd@</span>2020
        </p>
        <span class="border-solid border alpha border-white text-xxs text-center pt-125 text-white font-light">
          alpha version 1.0
        </span>
      </div>
    </div>
  );
}

export default App;
