import React, { useContext } from "react";

import Link from "next/link";

const categories = [
    {name : "React",
    slug : 'react'
},

{name : "fullstack Development",
    slug : 'fullstackdev'
},

{name : "Creative",
    slug : 'creative'
}
]

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Salman's Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle ml-4 text-white font-semibold cursor-pointer">{category.name}</span>
                </Link>
            ) )}
        </div>
      </div>
    </div>
  );
};

export default Header;