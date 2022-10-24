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