import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../spreadsheets/Navbar.css'

export default function Navbar() {

  // const stylea = {
  //   position: 'absolute',
  //   top: '12rem'
  // }

  return (
    <nav className='nav'>
        <Link to="/"><span className='site-logo'>Nikhil.</span></Link>
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