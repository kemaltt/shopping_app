import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";

export default function Navbar({
  loginWithRedirect,
  logout,
  isAuthenticated,
  user,
  selectedProducts,
  selectedItems,
}) {
  const badge = selectedProducts.length;
  const badge2 = selectedItems.length;
  console.log(badge);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const handleNavList = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar_">
      <nav>
        <img
          onClick={() => navigate("/", { replace: true })}
          src="https://pbs.twimg.com/media/Ddna4X7UQAEQeBr.jpg:large"
          alt="logo"
        />
        <ul className="nav_item_desktop">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/aboutus">About Us</Link>
          </li> */}
          <li>
            <Link to="/compare">
              Compare
              <Badge
                style={{ position: "relative", top: "-10px", width: "23px" }}
                bg="warning"
              >
                {badge2}
              </Badge>
              <span className="visually-hidden">unread messages</span>
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <Link to="/cart">
                  <BsCartCheck style={{ fontSize: "3rem" }} />
                  {isAuthenticated ? (
                    <>
                      <Badge
                        style={{
                          position: "relative",
                          top: "-10px",
                          width: "23px",
                        }}
                        bg="danger"
                      >
                        {badge}
                      </Badge>
                      <span className="visually-hidden">unread messages</span>
                    </>
                  ) : null}
                </Link>
              </li>
              <li style={{ marginLeft: "4rem" }}>
                <Link>{user.name} </Link>
              </li>

              <li className="logout">
                <Link onClick={logout} to="">
                  <MdLogout style={{ fontSize: "3rem" }} />
                </Link>
              </li>
            </>
          ) : (
            <li style={{ marginLeft: "1rem" }}>
              <Link onClick={loginWithRedirect} to="">
                Sign Up
                <MdLogin style={{ fontSize: "3rem" }} />
              </Link>
            </li>
          )}
        </ul>

        <div onClick={handleNavList} className="burger_menü">
          {!toggle ? (
            <i className="las la-bars"></i>
          ) : (
            <i className="las la-times"></i>
          )}
        </div>
      </nav>
      <div className="mobile_navlist">
        {toggle ? (
          <ul className="nav_item_mobile">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/compare">
                Compare
                <Badge
                  style={{
                    fontSize: "1rem",
                    position: "relative",
                    top: "-10px",
                  }}
                  bg="warning"
                >
                  {badge2}
                </Badge>
                <span className="visually-hidden">unread messages</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <BsCartCheck style={{ fontSize: "3rem" }} />
                <Badge
                  style={{
                    fontSize: "1rem",
                    position: "relative",
                    top: "-10px",
                  }}
                  bg="danger"
                >
                  {badge}
                </Badge>
                <span className="visually-hidden">unread messages</span>
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link onClick={logout} to="">
                  <MdLogout style={{ fontSize: "2.5rem" }} /> {user.name}
                </Link>
              </li>
            ) : (
              <li>
                <Link onClick={loginWithRedirect} to="">
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
