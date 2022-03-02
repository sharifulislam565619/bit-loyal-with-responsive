import React, { useState } from "react";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import img4 from "../../images/icon/image 7.png";
import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar_wrapper" style={{ top: "-14px", zIndex: 1000 }}>
      <nav className="navbar navbar-expand-xl  bg-transparent">
        <div className="container-fluid">
          <div className="mobile_brand_toggle align-items-center d-flex justify-content-between align-items-center flex-grow-1 ">
            <Link className="navbar-brand" to="/">
              <img src={require('../../images/logo.png')} alt="logo" />
            </Link>

            <button
              onClick={() => setToggle(!toggle)}
              className="shadow-0 text-white border-0 bg_transparent d-xl-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {toggle ? (
                <svg
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.39956 7.98535L1.41421 0L0 1.41421L7.98535 9.39956L0.414312 16.9706L1.82853 18.3848L9.39956 10.8138L16.9706 18.3848L18.3848 16.9706L10.8138 9.39956L18.7991 1.41425L17.3849 3.76701e-05L9.39956 7.98535Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={19}
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0.59082H24V2.63158H0V0.59082ZM0 8.75386H24V10.7946H0V8.75386ZM24 16.9169H0V18.9577H24V16.9169Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-xl-none">
                <button
                  className="btn mb-2 rounded-pill btn-lg wallet_connection_mobile"
                  data-bs-toggle="modal"
                  data-bs-target="#walletConnectionModal"
                >
                  Wallet Connection
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#about_section"
                >
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  rel=""
                  aria-current="page"
                  href="#token_section"
                >
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  rel="no"
                  aria-current="page"
                  href="#roadmap_section"
                >
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  rel="no"
                  aria-current="page"
                  href="#faq_section"
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  rel="no"
                  aria-current="page"
                  href="#footer"
                >
                  Contacts
                </a>
              </li>
              <li className="nav-item nav-item-no-after">
                <div className="d-flex align-items-center nav_icon_wrapper">
                  <a className="nav-link icon_nav_link" href="#">
                    <svg
                      width={44}
                      height={44}
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.2"
                        x="0.5"
                        y="0.5"
                        width={43}
                        height={43}
                        rx="21.5"
                        stroke="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 25.125C23.7259 25.125 25.125 23.7259 25.125 22C25.125 20.2741 23.7259 18.875 22 18.875C20.2741 18.875 18.875 20.2741 18.875 22C18.875 23.7259 20.2741 25.125 22 25.125ZM22 27C24.7614 27 27 24.7614 27 22C27 19.2386 24.7614 17 22 17C19.2386 17 17 19.2386 17 22C17 24.7614 19.2386 27 22 27Z"
                        fill="white"
                      />
                      <path
                        d="M27.9999 17C27.9999 17.5523 27.5522 18 26.9999 18C26.4477 18 25.9999 17.5523 25.9999 17C25.9999 16.4477 26.4477 16 26.9999 16C27.5522 16 27.9999 16.4477 27.9999 17Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26 14H18C15.7909 14 14 15.7909 14 18V26C14 28.2091 15.7909 30 18 30H26C28.2091 30 30 28.2091 30 26V18C30 15.7909 28.2091 14 26 14ZM18 12C14.6863 12 12 14.6863 12 18V26C12 29.3137 14.6863 32 18 32H26C29.3137 32 32 29.3137 32 26V18C32 14.6863 29.3137 12 26 12H18Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="nav-link icon_nav_link" href="#">
                    <svg
                      width={44}
                      height={44}
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.2"
                        x="0.5"
                        y="0.5"
                        width={43}
                        height={43}
                        rx="21.5"
                        stroke="white"
                      />
                      <path
                        d="M29.9511 16.3177C28.0474 14.8208 25.0358 14.5671 24.9069 14.558C24.707 14.5415 24.5165 14.6511 24.4343 14.8318C24.4268 14.8427 24.3614 14.9906 24.2886 15.2206C25.5477 15.4287 27.0946 15.8467 28.4939 16.6955C28.7181 16.8306 28.7872 17.119 28.6489 17.3381C28.5574 17.4823 28.4023 17.5608 28.2417 17.5608C28.1557 17.5608 28.0679 17.537 27.9895 17.4896C25.5832 16.0311 22.5791 15.9581 22 15.9581C21.4209 15.9581 18.4149 16.0311 16.0105 17.4896C15.7863 17.6265 15.4912 17.5589 15.3529 17.3399C15.2128 17.119 15.2819 16.8324 15.5061 16.6955C16.9054 15.8485 18.4523 15.4287 19.7114 15.2224C19.6386 14.9906 19.5732 14.8446 19.5676 14.8318C19.4835 14.6511 19.2948 14.5379 19.0931 14.558C18.9642 14.5671 15.9526 14.8208 14.0228 16.3377C13.0158 17.2486 11 22.5715 11 27.1734C11 27.2556 11.0224 27.334 11.0635 27.4052C12.4535 29.7929 16.2478 30.4172 17.1128 30.4446C17.1165 30.4446 17.1221 30.4446 17.1277 30.4446C17.2809 30.4446 17.4248 30.3734 17.5144 30.2529L18.3888 29.0773C16.0292 28.4822 14.8242 27.471 14.7551 27.4107C14.5571 27.2409 14.5384 26.9452 14.714 26.7517C14.8877 26.5582 15.1904 26.54 15.3884 26.7098C15.4164 26.7353 17.6359 28.5753 22 28.5753C26.3716 28.5753 28.591 26.728 28.6135 26.7098C28.8115 26.5418 29.1123 26.5582 29.2879 26.7536C29.4616 26.9471 29.4429 27.2409 29.2449 27.4107C29.1758 27.471 27.9708 28.4822 25.6112 29.0773L26.4856 30.2529C26.5752 30.3734 26.7191 30.4446 26.8723 30.4446C26.8779 30.4446 26.8835 30.4446 26.8872 30.4446C27.7522 30.4172 31.5465 29.7929 32.9365 27.4052C32.9776 27.334 33 27.2556 33 27.1734C33 22.5715 30.9842 17.2486 29.9511 16.3177ZM18.8913 25.3042C17.9665 25.3042 17.2174 24.4681 17.2174 23.435C17.2174 22.4018 17.9665 21.5657 18.8913 21.5657C19.8161 21.5657 20.5652 22.4018 20.5652 23.435C20.5652 24.4681 19.8161 25.3042 18.8913 25.3042ZM25.1087 25.3042C24.1839 25.3042 23.4348 24.4681 23.4348 23.435C23.4348 22.4018 24.1839 21.5657 25.1087 21.5657C26.0335 21.5657 26.7826 22.4018 26.7826 23.435C26.7826 24.4681 26.0335 25.3042 25.1087 25.3042Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="nav-link icon_nav_link" href="#">
                    <svg
                      width={44}
                      height={44}
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.2"
                        x="0.5"
                        y="0.5"
                        width={43}
                        height={43}
                        rx="21.5"
                        stroke="white"
                      />
                      <path
                        d="M32 16.2981C31.2627 16.6254 30.4724 16.8451 29.6416 16.9449C30.4896 16.4368 31.1411 15.6327 31.4467 14.6758C30.6548 15.1449 29.7741 15.4862 28.8405 15.6701C28.0923 14.8721 27.0261 14.375 25.8462 14.375C23.5798 14.375 21.742 16.2109 21.742 18.4769C21.742 18.7979 21.7794 19.1111 21.8496 19.4119C18.4391 19.2405 15.4167 17.6072 13.3919 15.1246C13.0381 15.7324 12.837 16.4368 12.837 17.188C12.837 18.6109 13.5603 19.867 14.6623 20.6041C13.9889 20.5823 13.3561 20.3969 12.8027 20.0899C12.8027 20.107 12.8027 20.1241 12.8027 20.1413C12.8027 22.1299 14.2181 23.7865 16.0932 24.1652C15.7503 24.2587 15.3871 24.3086 15.013 24.3086C14.748 24.3086 14.4908 24.2837 14.2399 24.2338C14.7636 25.8624 16.2787 27.0515 18.0728 27.0842C16.6699 28.1845 14.9008 28.839 12.9773 28.839C12.6453 28.839 12.3195 28.8203 12 28.7813C13.8144 29.9471 15.9716 30.625 18.2895 30.625C25.8368 30.625 29.9643 24.374 29.9643 18.9537C29.9643 18.7761 29.9596 18.5969 29.9534 18.4223C30.7546 17.8441 31.4498 17.121 32 16.2981Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </li>

              <div className="wallet ms-3 d-none d-xl-flex align-items-center">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#walletConnectionModal"
                >
                  Wallet Connection
                </a>
                <img src={img4} alt="" />
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <ConnectionModal></ConnectionModal>
    </div>
  );
};

