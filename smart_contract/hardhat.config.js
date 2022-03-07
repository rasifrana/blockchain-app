// https://eth-ropsten.alchemyapi.io/v2/t_kRIEAdH56VM2TRLgpYVDGLWTtchm70

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/t_kRIEAdH56VM2TRLgpYVDGLWTtchm70',
      accounts: ['cd7ff85cf617af724b80357ffc602dc24d8aaa4de1009f681c7414fa16136098']
    }
  }
}