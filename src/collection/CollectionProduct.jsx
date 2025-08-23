import datas from "../home/ProductData.json";
import CardPrd from "../CardProduct";
import { useState } from "react";
import Search from "./Search";
export default function CollectionProduct() {
  const [selectInp, setSelectInp] = useState({
    men: false,
    women: false,
    kids: false,
    select: "",
  });
  const [searchItems, setSearchItems] = useState("");

  const { men, women, kids, select } = selectInp;
  let filterP = datas.slice(0, 52);

  if (men) {
    filterP = filterP.filter((product) =>
      /\bmen\b/.test(product.productTitle.toLowerCase())
    );
  } else if (women) {
    filterP = filterP.filter((product) =>
      product.productTitle.toLowerCase().includes("women")
    );
  } else if (kids) {
    filterP = filterP.filter((product) =>
      product.productTitle.toLowerCase().includes("kid")
    );
  }

  let Products = filterP.map((product) => {
    return product;
  });

  let selectItem = select.toLowerCase();
  if (selectItem === "low to hight") {
    filterP = Products.sort((a, b) => {
      return Number(a.price) - Number(b.price);
    });
  } else if (selectItem === "hight to low") {
    filterP = Products.sort((a, b) => {
      return Number(b.price) - Number(a.price);
    });
  }

  let handleChange = (value) => {
    setSearchItems(value);
  };

  let searchValue = searchItems.toLowerCase();
  filterP = Products.filter((product) => {
    return product.productTitle.toLowerCase().includes(searchValue);
  });

  return (
    <div className="overflow-hidden flex flex-col !py-[30px] gap-8 h-auto !mx-[120px] border-t-[1px] border-gray-300 ">
      <Search onSearch={handleChange} />
      <div className="flex justify-center gap-2.">
        <div className="flex flex-col gap-3.5 w-[25%]  ">
          <h2 className="font-medium uppercase text-[20px] !pb-[18px] translate-y-1.5 tracking-normal">
            Filters
          </h2>
          <div className="categorie border-[1px] border-[#c8c8c8] flex flex-col gap-1.5 max-w-[230px] !pl-[15px] !py-[17px]">
            <h2 className="font-medium uppercase text-[15px]">Categories</h2>
            <div className="flex gap-2 text-[14px]">
              <input
                checked={selectInp.men}
                onChange={(e) => {
                  setSelectInp({ ...selectInp, men: e.target.checked });
                }}
                type="checkbox"
              />
              <label>Men</label>
            </div>

            <div className="flex gap-2 text-[14px] text-[#374151]">
              <input
                onChange={(e) => {
                  setSelectInp({ ...selectInp, women: e.target.checked });
                }}
                checked={selectInp.women}
                type="checkbox"
              />
              <label>Women</label>
            </div>

            <div className="flex gap-2 text-[14px] text-[#374151]">
              <input
                checked={selectInp.kids}
                onChange={(e) => {
                  setSelectInp({ ...selectInp, kids: e.target.checked });
                }}
                type="checkbox"
              />
              <label>Kids</label>
            </div>
          </div>

          <div className="type border-[1px] border-[#c8c8c8] flex flex-col gap-1.5 max-w-[230px] !pl-[15px] !py-[17px]">
            <h2 className="font-medium uppercase text-[15px]">type</h2>

            <div className="flex gap-2 text-[14px] text-[#374151]">
              <input type="checkbox" />
              <label>Topwear</label>
            </div>

            <div className="flex gap-2 text-[14px] text-[#374151]">
              <input type="checkbox" />
              <label>Bottomwear</label>
            </div>

            <div className="flex gap-2 text-[14px] text-[#374151]">
              <input type="checkbox" />
              <label>Winterwear</label>
            </div>
          </div>
        </div>

        <div className="w-[75%]">
          <div className="flex !pb-[22px] justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-[25px]  uppercase text-[#6B7280] tracking-[1px]">
                all{" "}
                <span className="text-[#374151] font-medium">collections</span>
              </h1>
              <p className="h-[2px] w-[48px] bg-[#374151]"></p>
            </div>
            <select
              onChange={(e) => {
                setSelectInp({ ...selectInp, select: e.target.value });
              }}
              className="border-[2px] border-gray-300 !px-[5px] !py-[8px] text-[14px]"
            >
              <option value="Relavent">Sort by: Relavent</option>
              <option value="Low to Hight">Sort by: Low to Hight</option>
              <option value="Hight to Low">Sort by: Hight to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-y-[20px] gap-x-2.5">
            {filterP.map((data, index) => {
              return (
                <CardPrd
                  key={index}
                  image={data.image}
                  description={data.productTitle}
                  price={data.price}
                  height="220px"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
