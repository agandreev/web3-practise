const Web3 = require("web3");

var web3 = new Web3(
  new Web3.providers.HttpProvider(
    ""
  )
);
const address = "0x7590907d7af28201e92490ff65acdea807f35849";
const ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_revealSpan",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "Commit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Payout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum RockPaperScissors.Choice",
        name: "choice",
        type: "uint8",
      },
    ],
    name: "Reveal",
    type: "event",
  },
  {
    inputs: [],
    name: "bet",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "commit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum RockPaperScissors.Stage",
        name: "",
        type: "uint8",
      },
    ],
    name: "players",
    outputs: [
      {
        internalType: "address",
        name: "playerAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        internalType: "enum RockPaperScissors.Choice",
        name: "choice",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum RockPaperScissors.Choice",
        name: "choice",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "blindingFactor",
        type: "bytes32",
      },
    ],
    name: "reveal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revealDeadline",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "revealSpan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stage",
    outputs: [
      {
        internalType: "enum RockPaperScissors.Stage",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const myContract = new web3.eth.Contract(ABI, address);
myContract.methods
  .commit(web3.utils.keccak256(web3.eth.abi.encodeParameters(['address', 'Choice', 'bytes32'], '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 'Rock', '7')))
  .call({ value: 20 })
  .then(console.log);