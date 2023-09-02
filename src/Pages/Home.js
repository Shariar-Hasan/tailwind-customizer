import React from "react";
import { moreNavlinkData } from "../Datalist/NavbarData";
import CustomElementLink from "../Components/CommonComponents/CustomElementLink";
import { Link } from "react-router-dom";
import bannner from "./../Assets/web_banner.png";
import brand from "./../Assets/brand.png";
import FooterBottom from "../Components/Footer/FooterBottom";
const Home = () => {
  return (
    <div>
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 text-lg  text-justify font-normal">
            <div className="box p-8 ">
              <div className="container mx-auto px-4">
                <div className="text-center">
                  <img
                    src={bannner}
                    alt="Tailwind Cutomizer Banner"
                    className="mx-auto"
                  />
                </div>
                <h1 className="text-3xl text-center font-semibold mt-8">
                  Web Element Customization Tool
                </h1>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold">Table of Contents</h2>
                  <ul className="list-disc pl-6 mt-4">
                    <li>
                      <a
                        href="#introduction"
                        className="text-blue-600 hover:underline"
                      >
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a
                        href="#features"
                        className="text-blue-600 hover:underline"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#usage"
                        className="text-blue-600 hover:underline"
                      >
                        Usage
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contributing"
                        className="text-blue-600 hover:underline"
                      >
                        Contributing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#license"
                        className="text-blue-600 hover:underline"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>

                <section id="introduction" className="mt-8">
                  <h2 className="text-2xl font-semibold">Introduction</h2>
                  <p className="mt-4">
                    The Tailwind Customization Tool is a web application
                    designed to empower users to customize various web elements,
                    including buttons, divs as boxes, inputs, and more. It
                    provides an intuitive interface for adjusting design
                    parameters such as border styles, border radius, background
                    colors, margins, opacity levels, padding, and typography
                    settings. After customizing their chosen elements, users can
                    instantly generate the corresponding Tailwind CSS code,
                    simplifying the process of integrating their customized
                    designs into their web projects.
                  </p>
                  <p className="text-red-700 p-3 mb-3">
                    Note : This site is not responsive to any other devices than
                    laptop view.
                  </p>
                </section>

                <section id="features" className="mt-8">
                  <h2 className="text-2xl font-semibold">Features</h2>
                  <ul className="list-disc pl-6 mt-4">
                    <li>
                      <strong>Element Customization:</strong> Customize a wide
                      range of web elements, including buttons, divs, inputs,
                      and more.
                    </li>
                    <li>
                      <strong>Comprehensive Design Options:</strong> Access a
                      variety of design parameters, such as borders, border
                      radius, background colors, margins, opacity, padding, and
                      typography settings.
                    </li>
                    <li>
                      <strong>Real-Time Preview:</strong> See an instant preview
                      of your customized element as you make changes to design
                      parameters.
                    </li>
                    <li>
                      <strong>Code Generation:</strong> Generate CSS or Tailwind
                      CSS code that reflects the customized styles with a single
                      click.
                    </li>
                    <li>
                      <strong>User-Friendly Interface:</strong> Intuitive and
                      user-friendly interface that accommodates users with
                      varying levels of design expertise.
                    </li>
                  </ul>
                </section>

                <section id="usage" className="mt-8">
                  <h2 className="text-2xl font-semibold">Usage</h2>
                  <ol className="list-decimal pl-6 mt-4">
                    <li>
                      Choose a web element (e.g., button, box, input) that you
                      want to customize.
                    </li>
                    <li>
                      Use the intuitive interface to adjust design parameters
                      such as borders, background colors, margins, opacity,
                      padding, and typography.
                    </li>
                    <li>
                      Observe the real-time preview to see how your
                      customizations affect the element's appearance.
                    </li>
                    <li>
                      Once satisfied with your design, click the "Generate Code"
                      button to obtain the corresponding CSS or Tailwind CSS
                      code.
                    </li>
                    <li>
                      Copy the generated code and integrate it into your web
                      project.
                    </li>
                  </ol>
                </section>

                <section id="contributing" className="mt-8">
                  <h2 className="text-2xl font-semibold">Contributing</h2>
                  <p className="mt-4">
                    We welcome contributions to improve this project! To
                    contribute, please follow these steps:
                  </p>
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      <a
                        className="font-bold text-blue-600"
                        href="https://github.com/Shariar-Hasan/tailwind-customizer"
                      >
                        Fork this repository.
                      </a>
                    </li>
                    <li>
                      Create a new branch for your feature or bug fix:{" "}
                      <code className="bg-gray-700 text-white p-0.5 rounded">
                        git checkout -b your-feature-name
                      </code>
                      .
                    </li>
                    <li>
                      Make your changes and commit them with descriptive commit
                      messages.
                    </li>
                    <li>
                      Push your changes to your fork:{" "}
                      <code className="bg-gray-700 text-white p-0.5 rounded">
                        git push origin feature-name
                      </code>
                      .
                    </li>
                    <li>
                      Open a pull request to the{" "}
                      <code className="bg-gray-700 text-white p-0.5 rounded">
                        Colaboration
                      </code>{" "}
                      branch of this repository, describing your changes and
                      their purpose.
                    </li>
                  </ol>
                </section>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="box mb-3">
              <h1 className="text-2xl font-bold mb-8">Try Customizing : </h1>
              {moreNavlinkData.map((item) => (
                <Link to={"customize/" + item.routelink}>
                  <CustomElementLink item={item} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Home;
