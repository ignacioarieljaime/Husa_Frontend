
  import Header from 'components/common/Header/Header'; import ProductsHeadPage from 'components/Page/Products/ProductsHeadPage'; import ProductsListAndAside from 'components/Page/Products/ProductsListAndAside'; import SendNewsToEmailBox from 'components/common/SendNewsToEmailBox'; import Footer from 'components/common/Footer';
  
  function Products() {
    return (
      <section className={'all-tvs'}> <Header/> <ProductsHeadPage/> <ProductsListAndAside/> <SendNewsToEmailBox/> <Footer/></section>
    )
  }
  
  export default Products