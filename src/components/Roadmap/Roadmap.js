import React from "react";
import img1 from "../../images/roadmap/Group 1.png";
import img2 from "../../images/roadmap/Group 2.png";
import img3 from "../../images/roadmap/Group 3.png";
import img4 from "../../images/roadmap/Group 4.png";
import img5 from "../../images/roadmap/Group 5.png";
import img6 from "../../images/roadmap/Group 6.png";
import img7 from "../../images/roadmap/Group 7.png";
import img8 from "../../images/roadmap/Group 8.png";
import "./Roadmap.css";

const Roadmap = () => {
  const nft_img_object = [
    {
      id: 1,
      img: require("../../images/nft/nft1.png"),
      bg: "#06C1D4",
    },
    {
      id: 2,
      img: require("../../images/nft/nft2.png"),
      bg: "#5A0451",
    },
    {
      id: 3,
      img: require("../../images/nft/nft3.png"),
      bg: "#787DFF",
    },
    {
      id: 4,
      img: require("../../images/nft/nft4.png"),
      bg: "#285E25",
    },
    {
      id: 5,
      img: require("../../images/nft/nft5.png"),
      bg: "#76054B",
    },

    {
      id: 6,
      img: require("../../images/nft/nft6.png"),
      bg: "#5FF0A2",
    },

    {
      id: 7,
      img: require("../../images/nft/nft7.png"),
      bg: "#0B8458",
    },
    {
      id: 8,
      img: require("../../images/nft/nft8.png"),
      bg: "#B64A58",
    },
  ];

  const StarSvg = () => {
    return (
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        className="me-3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 0L18.1911 10.8089L29 14.5L18.1911 18.1911L14.5 29L10.8089 18.1911L0 14.5L10.8089 10.8089L14.5 0Z"
          fill="url(#paint0_radial_27_2401)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_27_2401"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(14.5 14.5) rotate(90) scale(14.5)"
          >
            <stop stopColor="#FFE814" />
            <stop offset="1" stopColor="#FFA114" />
          </radialGradient>
        </defs>
      </svg>
    );
  };
  return (
    <div id="roadmap_section" className="roadmap container my-5 py-5">
      <div className="row gy-5">
        <div className="roadmap-details col-12 col-xl-6 px-5">
          <h1>Roadmap</h1>
          <p>
            <small>
              This roadmap outlines our goals and where we want to take ROYAL.
              We have a lot of ideas and concepts that we are working on.{" "}
            </small>
          </p>

          <div className="roadmap-years mx-auto mx-xl-0 text-white mb-5">
            <div className="text-start ps-3 mt-2">
              <div className="d-flex align-items-center">
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={6} cy={6} r={6} fill="#FF14B1" />
                </svg>
                <p className="mb-0 ps-4">
                  <span style={{ color: "#FF14B1" }}>Q1</span> /{" "}
                  <span style={{ color: "#FFFF14" }}>2022</span>
                </p>
              </div>
            </div>
            <div className="ps-4 my-3">
              <ul className="text-start ">
                <li className="mb-3">
                  {" "}
                  <StarSvg></StarSvg> Project Introduction
                </li>
                <li className="mb-3">
                  <StarSvg></StarSvg>
                  1st NFT Sale
                </li>
                <li className="mb-3">
                  <StarSvg></StarSvg> IDO
                </li>
                <li className="mb-3">
                  <StarSvg></StarSvg> 2st NFT Sale
                </li>
                <li className="mb-3">
                  <StarSvg></StarSvg> Alpha Test
                </li>
              </ul>
            </div>
          </div>
          <div className="roadmap-years mx-auto mx-xl-0 text-white mb-5">
            <div className="text-start ps-3 mt-2">
              <div className="d-flex align-items-center">
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={6} cy={6} r={6} fill="#FF14B1" />
                </svg>
                <p className="mb-0 ps-4">
                  <span style={{ color: "#FF14B1" }}>Q2</span> /{" "}
                  <span style={{ color: "#FFFF14" }}>2022</span>
                </p>
              </div>
            </div>
            <div className="ps-4 my-3">
              <ul className="text-start">
                <li className="mb-3">
                  <StarSvg></StarSvg>Smart Contract Audit
                </li>

                <li className="mb-3">
                  <StarSvg></StarSvg>Lands Sale
                </li>

                <li className="mb-3">
                  <StarSvg></StarSvg>Marketing Campaing
                </li>

                <li className="mb-3">
                  <StarSvg></StarSvg>Launch ROYAL token
                </li>

                <li className="mb-3">
                  <StarSvg></StarSvg>PVE Game Launch
                </li>
              </ul>
            </div>
          </div>
          <div className="roadmap-years mx-auto mx-xl-0 text-white mb-5">
            <div className="text-start ps-3 mt-2">
              <div className="d-flex align-items-center">
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={6} cy={6} r={6} fill="#FF14B1" />
                </svg>

                <p className="mb-0 ps-4">
                  <span style={{ color: "#FF14B1" }}>Q3</span> /{" "}
                  <span style={{ color: "#FFFF14" }}>2022</span>
                </p>
              </div>
            </div>
            <div className="ps-4 my-3">
              <ul className="text-start">
                <li className="mb-3">
                  <StarSvg></StarSvg>PVP Game Launch
                </li>

                <li className="mb-3">
                  <StarSvg></StarSvg>Add Staking
                </li>

                <li className="mb-3">
                  <StarSvg></StarSvg>2st Project Launch
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="row g-0">
            {nft_img_object.map((v) => {
              return (
                <div className="col-3 col-md-6 h-auto" key={v.id}>
                  <div
                    className="col_wrapper h-100 w-100"
                    style={{ background: v.bg }}
                  >
                    <img className="w-100 h-100" src={v.img} alt="img" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
