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
    if(shouldMatchExactHref && (asPath === props.href || asPath === props.as)) {
      setIsActive(true)
    }

    if(!shouldMatchExactHref && 
      (asPath.startsWith(String(props.href)) || asPath.startsWith(String(props.as)))) {
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