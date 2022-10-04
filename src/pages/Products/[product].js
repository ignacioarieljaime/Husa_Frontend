
	import Layout from "components/common/Layout/Layout"
	  import ProductsHeadPage from '@/components/Page/Products/ProductsHeadPage'; import ProductsListAndAside from '@/components/Page/Products/ProductsListAndAside';

	  function Products() {
	    return (
			<Layout>
	      <section className={'all-tvs'}> <ProductsHeadPage /> <ProductsListAndAside /></section>
		</Layout>
	    )
	  }

	  export default Products