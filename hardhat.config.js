require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const Infura_Id = "16d193df5fee486a8035aa6cba57dca6";

const Metamask_Id = "f3b477e560dfd0a46e3432bf32e6f0594d33cd40ab3887905540523d48ad45c1";

module.exports = {
  solidity: "0.8.17",
    networks:{
      goerli:{
        url:`https://goerli.infura.io/v3/${Infura_Id}`,          
          accounts:[Metamask_Id]
      }
    }
  
};
