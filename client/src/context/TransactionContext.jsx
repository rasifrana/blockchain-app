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
    const [currentAccounts, setCurrentAccounts] = useState('');




    // Check if wallet is connected

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please Install Metamask Wallet");
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            console.log(accounts)

            if (accounts.length) {
                setCurrentAccounts(accounts[0]);
            }

        } catch (error) {
            throw new Error("No Eth Object");
        }
    }

    //Connect Ethereum wallet

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccounts(accounts[0]);
            console.log(accounts)
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

    const shortAddress = accountShortner(currentAccounts);

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);


    return (
        <TransactionContext.Provider value={{ connectWallet, shortAddress, currentAccounts }}>
            {children}
        </TransactionContext.Provider>
    )

}