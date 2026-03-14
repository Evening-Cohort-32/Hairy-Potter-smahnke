
let potteryForSale = []

export const toSellOrNotToSell = (pottery) => {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40;
        }
        else {
            pottery.price = 20;
        }
        potteryForSale.push(pottery)
    }
}

export const usePottery = () => {
    return structuredClone(potteryForSale)
}