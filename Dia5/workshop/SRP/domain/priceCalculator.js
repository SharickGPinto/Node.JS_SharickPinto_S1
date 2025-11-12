export class priceCalculator{
    compute(basePrice, coupon){
        if (!coupon) return basePrice;
        if (coupon.type === "perfect") return basePrice - basePrice * (coupon.value / 100);
        if (coupon.type === "fixed")
    }
}