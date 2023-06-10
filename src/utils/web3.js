import Web3 from 'web3'

const RPC_URL = "https://rinkeby.infura.io/v3/29f73f58517e4eb69f4cd52086f5a4f5"
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 })
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  return web3NoAccount
}

export { getWeb3NoAccount }
export default web3NoAccount
