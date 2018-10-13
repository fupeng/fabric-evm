var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:5000'))
web3.eth.defaultAccount = web3.eth.accounts[0]
console.log(web3.eth.accounts[0])
var ABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "set",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
    "stateMutability": "view",
    "type": "function"
    }
]
var ByteCode = "608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a723058203dbaed52da8059a841ed6d7b484bf6fa6f61a7e975a803fdedf076a121a8c4010029",
Contract = web3.eth.contract(ABI)

deployedContract = Contract.new([], {data: ByteCode})
console.log("transactionHash",deployedContract.transactionHash)

trans = web3.eth.getTransactionReceipt(deployedContract.transactionHash)
console.log(trans)

address = trans.contractAddress
myContract = Contract.at(address)

//myContract = Contract.at('48cfaeef3190525abbec012fa778b1e7dc1363bc')

console.log("calling the set function from blockchain")
myContract.set(20)
console.log( myContract.get().toNumber() ) 
console.log("calling the get function from blockchain")
// console.log("got ",myContract.get())