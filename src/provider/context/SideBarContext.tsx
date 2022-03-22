import React, { createContext, useContext, useEffect } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SideBarDrawerContext =  createContext({} as UseDisclosureReturn )

export const SideBarDrawerProvider: React.FunctionComponent = ({ children }) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSideBarContext = () => useContext(SideBarDrawerContext)

