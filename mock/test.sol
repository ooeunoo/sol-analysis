pragma solidity 0.8.20;

contract Test {
    address[] _tt;
    mapping(address => mapping(address => uint256)) _test;

    modifier onlyA(address _name) {
        _;
    }
    modifier onlyB() {
        _;
    }
}
