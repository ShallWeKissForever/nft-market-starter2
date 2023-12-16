import { ethers } from 'ethers';
import MyNFTABI from '../contracts/MyNFT.json';

async function main() {
  let provider = new ethers.BrowserProvider(window.ethereum)
  const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
  let account = await provider.getSigner();

  const contract = new ethers.Contract(contractAddress, MyNFTABI, account);
  const result = await contract.totalSupply();
  await contract.safeMint('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4', 'https://ipfs.io/ipfs/QmZ4tj')
  console.log(result.toString());
}


export default main;