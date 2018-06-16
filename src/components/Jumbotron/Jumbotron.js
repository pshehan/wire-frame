//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";


const Jumbotron = () => (
	<header className = "header">
		<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Click on a different image and get a point! <i className="fas fa-arrow-circle-up"></i></h1>
    <p class="lead">Click on the same image and start over at zero. <i className="fas fa-arrow-circle-down"></i></p>
  </div>
</div>
	</header>
);




export default Jumbotron;
