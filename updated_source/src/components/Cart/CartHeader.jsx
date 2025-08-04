

function CartHeader() {
  return (
    <div className="grid grid-cols-5 justify-center border-b border-borderColor pb-4 custom-sm:hidden custom-xs:hidden">
        <p className="text-[18px] text-headingColor text-center font-medium" data-aos="fade-in" data-aos-delay="100">Product</p>
        <p className="text-[18px] text-headingColor text-center font-medium" data-aos="fade-in" data-aos-delay="200">Price</p>
        <p className="text-[18px] text-headingColor text-center font-medium" data-aos="fade-in" data-aos-delay="300">Quantity</p>
        <p className="text-[18px] text-headingColor text-center font-medium" data-aos="fade-in" data-aos-delay="400">Subtotal</p>
        <p className="text-[18px] text-headingColor text-center font-medium" data-aos="fade-in" data-aos-delay="500">Remove</p>
    </div>
  )
}

export default CartHeader