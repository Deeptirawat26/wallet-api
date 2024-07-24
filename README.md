# wallet-api
# Wallet Transaction API

## Description

This project contains a Node.js and Express application that provides a "GET" API to retrieve all transaction data associated with a given wallet address on the Solana mainnet-beta. The API returns a list of transactions with their details.

## Prerequisites

- Node.js (v20 or above)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Deeptirawat26/wallet-api.git

2. Navigate to the project directory:

   cd wallet-api

3. Install the required dependencies:

   npm install

## Usage

1. Start the server:

   node index.mjs

2. Access the API endpoint in your browser or through a tool like curl or Postman:

   GET http://localhost:3000/api/transactions?wallet=YOUR_WALLET_ADDRESS

   Replace YOUR_WALLET_ADDRESS with the wallet address for which you want to retrieve transaction data.

## API Response

The API returns a JSON object with the following fields for each transaction:

blockTime: The time when the block was created.
confirmationStatus: The confirmation status of the transaction.
err: Any error that occurred during the transaction.
memo: Memo field attached to the transaction.
signature: The unique signature of the transaction.
slot: The slot number where the transaction was included.
