
export default function CardPrd({image, description, price,width,height }) {
  return (
      <div className="flex flex-col">
        <div className="overflow-hidden" style={{height:height,width:width}}>
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 "
          />
      </div>
        <p className="pt-3 pb-1 text-[14px] text-[#374151] whitespace-normal break-words">
          {description}
        </p>
        <p className="text-[15px] text-[#374151] font-medium">
          ${price}
        </p>
      </div>
  );
}
