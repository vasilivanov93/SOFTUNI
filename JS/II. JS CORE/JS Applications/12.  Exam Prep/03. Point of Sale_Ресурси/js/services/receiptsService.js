let receipts = (() => {
    function getActiveReceipt(userId) {
        const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"true"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createReceipt() {
        let data = { active: true, productCount: 0, total: 0 };

        return remote.post('appdata', 'receipts', 'kinvey', data);
    }

    function getMyReceipts(userId) {
        const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"false"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function receiptDetails(receiptId) {
        const endpoint = `receipts/${receiptId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    async function commitReceipt(receiptId, productCount, total) {
        const endpoint = `receipts/${receiptId}`;
        let data = await receiptDetails(receiptId);
        data['active'] = false;
        data['productsCount'] = productCount;
        data['total'] = total;

        return remote.update('appdata', endpoint, 'kinvey', data);
    }

    return {
        getActiveReceipt,
        createReceipt,
        getMyReceipts,
        receiptDetails,
        commitReceipt
    }
})();