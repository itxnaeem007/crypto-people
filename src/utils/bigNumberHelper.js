import { ethers } from 'ethers'

export function convertToBigNumber(val) {
    return ethers.utils.parseEther(val.toString()).toString()
}
export function convertFromBigNumber(val) {
    return ethers.utils.formatEther(val.toString()).toString()
}