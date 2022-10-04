
	import Layout from "components/common/Layout/Layout"
	  import BlogListHead from 'components/Page/BlogList/BlogListHead'; import BlogListSearchBox from 'components/Page/BlogList/BlogListSearchBox'; import BlogListReadArticleBox from 'components/Page/BlogList/BlogListReadArticleBox'; import BlogListLittleReadArticleBox from 'components/Page/BlogList/BlogListLittleReadArticleBox'; import BlogListSoundBarItemsBox from 'components/Page/BlogList/BlogListSoundBarItemsBox';

	  function BlogList() {
	    return (
			<Layout>
	      <section className={'blog'}> <BlogListHead /> <BlogListSearchBox /> <BlogListReadArticleBox /> <BlogListLittleReadArticleBox /> <BlogListSoundBarItemsBox /> <BlogListReadArticleBox /></section>
		</Layout>
	    )
	  }

	  export default BlogList