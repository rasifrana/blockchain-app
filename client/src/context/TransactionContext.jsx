import React, { useEffect, useContext, useState } from "react";
import { ethers } from 'ethers';

import { contractAddress, contractABI } from '../utils/constants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}


export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({ addresTo: '', amount: '', keyword: '', message: '' });

    const handleChange = (e, name) => {
        setFormData((prevData) => ({ ...prevData, [name]: e.target.value }))

    }


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
    const sendTransaction = () => {
        try {
            if (!ethereum) return alert('Please Install Metamask Wallet');
            //send
            const { addresTo, amount, keyword, message } = formData;
            getEthereumContract();

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
        <TransactionContext.Provider value={{ connectWallet, shortAddress, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )

}