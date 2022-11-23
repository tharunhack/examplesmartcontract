const { ethers } = require("ethers")
const INFURA_ID = '16d193df5fee486a8035aa6cba57dca6'
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)
const address = "0x370292b410B8306a82253C87949A7C445d9d2Bb8"

const main = async()=>{
    const balance = await provider.getBalance(address)
    console.log(`ETH balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH`)
}

main()

