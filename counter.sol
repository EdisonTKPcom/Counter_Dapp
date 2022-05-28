// SPDX-License-Identifier: MIT 
pragma solidity >=0.7.4; 
contract FirstContract { 
int public count = 0; 
function incr() public{ 
count++; } 
function decr() public{ 
count--; } 
function display() public view returns (int){ 
return count; }
}
