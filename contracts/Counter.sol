// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9; 

/// @title Counter DApp Example
/// @notice A minimal counter supporting increment and decrement operations with basic safety checks.
contract Counter { 
    uint256 private _count; 
    event Incremented(uint256 newValue);
    event Decremented(uint256 newValue);
    function getCount() external view returns (uint256) { return _count; }
    function increment() public { unchecked { _count += 1; } emit Incremented(_count); }
    function decrement() public { require(_count>0, "Counter: already zero"); unchecked { _count -= 1; } emit Decremented(_count); }
    // Legacy alias methods
    function incr() external { increment(); }
    function decr() external { decrement(); }
    function display() external view returns (uint256) { return _count; }
}
