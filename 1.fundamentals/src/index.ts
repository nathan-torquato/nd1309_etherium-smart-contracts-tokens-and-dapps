import Web3 from 'web3'
import { Transaction, TxData } from 'ethereumjs-tx'

const localURL = 'http://localhost:7545'
const web3 = new Web3(localURL)

;(async () => {
  console.clear()

  const accounts = await web3.eth.getAccounts()

  const [ senderAccount, receiverAccount ] = accounts
  const [ senderAccountBalance, receiverAccountBalance ] = await Promise.all([
    web3.eth.getBalance(senderAccount),
    web3.eth.getBalance(receiverAccount),
  ])
  console.log({ senderAccount, senderAccountBalance: web3.utils.fromWei(senderAccountBalance) })
  console.log({ receiverAccount, receiverAccountBalance: web3.utils.fromWei(receiverAccountBalance) })

  const rawTransaction: TxData = {
    nonce: await web3.eth.getTransactionCount(senderAccount),
    gasPrice: 200000000,
    gasLimit: 21000, // < number will lead to an error
    to: receiverAccount,
    value: 100000000000000,
  }
  const transaction = new Transaction(rawTransaction)
  const privateKeySender = '3328bcb7f373ec287b4e15390522a3fd2fb904fd2677796c68329e20651def60'
  const senderPrivateKeyHex = Buffer.from(privateKeySender, 'hex')
  transaction.sign(senderPrivateKeyHex)

  const serializedTransaction = transaction.serialize().toString('hex')
  const transactionReceipt = await web3.eth.sendSignedTransaction(serializedTransaction)
  console.log({ transactionReceipt })
})().then().catch(e => console.error(e.message))

