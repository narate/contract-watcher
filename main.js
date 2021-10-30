require('dotenv').config();
const { ethers } = require("ethers");

const BUSD_ABI = require('./abi/busd.json')
const formatEther = ethers.utils.formatEther
const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC) || 'https://bsc-dataseed.binance.org/';
const busdContract = new ethers.Contract(process.env.BUSD_CONTRACT, BUSD_ABI, provider);

// emit Transfer(sender, recipient, amount);
busdContract.on("Transfer", (sender, recipient, amount) => {
    console.log(`[${new Date().toISOString()}]: ${sender} transfer to ${recipient} ${formatEther(amount)} BUSD`)
})
