pragma solidity 0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChanToPepe {

    ERC20 PepeToken = ERC20(0x86BD8556F7C006061a6263C01b8F865633fE1f64);

    function getPepeBalance(address _address) public view returns (uint256) {
        return PepeToken.balanceOf(_address);
    }

    function receivePepe() public returns (bool) {
        PepeToken.transfer(msg.sender, 100000000);
        return (true);
    }
}