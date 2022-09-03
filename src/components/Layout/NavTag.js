import React from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types';

const NavTag = ({ tagTitle, urlPath, classes, onClick }) => {
  return (
    <Link href={urlPath}>
      <li className={`font-semibold text-lg px-2 py-1 cursor-pointer hover:shadow-lg hover:bg-gray-100 hover:text-black rounded ${classes}`} onClick={onClick}>{tagTitle}</li>
    </Link>
  )
}

NavTag.PropTypes = {
  tagTitle: PropTypes.string,
  urlPath: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func
}

NavTag.defaultProps = {
  tagTitle: '',
  urlPath: '',
  classes: '',
  onClick: () => { }
}

export default NavTag