import Trash2 from "/icons/bin_icon.png";
import { useCartStore } from "./states/Quantity";
import { useSizes } from "./states/Size";
import { useToggle } from "./states/CartProductToggle";
import { useStore } from "./states/ProductMang";

export default function CartItem() {
  const qtyIncrement = useCartStore((state) => state.increaseQuantity);
  const selectedSize = useSizes((state) => state.selectedSize);
  const showHide = useToggle((state) => state.toggle);
  const setToggle = useToggle((state) => state.setToggle);
  const addProduct = useStore((state) => state.addProduct);
  const cart = useStore((state) => state.cart);
  const removeProduct = useStore((state) => state.removeProduct);
  const updateQty = useStore((state) => state.updateQty);
  
  if (!showHide) return null;
  return (
    <div>
      {
        cart.map((item,index)=>(
    
    <div key={index} className="flex items-center justify-between border-b border-t border-gray-200 !py-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt="Product"
          className="w-20 h-26 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{item.title}</h3>
          <div className="flex items-center gap-3 !mt-2">
            <span className="text-gray-700 font-medium">{item.price}</span>
            <span className="!px-3 !py-1 border rounded text-gray-600">
              {item.size}
            </span>
          </div>
        </div>
      </div>

      <input
        type="number"
        value={item.qty}
        min={1}
        onChange={(e) => {
          updateQty(item.id,item.size,Number(e.target.value))
        }}
        className="w-16 border rounded !pr-4 !py-1 text-center"
      />

      <button
        onClick={() => {removeProduct(item.id,item.size)}}
        className="cursor-pointer h-5 w-5 text-gray-500 hover:text-red-500"
      >
        <img src={Trash2} alt="" />
      </button>
    </div>
        ))
      }
    </div>
  );
}
