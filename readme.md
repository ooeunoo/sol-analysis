
## Usage

```
$ node index.js [.sol file path]
```


## output

╔═════════════════════════════════════════════════════════════════╗
║ event                                                           ║
╟─────────────────────────────────────────────────────────────────╢
║ UpdatedTokenInformation(string, string, uint8, string, address) ║
╟─────────────────────────────────────────────────────────────────╢
║ IdentityRegistryAdded(address)                                  ║
╟─────────────────────────────────────────────────────────────────╢
║ ComplianceAdded(address)                                        ║
╟─────────────────────────────────────────────────────────────────╢
║ RecoverySuccess(address, address, address)                      ║
╟─────────────────────────────────────────────────────────────────╢
║ AddressFrozen(address, bool, address)                           ║
╟─────────────────────────────────────────────────────────────────╢
║ TokensFrozen(address, uint256)                                  ║
╟─────────────────────────────────────────────────────────────────╢
║ TokensUnfrozen(address, uint256)                                ║
╟─────────────────────────────────────────────────────────────────╢
║ Paused(address)                                                 ║
╟─────────────────────────────────────────────────────────────────╢
║ Unpaused(address)                                               ║
╚═════════════════════════════════════════════════════════════════╝

╔══════════╗
║ modifier ║
╚══════════╝

╔══════════╤══════╤════════════╗
║ variable │ type │ visibility ║
╚══════════╧══════╧════════════╝


╔══════════════════════════════════════════════════════╤════════════╤═════════════════╤═══════════╤════════════════════╗
║ function                                             │ visibility │ stateMutability │ modifiers │ returns            ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ setName(string)                                      │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ setSymbol(string)                                    │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ setOnchainID(address)                                │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ pause()                                              │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ unpause()                                            │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ setAddressFrozen(address, bool)                      │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ freezePartialTokens(address, uint256)                │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ unfreezePartialTokens(address, uint256)              │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ setIdentityRegistry(address)                         │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ setCompliance(address)                               │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ forcedTransfer(address, address, uint256)            │ external   │                 │           │ bool               ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ mint(address, uint256)                               │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ burn(address, uint256)                               │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ recoveryAddress(address, address, address)           │ external   │                 │           │ bool               ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ batchTransfer(address[], uint256[])                  │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ batchForcedTransfer(address[], address[], uint256[]) │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ batchMint(address[], uint256[])                      │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ batchBurn(address[], uint256[])                      │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ batchSetAddressFrozen(address[], bool[])             │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ batchFreezePartialTokens(address[], uint256[])       │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ batchUnfreezePartialTokens(address[], uint256[])     │ external   │                 │           │                    ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ decimals()                                           │ external   │ view            │           │ uint8              ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ name()                                               │ external   │ view            │           │ string             ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ onchainID()                                          │ external   │ view            │           │ address            ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ symbol()                                             │ external   │ view            │           │ string             ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ version()                                            │ external   │ view            │           │ string             ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ identityRegistry()                                   │ external   │ view            │           │ IIdentityRegistry  ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ compliance()                                         │ external   │ view            │           │ IModularCompliance ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ paused()                                             │ external   │ view            │           │ bool               ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ isFrozen(address)                                    │ external   │ view            │           │ bool               ║
╟──────────────────────────────────────────────────────┼────────────┼─────────────────┼───────────┼────────────────────╢
║ getFrozenTokens(address)                             │ external   │ view            │           │ uint256            ║
╚══════════════════════════════════════════════════════╧════════════╧═════════════════╧═══════════╧════════════════════╝


