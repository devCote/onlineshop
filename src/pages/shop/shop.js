import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection.preview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopData } from '../../redux/shop-data/shop-data.selectors'

const ShopPage = ({ data }) => {
  return (
    <div className="shop-page">
      {data.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  data: selectShopData,
})

export default connect(mapStateToProps)(ShopPage)
