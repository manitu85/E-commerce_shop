import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectShopCollections } from '../../redux/shop/shop.selectors'


const CollectionsOverview = ({ collections }) => {

  let shopCollectionsOverview = collections.map(({ id, ...otherCollectionsProps }) => (
    <CollectionPreview key={id} {...otherCollectionsProps} />
  ))

  return (
    <div className='collections-overview'>
      { shopCollectionsOverview }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

// const mapStateToProps = state => ({
//   collections: state.shop.collections
// })

export default connect(mapStateToProps)(CollectionsOverview)