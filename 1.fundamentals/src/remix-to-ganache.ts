import Web3 from 'web3'

const web3 = new Web3('http://localhost:7545')

const account = '0x50cB39C211cebd46C9AA3AC3e47b897D1dd8CeD4'

;(async () => {
  console.clear()

  const balance = await web3.eth.getBalance(account)
  const ethBalance = web3.utils.fromWei(balance, 'ether')
  console.log({ ethBalance })
  
  const transactionCount = await web3.eth.getTransactionCount(account)
  console.log({ transactionCount })
})()

