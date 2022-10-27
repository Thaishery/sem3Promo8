import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ lang, parentCallback, handleCloseNavbar, isNavbarOpen }) => {
  const location = useLocation();
  const [items, setItems] = useState([
    {
      id: 0,
      itemLink: "/",
      itemTitle: "home",
      isActive: false,
      class: "",
      internItems: false,
      child: false,
    },
    {
      id: 1, 
      itemLink : "/contact",
      itemTitle: "contact",
      isActive: false,
      class: "",
      internItems: false, 
      child: false, 
    },
    {
      id: 2, 
      itemLink : "/rectangles",
      itemTitle: "rectangles",
      isActive: false,
      class: "",
      internItems: false, 
      child: false, 
    },
    {
      id:3,
      itemLink: "/users",
      itemTitle: "Users",
      isActive: false,
      class: "",
      internItems: false,
      child: false,
    },
    {
      id:4,
      itemLink: "/lifecycles",
      itemTitle: "LifeCycles",
      isActive: false,
      class: "",
      internItems: false,
      child: false,
    },
    {
      id:5,
      itemLink: "/films",
      itemTitle: "films",
      isActive: false,
      class: "",
      internItems: false,
      child: false,
    },
    {
      id:6,
      itemLink: "/liftingstateup",
      itemTitle: "liftingstateup",
      isActive: false,
      class: "",
      internItems: false,
      child: false,
    },
    {
      id:7,
      itemLink: "/btctoeur",
      itemTitle: "btctoeur",
      isActive: false,
      class: "",
      internItems: false,
      child: false,
    },
    {
      id:8,
      itemLink: "/slider",
      itemTitle: "slider",
      isActive: false,
      class: "",
      internItems: false,
      child: false,
    },
    {
      id:9,
      itemLink: "/borne",
      itemTitle: "borne",
      isActive: false,
      class: "",
      internItems: false,
      child: false,
    }
  ])
  useEffect(() => {
    const currentLocation = `/${location.pathname.split("/")[1]}`;
    const newItems = items.map((item) => {
      if (item.itemLink === currentLocation) {
        parentCallback(item.itemTitle);
        return { ...item, class: "-active" };
      } else return { ...item, class: "" };
    });
    setItems(newItems);
  }, [location]);

  const handleItemClick = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, class: "-active" } : { ...item, class: "" }
    );
    setItems(newItems);
  };

  return(
    <div className="-links">
    {items.map((obj) => {
      if (obj.itemLink)
        return (
          <NavLink
            to={obj.itemLink}
            key={obj.id}
            className={`-link ${obj.class}`}
            onClick={() => {
              parentCallback(obj.itemTitle);
              handleItemClick(obj.id);
            }}
          >
            <div className="-label">{obj.itemTitle}</div>
          </NavLink>
        );
      else
        return (
          <h1 className="-title" key={obj.id}>
            {obj.itemTitle}
          </h1>
        );
    })}
  </div>
  )
};

export default Navbar;