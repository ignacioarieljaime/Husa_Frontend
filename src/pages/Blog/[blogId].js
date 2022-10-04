
	import Layout from "components/common/Layout/Layout"
	  import BlogHead from '@/components/Page/Blog/BlogHead'; import ImageBox from '@/components/common/ImageBox'; import BlogDescriptionBox from '@/components/Page/Blog/BlogDescriptionBox'; import BlogImageGalleryBox from '@/components/Page/Blog/BlogImageGalleryBox'; import BlogSecondDescriptionBox from '@/components/Page/Blog/BlogSecondDescriptionBox'; import BlogImageAndTextBox from '@/components/Page/Blog/BlogImageAndTextBox'; import BlogVideoBox from '@/components/Page/Blog/BlogVideoBox'; import BlogTwoImage from '@/components/Page/Blog/BlogTwoImage'; import BlogEasySlider from '@/components/Page/Blog/BlogEasySlider'; import BlogBigImageAndTextBox from '@/components/Page/Blog/BlogBigImageAndTextBox'; import BlogDescriptionWithShare from '@/components/Page/Blog/BlogDescriptionWithShare'; import BlogCubeSlider from '@/components/Page/Blog/BlogCubeSlider'; import BlogMoreStories from '@/components/Page/Blog/BlogMoreStories';

	  function Blog() {
	    return (
			<Layout>
	      <section className={'blog article-inner'}> <BlogHead /> <ImageBox /> <BlogDescriptionBox /> <BlogImageGalleryBox /> <BlogSecondDescriptionBox /> <BlogImageAndTextBox /> <BlogVideoBox /> <BlogDescriptionBox /> <BlogTwoImage /> <BlogDescriptionBox /> <BlogSecondDescriptionBox /> <BlogEasySlider /> <BlogImageAndTextBox /> <BlogBigImageAndTextBox /> <BlogDescriptionWithShare /> <BlogCubeSlider /> <BlogMoreStories /></section>
		</Layout>
	    )
	  }

	  export default Blog