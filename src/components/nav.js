import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Nav = ({ links, ...rest }) => (
  <nav {...rest}>
    <ul>
      {links.map(link => (
        <li key={link.name}>
          <Link to={link.path} activeStyle={{ color: 'tomato' }}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ),
}

export default Nav
