window.addEventListener('load', function () {
    
    window.addEventListener('load', async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                // Request account access if needed
                await ethereum.enable();
                // Acccounts now exposed
                web3.eth.sendTransaction({/* ... */ });
            } catch (error) {
                // User denied account access...
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            // Acccounts always exposed
            web3.eth.sendTransaction({/* ... */ });
        }
        // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    });

    var contract;
    var instance;

    ethereum.enable();

    $(function() {
        var data = $.ajax({
            url: "js/ChanToPepe.json",
            dataType: "json"
        });
        
        $.when(data).done(function (res, status, resp) {
            contract = web3.eth.contract(res.abi);
            instance = contract.at("0x5e70eea4E89C350C0DfC6fb4B7932b699fa5F3C7");
            console.log(instance);
        });
    });

    $("#submit").click(function() {
        var receive = instance.receivePepe(function(err, res) {
            if (!err)
                console.log(res);
        });
    });

    $("#check").click(function () {
        instance.getPepeBalance($("#address").val(), function(err, res) {
            if (!err)
                PepeBalance = parseInt(res.c.join(""));
                console.log(PepeBalance / 100000000);
        });
    });


});