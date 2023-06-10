import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { NoEthereumProviderError } from '@web3-react/injected-connector'
import { useCallback } from 'react'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()

  const login = useCallback(async (connector) => {
    
    await activate(connector, async (error) => {
      if (error instanceof UnsupportedChainIdError) {
        console.log('Unsupported ChainId Error')
      } else {
        if (error instanceof NoEthereumProviderError) {
          console.log('Provider Error', 'No provider was found')
        } else {
          console.log(error.name, error.message)
        }
      }
    })
    // eslint-disable-next-line
  }, [])

  const logout = useCallback(() => {
    deactivate()
  }, [deactivate])

  return { login, logout }
}

export default useAuth
