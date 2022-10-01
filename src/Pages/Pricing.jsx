import React from "react";
import { useState } from "react";
import "../Styles/Price.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Components/Footer";
const data = [
  {
    title: "Time tracking",
  },
  {
    title: "Unlimited projects and clients",
  },
  {
    title: "Timer button in 50+ web apps",
  },
  {
    title: "Calendar integrations: Google, Outlook",
  },
  {
    title: "Billable rates and money tracking",
  },
  {
    title: "Budgeting for projects",
  },
  {
    title: "Invoicing",
  },
  {
    title: "Task management",
  },
  {
    title: "Activity levels for employees",
  },
  {
    title: "Apps and sites usage reports",
  },
  {
    title: "Screenshots capturing",
  },
  {
    title: "Paid time off tracking",
  },
  {
    title: "Payroll for employees",
  },
  {
    title: "Time tracking permissions",
  },
  {
    title: "Time-sync with Jira and QuickBooks",
  },
  {
    title: "Time Off Calendar",
  },
  {
    title: "Work Schedule",
  },
  {
    title: "Work Schedule",
  },
];

const Price = () => {
  const [teamSize, setTeamSize] = useState(1);

  return (
    <>
      <Navbar />
      <div>
        <div className="price-header">
          <h1> Pricing</h1>
          <p>All plans include free 30-day trial. No credit card required!</p>
        </div>
        <div>
          <div className="toggler">
            <div className="input-div">
              <span
                style={{
                  fontWeight: "500",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              >
                Team Size
              </span>
              <input
                style={{ padding: "5px 10px", fontSize: "20px" }}
                type="number"
                value={teamSize || 1}
                onChange={({ target }) =>
                  setTeamSize(
                    target.value > 200
                      ? 200
                      : target.value < 1
                      ? 1
                      : target.value
                  )
                }
                min="1"
                max="200"
              />
            </div>
            <div className="range-div">
              <input
                className="iline"
                type="range"
                value={teamSize}
                min="1"
                max="200"
                name=""
                onChange={(e) => setTeamSize(e.target.value)}
                id=""
              />
            </div>
          </div>

          <div className="carddiv">
            <div className="B-part">
              <h1>Business</h1>
              <div className="tchange">
                <Link to="#">
                  <span style={{ fontSize: "20px" }}>$</span>
                  {7 * teamSize}{" "}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>

              {data.map((cat) => {
                return (
                  <div className="feature-item" key={uuid()}>
                    <TiTick className="TickIcon" />
                    {cat.title}
                  </div>
                );
              })}
            </div>
            <div className="B-part">
              <h1>Professional</h1>
              <div className="tchange">
                <Link to="#">
                  <span style={{ fontSize: "20px" }}>$</span>
                  {5 * teamSize}{" "}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>
              {data.map((cat, i) => {
                if (i < 9) {
                  return (
                    <div className="feature-item" key={uuid()}>
                      <TiTick className="TickIcon" />
                      {cat.title}
                    </div>
                  );
                } else {
                  return (
                    <div className="feature-2" key={uuid()}>
                      <ImCross className="cros" />
                      {cat.title}
                    </div>
                  );
                }
              })}
            </div>

            <div className="B-part">
              <h1>Free</h1>
              <div className="tchange">
                <Link to="#">
                  <span style={{ fontSize: "20px" }}>$</span>
                  {0 * teamSize}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>
              {data.map((cat, i) => {
                if (i < 3) {
                  return (
                    <div className="feature-item" key={uuid()}>
                      <TiTick className="TickIcon" />
                      {cat.title}
                    </div>
                  );
                } else {
                  return (
                    <div className="feature-2" key={uuid()}>
                      <ImCross className="cros" />
                      {cat.title}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="btn2">
        <button className="btn1">Get Started</button>
        <p style={{ marginTop: "30px", marginLeft: "10px" }}>
          Fully Functional 30-Day Trial
        </p>
      </div>
      <br></br>
      <p style={{ textAlign: "center" }}>
        Checkout out{" "}
        <span style={{ color: "#3070f0" }}>detailed plan comparison</span>{" "}
      </p>
      <hr style={{ marginTop: "20px" }}></hr>

      <div className="Q-part">
        <h1
          style={{ textAlign: "center", marginTop: "30px", fontSize: "35px" }}
        >
          How to Buy ?
        </h1>

        <div style={{ width: "50%", margin: "auto" }}>
          <div>
            <div style={{ marginTop: "30px" }}>
              <Link to="#" style={{ color: "#3070f0" }}>
                <span>
                  <button
                    style={{
                      background: "#e7edfc",
                      color: "#2e4497",
                      fontSize: "25px",
                      width: "50px",
                      height: "50px",
                      marginRight: "40px",
                      fontWeight: "600",
                      borderRadius: "12px",
                      border: "none",
                    }}
                  >
                    1
                  </button>
                </span>
                Log in
              </Link>
              <span> </span>to your TMetric account. If you don't have one,
              <span> </span>
              <Link to="#" style={{ color: "#3070f0" }}>
                sign up
              </Link>
              <span> </span>now.
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              2
            </button>
            <Link to="#">On the main menu, click</Link>
            <span style={{ fontWeight: "700" }}> Workspace</span> and select{" "}
            <span style={{ fontWeight: "750" }}>Subscription. </span>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              3
            </button>
            <Link to="#">On the subscription page click </Link>
            <span style={{ fontWeight: "700" }}>Upgrade Now.</span>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              4
            </button>
            <Link to="#">
              Enter your team size, select subscription plan, and click{" "}
            </Link>
            <span style={{ fontWeight: "700" }}> Proceed To Checkout.</span>
          </div>
          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              5
            </button>
            <Link to="#">
              On the shopping cart page enter your Billing Information and
              select Payment Options.
            </Link>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e7edfc",
                color: "#2e4497",
                fontSize: "25px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              6
            </button>
            <Link to="#"> Click </Link>
            <span style={{ fontWeight: "700" }}>Continue </span>to place an
            order.
          </div>
        </div>
        <hr style={{ marginTop: "30px" }}></hr>
      </div>

      <div className="Q-part">
        <h1
          style={{ textAlign: "center", marginTop: "30px", fontSize: "35px" }}
        >
          Other Question
        </h1>

        <div style={{ width: "60%", marginLeft: "25%" }}>
          <div>
            <div style={{ marginTop: "30px" }}>
              <Link to="#" style={{ fontWeight: "600" }}>
                <span>
                  <button
                    style={{
                      background: "#fef6e2",
                      color: "#9b6919",
                      fontSize: "20px",
                      width: "50px",
                      height: "50px",
                      marginRight: "40px",
                      fontWeight: "600",
                      borderRadius: "12px",
                      border: "none",
                    }}
                  >
                    Q
                  </button>
                </span>
                Have a large team?
              </Link>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">
              You can save money with our volume discount for teams of 40+
              users. Learn more on{" "}
            </Link>
            <span style={{ color: "#5ea0f5" }}> FAQ.</span>
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link to="#" style={{ fontWeight: "600" }}>
              <span>
                <button
                  style={{
                    background: "#fef6e2",
                    color: "#9b6919",
                    fontSize: "20px",
                    width: "50px",
                    height: "50px",
                    marginRight: "40px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  Q
                </button>
              </span>
              Running a non-profit organization?
            </Link>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">
              We offer special{" "}
              <span style={{ color: "#5ea0f5" }}>
                pricing options for non-profit
              </span>{" "}
              and education organizations. To apply, please{" "}
              <span style={{ color: "#5ea0f5" }}> contact</span> team
            </Link>
            .
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link to="#" style={{ fontWeight: "600" }}>
              <span>
                <button
                  style={{
                    background: "#fef6e2",
                    color: "#9b6919",
                    fontSize: "20px",
                    width: "50px",
                    height: "50px",
                    marginRight: "40px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  Q
                </button>
              </span>
              Have other sales questions?
            </Link>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">Please contact our sales department at </Link>
            <span style={{ color: "#5ea0f5" }}>sales@tmetric.com</span>
          </div>
        </div>
        <hr style={{ marginTop: "30px" }}></hr>
      </div>

      <div className="l-div">
        <h1 style={{ fontSize: "40px" }}>Make time work for you!</h1>
        <div className="btn2">
          <button className="btn1">Start Free Trial</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Price;
