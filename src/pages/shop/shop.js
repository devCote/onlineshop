import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection.preview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopData } from '../../redux/shop-data/shop-data.selectors'

const ShopPage = ({ collection }) => {
  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collection: selectShopData,
})

export default connect(mapStateToProps)(ShopPage)
