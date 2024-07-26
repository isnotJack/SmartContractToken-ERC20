# notJToken

notJToken (NJT) is an ERC20 token with functionality of minting, a capped supply, burnable functionality, and a block reward system.
This project leverages OpenZeppelin's contracts to implement secure and efficient token functionality.

## Features

- **Initial Supply**: 70,000,000 NJT tokens
- **Capped Supply**: Maximum supply set during deployment
- **Minting Strategy**: Block reward system for miners
- **Block Reward**: Reward tokens for miners on each block
- **Burnable**: Tokens can be burned, reducing the total supply

## Getting Started

To deploy and interact with this contract, you need to have the following setup:

1. **Install Hardhat**: Follow the [Hardhat installation guide](https://hardhat.org/getting-started/).

2. **Clone the Repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

3. **Install Dependencies**:
    ```sh
    npm install
    ```

4. **Compile the Contract**:
    ```sh
    npx hardhat compile
    ```

5. **Deploy the Contract**:
    Update the deployment script with your parameters and run:
    ```sh
    npx hardhat run scripts/deploy.js --network rinkeby
    ```

## Usage
After deploying the contract, you can interact with it using Etherscan or any other Ethereum wallet that supports custom contracts.

Feel free to explore the contract and modify it according to your needs. Happy coding!

## License
This project is licensed under the MIT License.


