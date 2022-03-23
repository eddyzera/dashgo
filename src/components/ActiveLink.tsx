import React, { cloneElement, useEffect, useState } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement
  shouldMatchExactHref?: boolean
}

export const ActiveLink: React.FunctionComponent<ActiveLinkProps> = ({ 
  children,
  shouldMatchExactHref = false,
  ...props 
}) => {
  const { asPath } = useRouter()
  const [isActive, setIsActive] = useState<boolean>(false)
  useEffect(() => {
    console.log('props', props.href)
    if(shouldMatchExactHref && (asPath === props.href || asPath === props.as)) {
      console.log('useEffect', props.href)
      setIsActive(true)
    }

    if(!shouldMatchExactHref && 
      (asPath.startsWith(String(props.href)) || asPath.startsWith(String(props.as)))) {
        console.log('useEffect', props.href)
        setIsActive(true)
    }
  }, [asPath, props.as, props.href, shouldMatchExactHref])

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.500'
      })}
    </Link>
  )
}