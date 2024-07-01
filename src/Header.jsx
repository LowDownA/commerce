import React, { useState } from "react";
import { Link, Router, Route } from "react-router-dom";

function Header() {
    return (
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Exclusive Electronics</h1>
                    <p className="lead fw-normal text-white-50 mb-0">
                        The finest Electronics store in the world
                    </p>
                    <p className="placeholder-glow">
  <span className="placeholder col-12"></span>
</p>

<p className="placeholder-wave">
  <span className="placeholder col-12"></span>
</p>

                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p className="mb-0">"This would be my store of choice, if i was alive!"</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Albert Einstein <cite title="Source Title">2024</cite>
                        </figcaption>
                        
                    </figure>
                </div>
            </div>
        </header>
    );
}
export default Header;
