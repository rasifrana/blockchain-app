import React, { useEffect, useContext, useState } from "react";
import { ethers } from 'ethers';

import { contractAddress, contractABI } from '../utils/constants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log(transactionsContract);
    return transactionsContract;
}


export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };


    // Check if wallet is connected

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please Install Metamask Wallet");
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            console.log(accounts);
            if (accounts.length) {
                setCurrentAccount(accounts[0]);

            }


        } catch (error) {
            throw new Error("No Eth Object");
        }
    }

    //Connect Ethereum wallet

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please Install Metamask Wallet');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0]);
            console.log(currentAccount)
        } catch (error) {
            throw new Error('No New Object');
        }
    }

    // Send Transaction function
    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert('Please Install Metamask Wallet');
            //send
            const { addressTo, amount, keyword, message } = formData;
            const transactionsContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: "0x5208",
                    value: parsedAmount._hex,
                }],
            });

            const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);

            const transactionsCount = await transactionsContract.getTransactionCount();
            setTransactionCount(transactionsCount.toNumber());

        } catch (error) {
            throw new Error('No New Object');
        }
    }

    //Accounts Shortner
    const accountShortner = (acc) => {
        const s1 = acc.slice(0, 5);
        const s2 = acc.slice(-4);
        return `${s1}----${s2}`
    }

    const shortAddress = accountShortner(currentAccount);

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);


    return (
        <TransactionContext.Provider value={{ connectWallet, shortAddress, currentAccount, formData, setformData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )

}