import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import abiSmart from "../utils/abi/abiSmart.json";
import abiSPH from "../utils/abi/sphSmart.json";
import abiWeth from "../utils/abi/wethSmart.json";
import { useWeb3React } from '@web3-react/core';
import useWeb3 from '../hook/useWeb3';
import { ethers } from "ethers";
import promisify from "../utils/web3-promisfy";
import { BigNumber as BN } from "bignumber.js";
import { convertFromBigNumber, convertToBigNumber } from '../utils/bigNumberHelper'

let addressUniswapContract = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" //Uniswap contract
let addressSPHContract = "0xCf46f11Ac6a43d294d8ea286d8C1f77EDc538170" // SPH Token Address
let addressWETHContract = "0xc778417E063141139Fce010982780140Aa0cD5Ab" // WETH Token Address


const PresalePage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [loadingState, setLoadingState] = useState(false);


    const [inAmount, setInAmount] = useState(1)
    const [outAmount, setOutAmount] = useState()

    const [balance, setBalance] = useState(0)


    const { account } = useWeb3React();
    const web3 = useWeb3();

    useEffect(() => {
        //fetch balance of weth in metamask
        if (account) {
            let wethContractObj = new web3.eth.Contract(
                abiWeth,
                addressWETHContract
            );
            wethContractObj.methods.balanceOf(account).call(function (err, res) {
                if (err) {
                    console.log('An error occured', err);
                    return;
                }
                let value = res / 10e17;
                setBalance(value)
                console.log('res', res);
            });

        }

    }, [account])

    useEffect(() => {
        callOutAmount()
    }, [inAmount])

    const callOutAmount = () => {

        let uniswapContractObj = new web3.eth.Contract(
            abiSmart,
            addressUniswapContract
        );
        uniswapContractObj.methods.getAmountsOut(convertToBigNumber(inAmount === '' ? 0.1 : inAmount), [addressWETHContract, addressSPHContract]).call(function (err, res) {
            if (err) {
                console.log('An error occured', err);
                return;
            }
            setOutAmount(convertFromBigNumber(res[1]))

            console.log('res amount out', res);
        });
    }

    const Swap = async () => {
        setLoadingState(true);

        const blockNumber = await promisify(web3, 'getBlockNumber'); // Fetch Block Number
        const block = await promisify(web3, 'getBlock', blockNumber); //Fetch Complete Block
        const deadline = block.timestamp + 300; //Calculate Deadline time

        let uniswapContractObj = new web3.eth.Contract(
            abiSmart,
            addressUniswapContract
        );
        const txCount = await web3.eth.getTransactionCount(account);
        await uniswapContractObj.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(
            0, //amoutout 
            [ addressWETHContract,addressSPHContract], //address path
            account, //to address
            deadline, //max deadline,
            )
            .send({ from: account , value :convertToBigNumber(inAmount), gasLimit :  20000000 , nonce : web3.utils.toHex(txCount)}
            // , function async(err, res) {
            //     if (err) {
            //         console.log('An error occured', err);
            //         return;
            //     }
            //     if (res) {
            //         console.log('hash', res);
            //         const runInterval = setInterval(async () => {
            //             web3.eth.getTransactionReceipt(res).then((txReceipt) => {
            //                 console.log('txReceipt', txReceipt);
            //                 if (txReceipt?.status === true) {
            //                     clearInterval(runInterval);
            //                     console.log('success:', 'Transaction Excuted');
            //                 } else if (txReceipt?.status === false) {
            //                     clearInterval(runInterval);
            //                     console.log('error:', 'Transaction Failed');
            //                 }
            //             });
            //         }, 5000);
            //     }
            // }
            )
            setLoadingState(false);

    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    // Approve function contract call
    const approve = async (contractObj, address) => {
        return contractObj.methods
            .approve(address, ethers.constants.MaxUint256)
            .send({ from: account });
    };

    //send transaction to metamask
    const sendTransaction = async (txObject) => {
        const hash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [txObject],
            from: account,
        });
        return hash;
    };

    //Sign transaction with metamask
    // const signProvider = async (transaction) => {
    //     setLoadingState(true);

    //     try {
    //         // const gasLimit = await web3.eth.estimateGas({ from: account, to: transaction.to, data: transaction.data })
    //         const txCount = await web3.eth.getTransactionCount(account);
    //         const txObject = {
    //             nonce: web3.utils.toHex(txCount),
    //             value: web3.utils.numberToHex(0),
    //             from: account,
    //             // gasPrice: gasPrice, // Optional
    //             gasLimit: 2000000000, // Optional
    //             to: transaction.to.toLowerCase(),
    //             data: transaction.data,
    //         };
    //         //take approval
    //         //make contract obj instance
    //         let contractObj = new web3.eth.Contract(
    //             abiSmart,
    //             addressUniswapContract
    //         );
    //         console.log("contractObj", contractObj);

    //         await approve(contractObj, transaction.to).then(async () => {
    //             let hash = await sendTransaction(txObject);

    //             console.log("trxHash  => ", hash);
    //             //Wait for treansaction confirm
    //             const runInterval = setInterval(async () => {
    //                 const txReceipt = await web3.eth.getTransactionReceipt(hash);
    //                 if (txReceipt?.status === true) {
    //                     //  show success and close modal
    //                     clearInterval(runInterval);

    //                     setLoadingState(false);
    //                 } else if (txReceipt?.status === false) {
    //                     // show error and close modal
    //                     clearInterval(runInterval);

    //                     setLoadingState(false);
    //                 }
    //             }, 10000);
    //         }).catch((error) => {
    //             console.log('error', error);
    //             setLoadingState(false);
    //         });

    //     } catch (error) {
    //         console.log('error', error);

    //         setLoadingState(false);
    //         console.log(error.message ? error.message : "Transaction fail");
    //         if (error.code === 4001) {
    //         }
    //     }
    // };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div style={{ height: '60vh' }}>
                <div style={{ marginTop: '150px', display: "flex", justifyContent: 'center' }}>
                    <ServicesCard>
                        <h3 style={{ textAlign: 'center' }}>Buy Coin</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                            <div>
                                <div>PRICE NOW:</div>
                                <div>1 ETH : 500000 SPH</div>
                            </div>
                            <div>
                                <div>Wallet Balance</div>
                                <div>{balance} Weth</div>
                            </div>
                        </div>
                        <input style={{ padding: '10px 15px', borderRadius: '10px' }} type="number" placeholder="Please Enter Eth Amount" value={inAmount} onChange={(e) => {
                            setInAmount(e.target.value)
                        }} />
                        <h5 style={{ textAlign: 'center', marginTop: "20px" }}>You Will Receive</h5>
                        <input style={{ padding: '10px 15px', borderRadius: '10px' }} value={outAmount} disabled type="number" placeholder="SPH" />
                        <div style={{ textAlign: 'center' }}>
                            <button style={{ padding: '10px 20px', marginTop: "20px", background: "gray", borderRadius: '10px', borderColor: 'red' }}
                                onClick={() => {
                                    !loadingState && Swap()
                                }}
                            >{loadingState? 'Loading...' :'Buy'}</button>
                        </div>
                        <p style={{ textAlign: 'center', marginTop: "10px", fontSize: '10px' }}>
                            "Hurry up! Presale ending and listing soon"
                        </p>



                    </ServicesCard>
                </div>

            </div>

            <Footer />
        </>
    )
}
export const ServicesCard = styled.div`
    background: gray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    max-height: 440px;
    width : 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export default PresalePage
