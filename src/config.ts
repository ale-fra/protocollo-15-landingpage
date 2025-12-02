const price = "27€";
const originalPrice = "205€";

const priceNum = parseFloat(price.replace("€", ""));
const originalPriceNum = parseFloat(originalPrice.replace("€", ""));
const discount = Math.round(((originalPriceNum - priceNum) / originalPriceNum) * 100);

export const config = {
    price,
    originalPrice,
    ctaUrl: "https://pay.dialogodigitale.it/offerta-protocollo-15",
    downloads: "300+",
    stickyCtaLabel: "ACCEDI ORA",
    offerCtaLabel: "SCARICA TUTTO A",
    discount,
    n8nWebhookUrl: "https://api.youautomate.click/webhook/dialogodigitale/protocollo-15/meta-capi-lead",
    pixelId: "2084170825454114",
};
