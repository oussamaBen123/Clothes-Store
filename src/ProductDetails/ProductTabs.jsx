
export default function ProductTabs() {

  return (
    <div className=" !mx-[120px] mt-6">
      <div className="flex">
        <button
          className="!px-5 !py-2 font-bold border-[1px] border-gray-300  border-b-0 text-[15px]"
        >
          Description
        </button>
        <button
          className="!px-5 !py-2 text-[15px] border-[1px] border-b-0 border-gray-300  border-l-0"
        >
          Reviews (122)
        </button>
      </div>

      <div className="!p-4 text-gray-600 border-[1px] border-gray-300 ">
          <div  className="text-[13px]">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p className="mt-3">
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        

      </div>
    </div>
  );
}
