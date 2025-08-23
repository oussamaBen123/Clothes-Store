export default function SizeBtn({ size, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-[#F3F4F6] !py-[9px] !px-[16px] 
        ${active ? "border-[1px] border-red-400" : "border border-transparent"}`}
    >
      {size}
    </button>
  );
}
