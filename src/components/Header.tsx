import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile,setIsMobike] = useState(false)

   useEffect(() => {
    const checkSize = () => setIsMobike(window.innerWidth <= 990)
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" onMouseLeave={()=>setIsPopupOpen(false)}>
        <div className="container-fluid">
          <a className="navbar-brand me-2" href="#">
            <Image
              src="/KoinbxLogo.svg"
              alt="KoinBX Logo"
              width={135}
              height={46}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            // tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Image
                  src="/KoinbxLogo.svg"
                  alt="KoinBX Logo"
                  width={135}
                  height={46}
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto">
                {!isMobile &&
                <li className="nav-item position-relative dice-box-container">
                  <span
                    className="nav-link dice-box"
                    onMouseEnter={() => setIsPopupOpen(true)}
                    onClick={() => setIsPopupOpen(false)}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90659 0C4.35169 0.152124 4.51695 0.469519 4.50944 0.929647C4.49207 1.84239 4.50474 2.75561 4.50381 3.66882C4.50381 4.19327 4.20003 4.49799 3.67701 4.49846C2.7286 4.49846 1.78036 4.49846 0.832269 4.49846C0.308771 4.49799 0.00640881 4.19374 0.0059393 3.66882C0.00500029 2.75561 0.0181465 1.84239 0.000305233 0.929647C-0.00814587 0.466702 0.158059 0.151655 0.603151 0H3.90659Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                      <path
                        d="M10.6542 0C11.0988 0.152124 11.2646 0.469519 11.2571 0.929647C11.2397 1.84239 11.2524 2.75561 11.2514 3.66882C11.2514 4.19327 10.9476 4.49799 10.4246 4.49846C9.47621 4.49846 8.52797 4.49846 7.57988 4.49846C7.05638 4.49846 6.75402 4.19374 6.75355 3.66882C6.75355 2.75561 6.76576 1.84239 6.74839 0.929647C6.73947 0.466702 6.90567 0.151655 7.35076 0L10.6542 0Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                      <path
                        d="M17.9999 3.90123C17.8469 4.34493 17.5328 4.51161 17.0698 4.50363C16.1567 4.48625 15.243 4.4994 14.3298 4.49846C13.8054 4.49846 13.5021 4.19421 13.5016 3.66976C13.5016 2.75655 13.5138 1.84286 13.4964 0.929648C13.4875 0.466702 13.6537 0.151655 14.0988 0H17.4023C17.5439 0.0417157 17.6728 0.118284 17.7772 0.222699C17.8817 0.327115 17.9582 0.456046 17.9999 0.597698V3.90123Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                      <path
                        d="M18.0003 10.6492C17.8472 11.0924 17.5336 11.2595 17.0702 11.2516C16.1575 11.2342 15.2443 11.2469 14.3311 11.2464C13.8062 11.2464 13.5024 10.9426 13.502 10.4191C13.502 9.4713 13.502 8.52303 13.502 7.57429C13.502 7.0503 13.8057 6.7484 14.3316 6.74793C15.2448 6.74793 16.1579 6.76014 17.0707 6.74277C17.5336 6.73385 17.8477 6.90147 18.0003 7.34516V10.6492Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                      <path
                        d="M18.0003 17.3971C17.8472 17.8403 17.5336 18.0075 17.0702 17.9995C16.1575 17.9821 15.2443 17.9948 14.3311 17.9943C13.8062 17.9943 13.5024 17.6905 13.502 17.167C13.502 16.2186 13.502 15.2703 13.502 14.3222C13.502 13.7982 13.8057 13.4963 14.3316 13.4959C15.2448 13.4959 16.1579 13.5081 17.0707 13.4907C17.5336 13.4818 17.8477 13.6494 18.0003 14.0931V17.3971Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                      <path
                        d="M4.50553 9.01472C4.50553 9.49504 4.50553 9.97536 4.50553 10.4552C4.50553 10.9351 4.18908 11.2449 3.70737 11.2459C2.73706 11.2478 1.76502 11.2478 0.791268 11.2459C0.321762 11.2459 0.00719279 10.9294 0.00578427 10.4637C0.00328024 9.4855 0.00328024 8.50749 0.00578427 7.52964C0.00578427 7.0634 0.32364 6.74977 0.792207 6.74836C1.77034 6.74648 2.74817 6.74648 3.72568 6.74836C4.18204 6.74836 4.49942 7.06575 4.50271 7.52119C4.50881 8.01934 4.50553 8.51703 4.50553 9.01472Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                      <path
                        d="M9.00847 6.74795C9.48831 6.74795 9.96861 6.74795 10.4489 6.74795C10.9396 6.74795 11.2518 7.05877 11.2527 7.54613C11.2527 8.5124 11.2527 9.47852 11.2527 10.4445C11.2527 10.9328 10.9386 11.2427 10.4484 11.2427C9.4822 11.2427 8.51596 11.2427 7.54972 11.2427C7.07082 11.2427 6.75625 10.9285 6.75531 10.4515C6.75344 9.48118 6.75344 8.50912 6.75531 7.53533C6.75531 7.0583 7.07035 6.74701 7.55019 6.74513C8.03002 6.74326 8.52206 6.74795 9.00847 6.74795Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                      <path
                        d="M2.26043 13.4958C2.74026 13.4958 3.22057 13.4958 3.70087 13.4958C4.19103 13.4958 4.50279 13.8071 4.50372 14.2964C4.50372 15.2626 4.50372 16.2288 4.50372 17.1947C4.50372 17.6825 4.18916 17.9929 3.69852 17.9929C2.73791 17.9929 1.77762 17.9929 0.817635 17.9929C0.315733 17.9934 0.00679839 17.6849 0.00585938 17.1844C0.00585938 16.2237 0.00585938 15.2634 0.00585938 14.3034C0.00585938 13.8034 0.316203 13.4972 0.819982 13.4958C1.29982 13.4949 1.78012 13.4958 2.26043 13.4958Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                      <path
                        d="M9.00894 13.4958C9.48925 13.4958 9.96955 13.4958 10.4494 13.4958C10.9395 13.4958 11.2518 13.8071 11.2527 14.294C11.2527 15.2603 11.2527 16.2265 11.2527 17.1928C11.2527 17.6802 10.9381 17.991 10.4475 17.991C9.48127 17.991 8.51518 17.991 7.54925 17.991C7.07035 17.991 6.75625 17.6764 6.75531 17.1989C6.75344 16.2286 6.75344 15.2567 6.75531 14.2832C6.75531 13.8057 7.07082 13.4953 7.55347 13.4935C8.03613 13.4916 8.523 13.4958 9.00894 13.4958Z"
                        fill={isPopupOpen ? "#59e1ff" : "#1E2329"}
                      />
                    </svg>
                  </span>
                  {isPopupOpen && (
                    <div className="popup row mt-3">
                      <div className="popup-content col-12 d-flex flex-wrap">
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">Trade Crypto</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Trade Cryptocurrencies Like a Pro on KoinBX
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">Download Android App</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Get KoinBX App Now! Trade cryptos on-the-go
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">Download iOS App</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Get KoinBX iOS App now! Trade cryptos on the go
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">List Your Crypto</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Boost exposure, list your crypto on KoinBX today!
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">Trade Contest</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Join KoinBX's Crypto Trade Contest to win big
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">Latest Insights</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Cutting-edge updates: KoinBX's latest insights
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">KoinBX Discussion</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Join KoinBX telegram group for discussions
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">KoinBX Announcement</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Join KoinBX telegram channel for the latest updates
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="col-4 p-4 py-3 popup-box"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <h6 className="popup-title">Raise a Ticket</h6>
                          <ul className="popup-list">
                            <li>
                              <a href="#" className="popup-link">
                                Get Assistance! Raise a support ticket for assistance
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
}
                <li className="nav-item fw-bold">
                  <a className="nav-link" href="#">
                    Markets
                  </a>
                </li>
                <li className="nav-item fw-bold">
                  <a className="nav-link" href="#">
                    Fees
                  </a>
                </li>
                <li className="nav-item fw-bold">
                  <a className="nav-link" href="#">
                    Trade
                  </a>
                </li>
                <li className="nav-item fw-bold">
                  <a className="nav-link" href="#">
                    List Your Crypto
                  </a>
                </li>
                <li className="nav-item fw-bold">
                  <a className="nav-link" href="#">
                    Earning
                  </a>
                </li>
              
              </ul>
              {isMobile && <>
              <div className="mt-3">
                <button className="btn btn-primary w-100 mb-2">Login</button>
                <button className="btn btn-primary w-100">Register</button>
              </div>
              <div className="mt-3">
                <a className="nav-link" href="#">
                  Theme
                </a>
                <a className="nav-link" href="#">
                  Download Apps
                </a>
              </div>
              </>}
            </div>
          </div>
          <div className="d-flex align-items-center ms-auto">
            <div className="position-relative d-flex align-items-center me-3">
              <span>
                <svg
                  height={35}
                  width={35}
                  xmlns="http://www.w3.org/2000/svg"
                  id="uuid-5ffc8b92-39be-403c-bc9d-2ce00ab31b50"
                  viewBox="0 0 94.58 94.58"
                >
                  <path
                    d="M12.46,42.3c1.64-.6,3.2-1.17,4.69-1.73l7.55,20.76c-1.5.53-3.07,1.1-4.7,1.69,0,0-4.06-.2-7.29-9.08-3.23-8.88-.25-11.64-.25-11.64Z"
                    fill="#03C5F6"
                    stroke-width="0"
                  />
                  <path
                    d="M19.49,39.7l7.57,20.8c.81-.28,1.59-.55,2.36-.82l6.88,18.91c.71,1.94,2.87,2.95,4.8,2.24l6.50-2.37c1.06-.38,1.88-1.22,2.25-2.29.38-1.08.25-2.24-.36-3.21l-10.25-16.48c11.16-3.36,17.02-3.95,22.41-3.21l-11.02-30.29c-4.79,5.28-11.68,9.34-31.15,16.71Z"
                    fill="#03C5F6"
                    stroke-width="0"
                  />
                  <path
                    d="M57.27,14.04c.58-.83,1.85-.63,2.21.35l5.96,16.38c1.95-.71,4.1.29,4.8,2.24.71,1.95-.29,4.1-2.24,4.80l5.96,16.38c.36.99-.48,1.95-1.46,1.69-3.04-.83-5.56-1.57-7.99-2.10l-12.01-33c1.53-1.97,2.97-4.15,4.77-6.74Z"
                    fill="#03C5F6"
                    stroke-width="0"
                  />
                  <path
                    d="M82.32,30.36l-6.26,2.24c-.82.29-1.74-.13-2.04-.94l-.04-.1c-.3-.81.13-1.71.95-2.01l6.26-2.24c.82-.29,1.74.13,2.04.94l.04.1c.3.81-.13,1.71-.95,2.01Z"
                    fill="#03C5F6"
                    stroke-width="0"
                  />
                  <path
                    d="M80.47,43.93l-6.04-2.77c-.79-.36-1.14-1.3-.77-2.08l.04-.09c.37-.78,1.32-1.12,2.11-.76l6.04,2.77c.79.36,1.14,1.3.77,2.08l-.04.09c-.37.78-1.32,1.12-2.11.76Z"
                    fill="#03C5F6"
                    stroke-width="0"
                  />
                  <path
                    d="M73.90,19.47l-2.81,5.95c-.37.78-1.32,1.12-2.11.76l-.09-.04c-.79-.36-1.14-1.3-.77-2.08l2.81-5.95c.37-.78,1.32-1.12,2.11-.76l.09.04c.79.36,1.14,1.3.77,2.08Z"
                    fill="#03C5F6"
                    stroke-width="0"
                  />
                </svg>
              </span>
              <div className="trad-link">
                <span className="badge bg-danger live-badge">Live +</span>
                <a className="btn me-2">Trade Contest</a>
              </div>
            </div>
            <button className="btn btn-deposit rounded-pill">Deposit</button>
            <button className="ms-3 btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                enable-background="new 0 0 32 32"
                id="Stock_cut"
                version="1.1"
              >
                <g>
                  <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="15"
                    stroke="#2d2d2d"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                  <path
                    d="M26,27L26,27c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
                    fill="none"
                    stroke="#000000"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                  <circle
                    cx="16"
                    cy="11"
                    fill="none"
                    r="6"
                    stroke="#000000"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </button>
            <button className="ms-1 btn">
              <svg
                height={28}
                width={28}
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 122.88 120.89"
              >
                <title>download-file</title>
                <path
                  d="M84.58,47a7.71,7.71,0,1,1,10.8,11L66.09,86.88a7.72,7.72,0,0,1-10.82,0L26.4,58.37a7.71,7.71,0,1,1,10.81-11L53.1,63.12l.16-55.47a7.72,7.72,0,0,1,15.43.13l-.15,55L84.58,47ZM0,113.48.1,83.3a7.72,7.72,0,1,1,15.43.14l-.07,22q46,.09,91.91,0l.07-22.12a7.72,7.72,0,1,1,15.44.14l-.1,30h-.09a7.71,7.71,0,0,1-7.64,7.36q-53.73.1-107.38,0A7.7,7.7,0,0,1,0,113.48Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;