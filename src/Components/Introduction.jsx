import React from "react";
import "./Introduction.css";
import image from "./image.jpg";

function Introduction() {
  return (
    <div className="card bg">
      <div id="intro" style={{ padding: "10px 15px " }}>
        <h1 className="text-center">Introduction</h1>
        <div className="row no-gutters">
          <div class="col-auto">
            <img src={image} alt="Image" />
          </div>
          <div class="col">
            <div class="card-block">
              <p>
                Economic Dispatch, or Economic Load Dispatch Problem is an
                intricate problem in the field of Power Systems. By
                definition, it deals with process by which the utility (grid
                operator) selects which of its generators it will use to meet
                the given/required electricity demand in the most optimal way.
              </p>
              <p>
                To understand this problem, simply speaking, let us see:
                <ul>
                  <li>
                    {" "}
                    'The idea is to minimize the cost of electricity generation'
                    without sacrificing quality and reliability.{" "}
                  </li>
                  <li>
                    {" "}
                    Therefore, the production cost is minimized by operating
                    plants economically.
                  </li>
                  <li>
                    {" "}
                    Since the load demand varies, the power generation must vary
                    accordingly to maintain the power balance.
                  </li>
                  <li>
                    {" "}
                    The turbine-governor must be controlled such that the demand
                    is met economically.{" "}
                  </li>
                </ul>
              </p>
              <p>
                Thus multiple choices would arise, which leads to this problem
                turning out to be nonlinear. To help optimize, an base algorithm
                is used to help determine power from each generator, while the
                generators are specified by the user (number of generators,
                minimum and maximum power generation allowed from each unit) and
                the computational model based on the algorithm returns the power
                generated from each unit, in the optimized way. A couple of
                things to be kept in mind: the total power, by virtue of setting
                limits upon each generator, should lie between the summation of
                minimum and maximum allowed powers of all generators.
              </p>
              <p>
                You can use the below given computational model created to
                optimize power generation and find the minimized cost of power
                generation for grid operation:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
