let potteryId = 1;

export const makePottery = (shape, weight, height, name) => {
    return {
        shape: shape,
        weight: weight,
        height: height,
        name: name,
        id: potteryId++,
    }
}