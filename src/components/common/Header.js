import React from "react";

function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand justify-content-center top-nav theme-dark py-4 px-sm-4 fixed-top flex-wrap">
        <div class="container-fluid">
          <div class="row justify-content-between align-items-center w-100 m-auto">
            <a
              href="/src/pages/landing/index.html"
              class="navbar-brand text-start m-0 col-xl-4"
            >
              <svg
                width="135"
                height="21"
                viewBox="0 0 135 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_10)">
                  <path
                    d="M47.4331 11.7297C50.3796 13.0351 53.4224 14.2838 52.9602 17.1216C52.4595 20.2054 47.8567 20.7919 44.0821 20.7919H43.177C37.9965 20.6595 35.3967 20.2432 35.3967 20.2432L35.6085 16.8946C35.6085 16.8946 39.1906 17.5378 42.58 17.6514C44.5058 17.7081 45.9117 17.6135 45.9502 16.9514C45.9887 16.3649 45.0258 16.0622 42.9844 15.2676L41.1934 14.5676C39.0365 13.6973 35.5122 12.4297 35.6856 9.51622C35.8589 6.67838 39.3446 5.78919 41.4245 5.50541C42.6378 5.33514 43.9088 5.27838 45.6806 5.2973C49.5707 5.33514 52.8446 6.03514 52.8446 6.03514L52.5365 9.15676C52.5365 9.15676 49.07 8.41892 45.5843 8.41892C43.3696 8.41892 42.6185 8.66486 42.503 9.04324C42.2911 9.70541 43.5236 10.1784 45.1413 10.8027L47.4331 11.7297ZM60.6634 14.3595V14.4162C60.6634 15.4378 61.5878 17.6324 66.1713 17.8027H66.4794C69.7726 17.8027 72.7961 17.1595 73.2968 17.0649C73.1235 18.1243 72.9117 19.5054 72.7961 20.1676C71.7754 20.4514 69.4067 21 65.6898 21C55.5985 21 54.366 16.2703 54.6356 13.073C54.9245 9.55405 58.3717 5.2973 65.2469 5.35405C65.9017 5.35405 66.5179 5.41081 67.0764 5.48649C68.6171 5.71351 75.1649 7.13243 73.8553 14.3784L60.6634 14.3595ZM68.6941 11.5027C68.6941 11.5027 68.9445 8.32432 65.0928 8.28649C62.4545 8.30541 61.2027 9.91351 60.9138 11.5027H68.6941ZM121.654 14.3595V14.4162C121.654 15.4378 122.579 17.6324 127.162 17.8027H127.47C130.763 17.8027 133.787 17.1595 134.288 17.0649C134.114 18.1243 133.902 19.5054 133.787 20.1676C132.766 20.4514 130.378 21 126.681 21C116.589 21 115.357 16.2703 115.626 13.073C115.915 9.55405 119.343 5.2973 126.218 5.35405C126.873 5.35405 127.489 5.41081 128.048 5.48649C129.589 5.71351 136.117 7.13243 134.827 14.3784L121.654 14.3595ZM129.685 11.5027C129.685 11.5027 129.935 8.32432 126.084 8.28649C123.445 8.30541 122.193 9.91351 121.905 11.5027H129.685ZM88.5493 10.7838C88.376 13.4514 87.9138 20.6595 87.9138 20.6595H93.9609L94.6156 10.6324C94.9045 6.07297 91.6306 5.73243 89.4545 5.52432C89.3004 5.50541 88.1642 5.41081 86.585 5.41081C86.1806 5.41081 85.7376 5.41081 85.2947 5.42973C81.5393 5.56216 76.7633 6.11081 76.7633 6.11081L75.8196 20.6405H81.8475L82.5793 8.85405C82.5793 8.85405 84.7362 8.55135 86.4309 8.62703C87.0087 8.64595 88.6841 8.62703 88.5493 10.7838ZM32.5272 0H27.5008L27.1927 3.95405H33.6635C33.6635 3.95405 33.8368 1.7027 33.856 1.32432C33.9331 0.435135 33.5672 0 32.5272 0V0ZM108.501 11.7297L106.19 10.7838C104.572 10.1405 103.34 9.66757 103.551 9.00541C103.667 8.64595 104.418 8.4 106.633 8.38108C110.118 8.38108 113.585 9.11892 113.585 9.11892L113.893 5.9973C113.893 5.9973 110.619 5.31622 106.729 5.25946C104.957 5.24054 103.686 5.2973 102.473 5.46757C100.412 5.75135 96.9074 6.64054 96.7341 9.47838C96.5607 12.373 100.085 13.6405 102.242 14.5297L104.033 15.2297C106.074 16.0243 107.037 16.327 106.999 16.9135C106.96 17.5568 105.554 17.6703 103.628 17.6135C100.239 17.5 96.657 16.8568 96.657 16.8568L96.4452 20.2054C96.4452 20.2054 99.045 20.6027 104.225 20.7541C104.534 20.7541 104.842 20.773 105.131 20.773C108.905 20.773 113.508 20.1865 114.009 17.1027C114.452 14.2838 111.447 13.0351 108.501 11.7297ZM17.7947 0L17.2169 7.22703H7.74191L8.22337 1.32432C8.24263 0.0567568 7.14491 0 6.60568 0H1.7141L0.0771484 20.6784H6.70197L7.43378 11.5216H16.9088L16.177 20.6784H22.7826L24.4003 0H17.7947ZM27.0579 5.63784L25.8831 20.6784H32.3539L33.5479 5.63784H27.0579Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_10">
                    <rect width="135" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <ul class="navbar-nav col-xl-4 d-none d-lg-flex justify-content-center p-0">
              <li class="nav-item dropdown-list-toggle me-4 me-xl-6">
                <a class="nav-link" href="#">
                  <span class="underline-on-hover">TV + AUDIO</span>
                </a>
                <div class="nav-dropdown-list">
                  <div class="container-fluid">
                    <div class="row align-items-center">
                      <div class="col-5">
                        <h3>TV + AUDIO</h3>
                        <div class="row">
                          <div class="col-6">
                            <h4>
                              <a href="#">
                                <span class="underline-on-hover">
                                  TELEVISIONS
                                </span>
                              </a>
                            </h4>
                            <ul>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">
                                    LASER TV
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">
                                    4K ULED
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">4K UHD</span>
                                </a>
                              </li>
                              <li>
                                <a href="/src/pages/tv-and-audio/tv/smart-tv-platforms/index.html">
                                  <span class="underline-on-hover">
                                    SMART TV PLATFORMS
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/src/pages/tv-and-audio/tv/all-tvs/index.html">
                                  <span class="underline-on-hover fw-bolder-700">
                                    ALL TVs
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <h4>
                              <a href="#">
                                <span class="underline-on-hover">
                                  HOME AUDIO
                                </span>
                              </a>
                            </h4>
                            <ul>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">
                                    2.0 CH SOUNDBARS
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">
                                    2.1 CH SOUNDBARS
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">
                                    3.1 CH SOUNDBARS
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover fw-bolder-700">
                                    ALL HOME AUDIO
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-7">
                        <div class="row">
                          <a href="#" class="col-6">
                            <img
                              src="/static/images/dropdown-tv-audio-1.png"
                              width="100%"
                              alt="featured image"
                            />
                          </a>
                          <a href="#" class="col-6">
                            <img
                              src="/static/images/dropdown-tv-audio-2.png"
                              width="100%"
                              alt="featured image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown-list-toggle mx-4 mx-xl-6">
                <a class="nav-link" href="#">
                  <span class="underline-on-hover">HOME APPLIANCES</span>
                </a>
                <div class="nav-dropdown-list">
                  <div class="container-fluid">
                    <div class="row align-items-center">
                      <div class="col-5 mb-8">
                        <h3>HOME APPLIANCES</h3>
                        <div>
                          <h4>
                            <a href="#">
                              <span class="underline-on-hover">
                                EXPLORE HOME APPLIANCES
                              </span>
                            </a>
                          </h4>
                          <ul>
                            <li>
                              <a href="#">
                                <span class="underline-on-hover">
                                  DISHWASHERS
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="underline-on-hover">
                                  BEVERAGE + WINE COOLERS
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="underline-on-hover">
                                  REFRIGERATORS
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-7">
                        <div class="row">
                          <a href="#" class="col-6">
                            <img
                              src="/static/images/dropdown-home-appliance-1.png"
                              width="100%"
                              alt="featured image"
                            />
                          </a>
                          <a href="#" class="col-6">
                            <img
                              src="/static/images/dropdown-home-appliance-2.png"
                              width="100%"
                              alt="featured image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown-list-toggle mx-4 mx-xl-6">
                <a class="nav-link" href="#">
                  <span class="underline-on-hover">AIR PRODUCTS</span>
                </a>
                <div class="nav-dropdown-list">
                  <div class="container-fluid">
                    <div class="row align-items-center">
                      <div class="col-5">
                        <h3>AIR PRODUCTS</h3>
                        <div>
                          <h4>
                            <a href="#">
                              <span class="underline-on-hover">
                                EXPLORE AIR PRODUCTS
                              </span>
                            </a>
                          </h4>
                          <ul>
                            <li>
                              <a href="#">
                                <span class="underline-on-hover">
                                  WINDOW AC
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="underline-on-hover">
                                  PORTABLE AC
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="underline-on-hover">
                                  DEHUMIDIFIERS
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="underline-on-hover">
                                  AIR PURIFIER
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="underline-on-hover fw-bolder-700">
                                  ALL AIR PRODUCTS
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-7">
                        <div class="row">
                          <a href="#" class="col-4">
                            <img
                              src="/static/images/dropdown-air-products-1.png"
                              width="100%"
                              alt="featured image"
                            />
                          </a>
                          <a href="#" class="col-4">
                            <img
                              src="/static/images/dropdown-air-products-2.png"
                              width="100%"
                              alt="featured image"
                            />
                          </a>
                          <a href="#" class="col-4">
                            <img
                              src="/static/images/dropdown-air-products-2.png"
                              width="100%"
                              alt="featured image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav align-items-center justify-content-end p-0 col-4">
              <li class="nav-item dropdown-list-toggle me-4 me-xl-6">
                <a class="nav-link" href="/src/pages/commercial/index.html">
                  <span class="underline-on-hover">COMMERCIAL</span>
                </a>
                <div class="nav-dropdown-list">
                  <div class="container-fluid">
                    <div class="row align-items-center">
                      <div class="col-5">
                        <h3>COMMERCIAL</h3>
                        <div class="row">
                          <div class="col-6">
                            <ul>
                              <li>
                                <a href="https://www.hisense-b2b.com">
                                  <span class="underline-on-hover">
                                    Commercial Displays
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/src/pages/commercial/index.html">
                                  <span class="underline-on-hover">
                                    Commercial Refrigerators
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown-list-toggle me-4 me-xl-6">
                <a class="nav-link" href="/src/pages/support/index.html">
                  <span class="underline-on-hover">SUPPORT</span>
                </a>
                <div class="nav-dropdown-list">
                  <div class="container-fluid">
                    <div class="row align-items-center">
                      <div class="col-5">
                        <h3>SUPPORT</h3>
                        <div class="row">
                          <div class="col-6">
                            <ul>
                              <li>
                                <a href="/src/pages/support/register/index.html">
                                  <span class="underline-on-hover">
                                    Register
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/src/pages/support/video-tutorials/index.html">
                                  <span class="underline-on-hover">
                                    Video Tutorials
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <h4>
                              <a href="/src/pages/support/faq/index.html">
                                <span class="underline-on-hover">FAQ</span>
                              </a>
                            </h4>
                            <ul>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">
                                    TV Products
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">
                                    Air Conditioners
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span class="underline-on-hover">
                                    Dehumidifiers
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item-button" data-button="search">
                <button
                  class="btn search-icon p-2"
                  onclick="openSearchBox()"
                  aria-label="search"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </li>
              <li class="nav-item-button" data-button="menu">
                <button
                  class="btn hamburger-icon p-2"
                  onclick="openSideNav()"
                  aria-label="hamburger menu toggler"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    class="hamburger-menu"
                    aria-hidden="true"
                  >
                    <path
                      class="bar bar-top"
                      d="M3.969 15.094h24v2h-24v-2z"
                    ></path>
                    <path
                      class="bar bar-middle"
                      d="M3.969 15.094h24v2h-24v-2z"
                    ></path>
                    <path
                      class="bar bar-bottom"
                      d="M3.969 15.094h24v2h-24v-2z"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="container-fluid">
          <form class="search-form col-12 col-sm-7">
            <button class="btn py-0" type="button" aria-label="search item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <input placeholder="SEARCH" class="search-box" type="text" />
          </form>
        </div>
      </nav>
      <div class="container-fluid home-top-advertisement">
        <a href="https://www.hisense-usa.com/product-safety-recall">
          Recall Information: French Door Refrigerator
        </a>
      </div>
      <nav class="navbar navbar-expand-xxxl navbar-bg side-nav fixed-top hidden">
        <ul class="navbar-nav d-flex d-lg-none">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle p-3 m-2"
              href="#"
              id="tv-audio-dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>TV + AUDIO</span>
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div
              class="dropdown-menu ps-6 pe-4"
              aria-labelledby="tv-audio-dropdown"
            >
              <span class="dropdown-item">LEARN MORE</span>
              <a class="dropdown-item" href="#">
                <span>LASER TV</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>4K ULED</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>4K UHD</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a
                class="dropdown-item"
                href="/src/pages/tv-and-audio/tv/smart-tv-platforms/index.html"
              >
                <span>SMART TV PLATFORMS</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a
                class="dropdown-item"
                href="/src/pages/tv-and-audio/tv/all-tvs/index.html"
              >
                <span>ALL TVs</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <span class="dropdown-item">SHOP TVs</span>
              <a
                class="dropdown-item"
                href="/src/pages/tv-and-audio/tv/all-tvs/index.html"
              >
                <span>ALL TVs</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle p-3 m-2"
              href="#"
              id="home-appliances-dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>HOME APPLIANCES</span>
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div
              class="dropdown-menu ps-6 pe-4"
              aria-labelledby="tv-audio-dropdown"
            >
              <span class="dropdown-item">SHOP REFRIGERATORS</span>
              <a class="dropdown-item" href="#">
                <span>FULL SIZE</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>COMPACT</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>FREEZERS</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>ALL BEVERAGE + WINE COOLERS</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>ALL REFRIGERATORS</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle p-3 m-2"
              href="#"
              id="air-products-dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>AIR PRODUCTS</span>
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div
              class="dropdown-menu ps-6 pe-4"
              aria-labelledby="tv-audio-dropdown"
            >
              <span class="dropdown-item">LEARN MORE </span>
              <a class="dropdown-item" href="#">
                <span>AIR PRODUCTS</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <span class="dropdown-item">SHOP AIR PRODUCTS</span>
              <a class="dropdown-item" href="#">
                <span>AIR PURIFIER</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>DEHUMIDIFIERS</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>PORTABLE AIR CONDITIONER</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>WINDOW AC</span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
              <a class="dropdown-item" href="#">
                <span>ALL AIR PRODUCTS </span>
                <i class="fa-solid fa-sm fa-chevron-left"></i>
              </a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav col-lg-6 offset-lg-6 position-relative my-lg-auto">
          <li class="nav-item my-1">
            <a
              class="nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3"
              href="/src/pages/company/index.html"
            >
              <span class="underline-on-hover">COMPANY</span>
            </a>
          </li>
          <li class="nav-item my-1">
            <a
              class="nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3"
              href="/src/pages/commercial/index.html"
            >
              <span class="underline-on-hover">COMMERCIAL</span>
            </a>
          </li>
          <li class="nav-item my-1">
            <a
              class="nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3"
              href="/src/pages/support/index.html"
            >
              <span class="underline-on-hover">SUPPORT</span>
            </a>
          </li>
          <li class="nav-item my-1">
            <a
              class="nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3"
              href="/src/pages/support/register/index.html"
            >
              <span class="underline-on-hover">REGISTER</span>
            </a>
          </li>
          <li class="nav-item my-1">
            <a
              class="nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3"
              href="/src/pages/contact/index.html"
            >
              <span class="underline-on-hover">CONTACT</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