export default Navigation;

function ConnectionModal() {
  const modal_object_data = [
    {
      id: 1,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 2,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 3,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 4,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 5,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 6,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 7,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 8,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },

    {
      id: 9,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 10,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 11,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
    {
      id: 12,
      img: require("../../images/nft/nft1.png"),
      name: "Monkey",
      tags: "#Common",
      price: "0.90",
    },
  ];
  return (
    <div
      className="modal fade"
      id="walletConnectionModal"
      tabIndex={-1}
      aria-labelledby="walletConnectionModalLabel"
      aria-hidden="true"
    >
      <div  className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
        <div className="modal-content  p-3 p-md-5">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="walletConnectionModalLabel">
              MY COLLECTION (5)
            </h5>
            <button
              type="button"
              className="border-0 outline-0 bg_transparent m-0 p-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9 10.9592L1.94083 0L0 1.94083L10.9592 12.9L0.569255 23.29L2.51009 25.2308L12.9 14.8409L23.29 25.2308L25.2308 23.29L14.8409 12.9L25.8001 1.94084L23.8592 2.32458e-06L12.9 10.9592Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="modal-body  p-3 px-md-5">
            <div className="row g-3 g-xl-5">
              {modal_object_data.map((v) => {
                return (
                  <div key={v.id} className="col-6 col-md-4 col-xl-3">
                    <div className="col_wrapper">
                      <div className="card w-100 bg_transparent">
                        <img src={v.img} className="card-img-top" alt="img" />
                        <div className="card-body">
                          <div className="d-flex justify-content-between card_content">
                            <div className="box text-start">
                              <h6 className="mb-0 p-0">{v.name}</h6>
                              <span className="common">{v.tags}</span>
                            </div>
                            <div className="box price_box">
                              <span>{v.price}</span>
                              <span>ETH</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
