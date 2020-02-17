import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import MenuItem from '../menu-item/menu-item.component'
import { selectDirectorySection } from '../../redux/directory/directory.selectors'
import DirectoryMenu from './directory.styles'


const Directory = ({ sections }) => {
 
  let menuItemSection = sections.map(({ id, ...otherProps }) => (
    <MenuItem 
      key={id} 
      {...otherProps}
    />
  ))

  return <DirectoryMenu>{menuItemSection}</DirectoryMenu>
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

// const mapStateToProps = state => ({
//   sections: state.directory.sections
// })

export default connect(mapStateToProps)(Directory)


