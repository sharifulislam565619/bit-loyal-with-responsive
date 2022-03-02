import React, { useState } from "react";
import "./Dashboard.css";
import Navigation from "../Navigation/Navigation";
import SoldOutBanner from "../SoldOutBanner/SoldOutBanner";
function Dashboard(props) {
  return (
    <div id="dashboard">
      <div id="home">
        <Navigation></Navigation>
        <DashboardInner></DashboardInner>
      </div>
    </div>
  );
}

export default Dashboard;

const DashboardInner = () => {
  const tab1Content = [
    {
      id: 1,
      img: require("../../images/nft_img/nft1.png"),
      name: "REAR",
      icon_count1: 5,
      icon_count2: 10,
    },
    {
      id: 2,
      img: require("../../images/nft_img/nft2.png"),
      name: "MYTHICAL",
      icon_count1: 6,
      icon_count2: 1,
    },
    {
      id: 3,
      img: require("../../images/nft_img/nft3.png"),
      name: "COMMUN",
      icon_count1: 5,
      icon_count2: 10,
    },
    {
      id: 4,
      img: require("../../images/nft_img/nft4.png"),
      name: "COMMUN",
      icon_count1: 5,
      icon_count2: 10,
    },
    {
      id: 5,
      img: require("../../images/nft_img/nft5.png"),
      name: "COMMUN",
      icon_count1: 5,
      icon_count2: 10,
    },
    {
      id: 6,
      img: require("../../images/nft_img/nft6.png"),
      name: "COMMUN",
      icon_count1: 5,
      icon_count2: 10,
    },
    {
      id: 7,
      img: require("../../images/nft_img/nft7.png"),
      name: "COMMUN",
      icon_count1: 5,
      icon_count2: 10,
    },
    {
      id: 8,
      img: require("../../images/nft_img/nft8.png"),
      name: "COMMUN",
      icon_count1: 5,
      icon_count2: 10,
    },
  ];
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div className="DashboardInner py-5">
      <h3 className="text-center">Dashboard</h3>

      <div className="container">
        <div className="tab_wrapper mt-3 mt-md-5">
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-3 mb-md-5">
            <div className="tab_btn_wrapper mb-3">
              <button
                onClick={() => setTabIndex(1)}
                className={`tab_btn ${tabIndex === 1 && "active_tab"}`}
              >
                Heroes
              </button>
              <button
                onClick={() => setTabIndex(2)}
                className={`tab_btn ${tabIndex === 2 && "active_tab"}`}
              >
                Trainers
              </button>
              <button
                onClick={() => setTabIndex(3)}
                className={`tab_btn ${tabIndex === 3 && "active_tab"}`}
              >
                Lands
              </button>
            </div>
            <div className="form_wrapper mb-3 ">
              <input type="text" placeholder="Search here..." />
              <svg
                className="search_icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                  stroke="#0BC2DC"
                  strokeOpacity="0.75"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="tab_content_wrapper">
            {tabIndex === 1 && (
              <div className="tab_card_wrapper">
                <div className="row gy-3">
                  {tab1Content.map((v) => {
                    return (
                      <div key={v.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card_wrapper">
                          <div className="card_title">
                            <img src={v.img} alt="img" />
                          </div>
                          <div className="card_content">
                            <h2 className="content_title">
                              <span style={{ "--round-bg": "#1F738A" }}>
                                {v.name}
                              </span>
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              <div className="box d-flex align-items-center">
                                <img
                                  src={require("../../images/bx_atom.png")}
                                  alt="img"
                                />
                                <b>{v.icon_count1}</b>
                              </div>
                              <div className="box d-flex align-items-center">
                                <img
                                  src={require("../../images/bx_add-to-queue.png")}
                                  alt="img"
                                />
                                <b>{v.icon_count2}</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {tabIndex === 2 && (
              <div className="tab_card_wrapper">
                <div className="row gy-3">
                  {tab1Content.map((v) => {
                    return (
                      <div key={v.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card_wrapper">
                          <div className="card_title">
                            <img src={v.img} alt="img" />
                          </div>
                          <div className="card_content">
                            <h2 className="content_title">
                              <span style={{ "--round-bg": "#1F738A" }}>
                                {v.name}
                              </span>
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              <div className="box d-flex align-items-center">
                                <img
                                  src={require("../../images/bx_atom.png")}
                                  alt="img"
                                />
                                <b>{v.icon_count1}</b>
                              </div>
                              <div className="box d-flex align-items-center">
                                <img
                                  src={require("../../images/bx_add-to-queue.png")}
                                  alt="img"
                                />
                                <b>{v.icon_count2}</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {tabIndex === 3 && (
              <div className="tab_card_wrapper">
                <div className="row gy-3">
                  {tab1Content.map((v) => {
                    return (
                      <div key={v.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card_wrapper">
                          <div className="card_title">
                            <img src={v.img} alt="img" />
                          </div>
                          <div className="card_content">
                            <h2 className="content_title">
                              <span style={{ "--round-bg": "#1F738A" }}>
                                {v.name}
                              </span>
                            </h2>
                            <div className=" d-flex justify-content-between align-items-center">
                              <div className="box d-flex align-items-center">
                                <img
                                  src={require("../../images/bx_atom.png")}
                                  alt="img"
                                />
                                <b>{v.icon_count1}</b>
                              </div>
                              <div className="box d-flex align-items-center">
                                <img
                                  src={require("../../images/bx_add-to-queue.png")}
                                  alt="img"
                                />
                                <b>{v.icon_count2}</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <nav aria-label="Page navigation example ">
          <ul className="pagination justify-content-center my-3 my-md-5">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
