# fabric-evm
 Hyperledger Fabric + EVM + Solidity = Awesome !!!


#   cli:
    ports:
      - "5000:5000"  
    volumes:
        - ./../../fabric-chaincode-evm/:/opt/gopath/src/github.com/hyperledger/fabric-chaincode-evm
        - ./../../fabric-samples/:/opt/gopath/src/github.com/hyperledger/fabric-samples

# docker exec -it cli bash

    go build -o fab3 ./fabproxy/cmd
    ./fab3
    


    peer chaincode install -n evmcc -l golang -v 0 -p github.com/hyperledger/fabric-chaincode-evm/evmcc

    peer chaincode instantiate -n evmcc -v 0 -C mychannel -c '{"Args":[]}' -o orderer.example.com:7050 --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem

    peer chaincode invoke -n evmcc -C mychannel  -c '{"Args":["0000000000000000000000000000000000000000","608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a723058203dbaed52da8059a841ed6d7b484bf6fa6f61a7e975a803fdedf076a121a8c4010029"]}' -o orderer.example.com:7050 --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem

    peer chaincode invoke -n evmcc -C mychannel -c '{"Args":["eedede908994eea9fbc570a99e7ada52095c9e84","60fe47b1000000000000000000000000000000000000000000000000000000000000000a"]}' -o orderer.example.com:7050 --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem


    peer chaincode query -n evmcc -C mychannel -c '{"Args":["getCode","eedede908994eea9fbc570a99e7ada52095c9e84"]}'

    peer chaincode query -n evmcc -C mychannel -c '{"Args":["eedede908994eea9fbc570a99e7ada52095c9e84","6d4ce63c"]}' --hex

peer chaincode query -n evmcc -C mychannel -c '{"Args":["account"]}'

