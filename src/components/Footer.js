import React from "react";

function Footer() {
  return (
    <div>
      <div className="container my-5">
        <footer
          className="text-center text-lg-start text-black"
        >
          <section
            className="d-flex justify-content-between p-4"
          >


            <div>
              <a href="" className="text-black me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Nirma University, Ahmedabad</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                  />
                  <p>
                    Follow us on any of our social media to know more about us.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Contact our departments</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                  />
                  <p>
                    <a href="#!" className="text-black">
                      ITNU
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">
                      ILNU
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">
                      Architecture
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">
                      Management
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">
                      Pharmacy
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                  />
                  <p>
                    <a href="#!" className="text-black">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">
                      Apply For Admission
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> S.G Highway
                  </p>


                  <p>
                    <i className="fas fa-home mr-3"></i>Email: nirmauniversity@gmail.com
                  </p>  <p>
                    <i className="fas fa-home mr-3"></i> +91 3451231234
                  </p>  <p>
                    <i className="fas fa-home mr-3"></i>  +91 9090903430
                 
                 </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
          >
            © 2022 Copyright
            {/* <a className="text-black" href="">
              MDBootstrap.com
            </a> */}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
