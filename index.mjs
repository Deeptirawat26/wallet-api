import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

const RPC_URL = 'https://api.mainnet-beta.solana.com';

async function fetchTransactions(walletAddress) {
  const body = JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'getSignaturesForAddress',
    params: [
      walletAddress,
      {
        limit: 20
      }
    ]
  });

  const response = await fetch(RPC_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  });

  if (!response.ok) {
    throw new Error(`Error fetching transactions: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result;
}

app.get('/transactions/:walletAddress', async (req, res) => {
  const walletAddress = req.params.walletAddress;

  try {
    const transactions = await fetchTransactions(walletAddress);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
