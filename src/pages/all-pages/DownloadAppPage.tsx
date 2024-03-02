import React from "react";

function DownloadAppPage() {
  return (
    <section className="py-3 py-lg-5 py-xl-8 " style={{backgroundColor:"#F5F3F2"}}>
      <div className="container overflow-hidden">
        <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
          <div className="col-12 col-lg-6 order-1 order-lg-0 app-download-section">
            <h1 className="small-heading-red-color mb-4">
              Studio in your hands
            </h1>
            <p className="small-heading-black-color mb-5">
              Download our Studio App to always stay connected
            </p>
            <div className="d-grid gap-2 d-sm-flex">
              <img
                className="img-fluid cursor-pointer z-2"
                loading="lazy"
                src="/images/landing-page/ic_mobile_download.svg"
                alt=""
              />
              <img
                className="img-fluid cursor-pointer z-2"
                loading="lazy"
                src="/images/landing-page/ic_ios_download.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center ">
            <div className="">
              <img
                className="img-fluid z-2"
                loading="lazy"
                src="/images/landing-page/ic_download_section.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadAppPage;
