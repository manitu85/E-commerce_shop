import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import CollectionsOverviewContainer from './collections-overview.styles'


const CollectionsOverview = ({ collections }) => {

  let shopCollectionsOverview = collections.map(({ id, ...otherCollectionsProps }) => (
    <CollectionPreview key={id} {...otherCollectionsProps} />
  ))

  console.log(shopCollectionsOverview);

  return (
    <CollectionsOverviewContainer>
      { shopCollectionsOverview }
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

// const mapStateToProps = state => ({
//   collections: state.shop.collections
// })

export default connect(mapStateToProps)(CollectionsOverview)