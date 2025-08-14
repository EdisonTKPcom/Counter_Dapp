// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9; 

/// @title Counter DApp Example
/// @author Your Name
/// @notice A minimal counter supporting increment and decrement operations with basic safety checks.
/// @dev Uses Solidity ^0.8.x built-in overflow / underflow checks. Emits events on state change.
contract Counter { 
	// Current counter value (non-negative)
	uint256 private _count; 

	/// @notice Emitted when the counter is incremented
	/// @param newValue The value of the counter after increment
	event Incremented(uint256 newValue);

	/// @notice Emitted when the counter is decremented
	/// @param newValue The value of the counter after decrement
	event Decremented(uint256 newValue);

	/// @notice Returns current counter value
	function getCount() external view returns (uint256) { 
		return _count; 
	}

	/// @notice Increments the counter by 1
	function increment() public { 
		unchecked { // safe because no realistic overflow in demo; saves a tiny bit of gas
			_count += 1; 
		}
		emit Incremented(_count);
	}

	/// @notice Decrements the counter by 1. Reverts if already zero.
	function decrement() public { 
		require(_count > 0, "Counter: already zero");
		unchecked { // safe after require
			_count -= 1; 
		}
		emit Decremented(_count);
	}

	// ---------------------------------------------------------------------
	// Backwards compatibility (optional): keep old function names used in the
	// original HTML demo. These simply forward to the new API.
	// ---------------------------------------------------------------------

	function incr() external { increment(); }
	function decr() external { decrement(); }
	function display() external view returns (uint256) { return _count; }
}
