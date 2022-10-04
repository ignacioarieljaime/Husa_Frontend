
	import Layout from "components/common/Layout/Layout"
	  import DishwashersHead from 'components/Page/Dishwashers/DishwashersHead'; import ProductsBox from 'components/common/ProductsBox';

	  function Dishwashers() {
	    return (
			<Layout>
	      <section className={'all-dishwasher'}> <DishwashersHead /> <ProductsBox /></section>
		</Layout>
	    )
	  }

	  export default Dishwashers