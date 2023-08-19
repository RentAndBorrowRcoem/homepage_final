import React from "react";

function SecondPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 50,
          marginLeft: 50,
          marginRight: 150,
        }}
      >
        <div>
          <h3 className="heading-2" style={{ marginBottom: 0 }}>
            Most popular
          </h3>
          <h1 className="heading-1" style={{ marginTop: 0 }}>
            <b>Categories</b>
          </h1>
        </div>
        <div
          style={{
            // position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <href></href> */}
          <a href="Browse Categories" style={{ color: "black" }}>
            <h2 className="heading-2">Browse Categories</h2>
          </a>
          <h3></h3>
          <div className="heading-2" style={{ margin: "20px" }}>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(65vh - 50px)", // Subtract the margin-top from the viewport height
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <img
            src="https://img.freepik.com/premium-photo/collection-different-makeup-products-arranged-artistic-display_193437-3721.jpg?w=2000"
            style={{ height: 325, width: 175 }}
            alt="Image 1"
          />
          <img
            src="https://www.leafio.ai/storage/articles/September2021/s09puKA9lTRDFtfqcqEc.jpg"
            style={{ height: 325, width: 175 }}
            alt="Image 2"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHD1g4bf3DFE3uFyofSjwy3jRlkPisinSjg&usqp=CAU"
            style={{ height: 325, width: 175 }}
            alt="Image 3"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pZChDEv9TjrqSTqxRg5D42-oVj-pPg9otw&usqp=CAU"
            style={{ height: 325, width: 175 }}
            alt="Image 4"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHD1g4bf3DFE3uFyofSjwy3jRlkPisinSjg&usqp=CAU"
            style={{ height: 325, width: 175 }}
            alt="Image 5"
          />
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pZChDEv9TjrqSTqxRg5D42-oVj-pPg9otw&usqp=CAU"
            style={{ height: 325, width: 175 }}
            alt="Image 6"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
