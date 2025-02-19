export async function getTransactionRisk(txHash) {
    return fetch(`/api/transaction/${txHash}`).then(res => res.json());
}
