// This file list the address of the deployed contract
// and the ABI of deployed contract.

// For more detail, see the image in resource directory.

// This file referes to a local copy of the deployed contract.

import web3 from './web3';

const address = '0x548b5bFb8De0Ee07bD40ddf2169c513786EAEBa8';

const abi = [
  {
    constant: false,
    inputs: [{ name: "_content", type: "string" }],
    name: "createTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_id", type: "uint256" }],
    name: "toggleCompleted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "tasks",
    outputs: [
      { name: "id", type: "uint256" },
      { name: "content", type: "string" },
      { name: "completed", type: "bool" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "taskCount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "id", type: "uint256" },
      { indexed: false, name: "content", type: "string" },
      { indexed: false, name: "completed", type: "bool" }
    ],
    name: "TaskCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "id", type: "uint256" },
      { indexed: false, name: "completed", type: "bool" }
    ],
    name: "TaskCompleted",
    type: "event"
  }
];


// This would export the complete copy of our contract.
export default new web3.eth.Contract(abi, address);
