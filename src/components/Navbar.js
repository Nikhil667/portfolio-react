import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav'>
        <Link to="/" className='site-title'>Nikhil.</Link>
        <ul>
            <CustomLink to="/project">Projects</CustomLink>
            <CustomLink to="/blog">Blogs</CustomLink>
        </ul>
    </nav>
  )
}

//while using route replace "a" tag with "Link" tag and "href" with "to"

//to show active state

function CustomLink({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end:true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}