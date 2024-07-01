import React, { useState } from "react";

function Products({ item, price, imgSrc }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            <div className="col mb-5">
                
              <div className="card h-100">
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src={imgSrc}
                  alt="product image"
                />
                {/* Product details*/}
                
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{item}</h5>
                    {/* Product price*/}
                    {price}
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
          <h2>Popular right now: </h2>

              <div className="card h-100">
                {/* Sale badge*/}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale 
                </div>
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src={imgSrc}
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{item}</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill">Review 1</div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="#">
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Products;
