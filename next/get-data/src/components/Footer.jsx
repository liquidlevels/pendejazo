import React from "react";

const categories_titles = ["develop", "participate", "find us", "explore more"];

const categories = {
  develop: ["guides", "components", "apis", "architecture"],
  participate: [
    "showcase",
    "contributing",
    "community",
    "directory",
    "stack overflow",
  ],
  "find us": ["Blog", "X", "Github"],
  "explore more": ["ReactJs", "Privacy Policy", "Terms Of Service"],
};

const Footer = () => {
  return (
    <footer className="h-[380px] bg-[#21232a] text-[#ebedf0]">
      <div className="flex justify-around uppercase px-[32px] py-[34px] text-[14px] text-[#858a96]">
        {categories_titles.map((title, index) => (
          <div key={index} className="flex flex-col h-[100px]">
            <h3>{title}</h3>
            {categories[title].map((categorie, index) => (
              <div className="text-white capitalize" key={index}>
                <h2>{categorie}</h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
