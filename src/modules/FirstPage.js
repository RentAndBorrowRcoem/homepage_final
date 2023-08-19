import React from "react";
import image1 from "../images/bgimg.jpg";
import "./FirstPage.css";
function FirstPage() {
  return (
    <div>
      <div style={{ position: "relative", height: "100vh", width: "100%" }}>
        <img
          src={image1}
          alt="Background"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: "0.7",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          textAlign: "center",
          color: "white",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2 className="heading-2">More than 63 ads in 6 categories</h2>
        <h1 className="heading-1"> List or find anything, literally</h1>
        <div style={{ margin: 20 }} class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "75%",
          transform: "translateX(-50%)",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
            style={{ height: "100px", width: "100px" }}
            alt="Image 1"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
            style={{ height: "100px", width: "100px" }}
            alt="Image 2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
            style={{ height: "100px", width: "100px" }}
            alt="Image 3"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
            style={{ height: "100px", width: "100px" }}
            alt="Image 4"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
            style={{ height: "100px", width: "100px" }}
            alt="Image 5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
            style={{ height: "100px", width: "100px" }}
            alt="Image 6"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
