
import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ProductsBox = dynamic(() => import('components/common/ProductsBox'), {suspense: true,});
const TextEditor = dynamic(() => import('components/common/TextEditor'), {suspense: true,});
const ImageBox = dynamic(() => import('components/common/ImageBox'), {suspense: true,});
const LetsGetRealTextBox = dynamic(() => import('components/common/LetsGetRealTextBox'), {suspense: true,});
const Header = dynamic(() => import('components/common/Header/Header'), {suspense: true,});
const NeedHelpBox = dynamic(() => import('components/common/NeedHelpBox'), {suspense: true,});
const BreadCrumb = dynamic(() => import('components/common/BreadCrumb'), {suspense: true,});
const IFrame = dynamic(() => import('components/common/IFrame'), {suspense: true,});
const UnauthorizedListCommon = dynamic(() => import('components/common/UnauthorizedListCommon'), {suspense: true,});
const OfferClaimForm = dynamic(() => import('components/common/OfferClaimForm'), {suspense: true,});
const SimpleImagesList = dynamic(() => import('components/common/SimpleImagesList'), {suspense: true,});
const PromoBanner = dynamic(() => import('components/common/PromoBanner'), {suspense: true,});
const AuthorizedRetailersBadge = dynamic(() => import('components/page/AuthorizedRetailers/AuthorizedRetailersBadge'), {suspense: true,});
const AuthorizedRetailersFeatures = dynamic(() => import('components/page/AuthorizedRetailers/AuthorizedRetailersFeatures'), {suspense: true,});
const AuthorizedRetailersNote = dynamic(() => import('components/page/AuthorizedRetailers/AuthorizedRetailersNote'), {suspense: true,});
const AuthorizedRetailersLogos = dynamic(() => import('components/page/AuthorizedRetailers/AuthorizedRetailersLogos'), {suspense: true,});
const UnauthorizedList = dynamic(() => import('components/page/AuthorizedRetailers/UnauthorizedList'), {suspense: true,});
const LandingSlider = dynamic(() => import('components/page/Landing/LandingSlider'), {suspense: true,});
const LandingProductsBox = dynamic(() => import('components/page/Landing/LandingProductsBox'), {suspense: true,});
const LandingVideoPlayer = dynamic(() => import('components/page/Landing/LandingVideoPlayer.js'), {suspense: true,});
const ProductsBanner = dynamic(() => import('components/page/Products/ProductsBanner'), {suspense: true,});
const ProductsGrid = dynamic(() => import('components/page/Products/ProductsGrid'), {suspense: true,});
const ProductsBannerV2 = dynamic(() => import('components/page/ProductsV2/ProductsBannerV2'), {suspense: true,});
const ProductsGridV2 = dynamic(() => import('components/page/ProductsV2/ProductsGridV2'), {suspense: true,});
const ProductInfoAndSliderBox = dynamic(() => import('components/page/Product/ProductInfoAndSliderBox'), {suspense: true,});
const ProductInfoAndSliderBoxV2 = dynamic(() => import('components/page/Product/ProductInfoAndSliderBoxV2'), {suspense: true,});
const ProductTextWithImageBox = dynamic(() => import('components/page/Product/ProductTextWithImageBox'), {suspense: true,});
const ProductFeatureWithImage = dynamic(() => import('components/page/Product/ProductFeatureWithImage'), {suspense: true,});
const CompareProduct = dynamic(() => import('components/page/Product/CompareProduct'), {suspense: true,});
const ProductWhereToBuy = dynamic(() => import('components/page/Product/ProductWhereToBuy'), {suspense: true,});
const ListImageBox = dynamic(() => import('components/page/Product/ListImageBox'), {suspense: true,});
const ProductBigScreenTextsBox = dynamic(() => import('components/page/Product/ProductBigScreenTextsBox'), {suspense: true,});
const ProductFeatureWithParagraph = dynamic(() => import('components/page/Product/ProductFeatureWithParagraph'), {suspense: true,});
const ProductTextWithIcon = dynamic(() => import('components/page/Product/ProductTextWithIcon'), {suspense: true,});
const ProductStaticContent = dynamic(() => import('components/page/Product/ProductStaticContent'), {suspense: true,});
const ProductCategoryBox = dynamic(() => import('components/page/Product/ProductCategoryBox'), {suspense: true,});
const ProductCategoryBoxV2 = dynamic(() => import('components/page/Product/ProductCategoryBoxV2'), {suspense: true,});
const ProductImageBox = dynamic(() => import('components/page/Product/ProductImageBox'), {suspense: true,});
const ProductBigContent = dynamic(() => import('components/page/Product/ProductBigContent'), {suspense: true,});
const ProductFeaturesWithIcon = dynamic(() => import('components/page/Product/ProductFeaturesWithIcon'), {suspense: true,});
const ProductRelatedItemsBox = dynamic(() => import('components/page/Product/ProductRelatedItemsBox'), {suspense: true,});
const ProductReviewBox = dynamic(() => import('components/page/Product/ProductReviewBox'), {suspense: true,});
const ProductNewsBox = dynamic(() => import('components/page/Product/ProductNewsBox'), {suspense: true,});
const ProductBottomImageBox = dynamic(() => import('components/page/Product/ProductBottomImageBox'), {suspense: true,});
const ProductDetailsBox = dynamic(() => import('components/page/Product/ProductDetailsBox'), {suspense: true,});
const ProductFineMeInStore = dynamic(() => import('components/page/Product/ProductFindMeInStore'), {suspense: true,});
const ProductResourceBox = dynamic(() => import('components/page/Product/ProductResourceBox'), {suspense: true,});
const ProductPackageHeader = dynamic(() => import('components/page/Product/ProductPackageHeader'), {suspense: true,});
const ProductPackagesSlider = dynamic(() => import('components/page/Product/ProductPackagesSlider'), {suspense: true,});
const SmartInfoHead = dynamic(() => import('components/page/SmartInfo/SmartInfoHead'), {suspense: true,});
const ProductFeatureWithImageWithBTN = dynamic(() => import('components/page/SmartInfo/ProductFeatureWithImageWithBTN'), {suspense: true,});
const SmartInfoTvsBox = dynamic(() => import('components/page/SmartInfo/SmartInfoTvsBox'), {suspense: true,});
const SmartInfoTextBox = dynamic(() => import('components/page/SmartInfo/SmartInfoTextBox'), {suspense: true,});
const SmartInfoTextAndImageBox = dynamic(() => import('components/page/SmartInfo/SmartInfoTextAndImageBox'), {suspense: true,});
const SmartInfoInteractBox = dynamic(() => import('components/page/SmartInfo/SmartInfoInteractBox'), {suspense: true,});
const SmartInfoFindHisense = dynamic(() => import('components/page/SmartInfo/SmartInfoFindHisense'), {suspense: true,});
const SmartInfoBetterNewOrOldBox = dynamic(() => import('components/page/SmartInfo/SmartInfoBetterNewOrOldBox'), {suspense: true,});
const SupportHeadIntro = dynamic(() => import('components/page/Support/SupportHeadIntro'), {suspense: true,});
const SupportCovidBox = dynamic(() => import('components/page/Support/SupportCovidBox'), {suspense: true,});
const SupportCategoryBox = dynamic(() => import('components/page/Support/SupportCategoryBox'), {suspense: true,});
const SupportNewHead = dynamic(() => import('components/page/Support/SupportNewHead'), {suspense: true,});
const ProductsCategoriesWithSearch = dynamic(() => import('components/page/Support/ProductsCategoriesWithSearch'), {suspense: true,});
const ProductsSupportOptions = dynamic(() => import('components/page/Support/ProductsSupportOptions'), {suspense: true,});
const SupportNeedAssistance = dynamic(() => import('components/page/Support/SupportNeedAssistance'), {suspense: true,});
const SupportNewProducts = dynamic(() => import('components/page/Support/SupportNewProducts'), {suspense: true,});
const SupportNewHeadV2 = dynamic(() => import('components/page/Support/SupportNewHeadV2'), {suspense: true,});
const SupportNeedMoreWithButton = dynamic(() => import('components/page/Support/SupportNeedMoreWithButton'), {suspense: true,});
const RegisterHead = dynamic(() => import('components/page/Register/RegisterHead'), {suspense: true,});
const RegisterForm = dynamic(() => import('components/page/Register/RegisterForm'), {suspense: true,});
const FAQhead = dynamic(() => import('components/page/FAQ/FAQhead'), {suspense: true,});
const FAQContentBox = dynamic(() => import('components/page/FAQ/FAQContentBox'), {suspense: true,});
const FAQDescriptionWithTwoBox = dynamic(() => import('components/page/FAQ/FAQDescriptionWithTwoBox'), {suspense: true,});
const ContactUsHead = dynamic(() => import('components/page/ContactUs/ContactUsHead'), {suspense: true,});
const ContactUsChat = dynamic(() => import('components/page/ContactUs/ContactUsChat'), {suspense: true,});
const ContactUsForm = dynamic(() => import('components/page/ContactUs/ContactUsForm'), {suspense: true,});
const ContactUsNewHead = dynamic(() => import('components/page/ContactUs/ContactUsNewHead'), {suspense: true,});
const ContactUsNewForm = dynamic(() => import('components/page/ContactUs/ContactUsNewForm'), {suspense: true,});
const ContactUsPhoneUs = dynamic(() => import('components/page/ContactUs/ContactUsPhoneUs'), {suspense: true,});
const ContactUsAboutHisense = dynamic(() => import('components/page/ContactUs/ContactUsAboutHisense'), {suspense: true,});
const CompanyHeaderIntro = dynamic(() => import('components/page/Company/CompanyHeaderIntro'), {suspense: true,});
const CompanyNavBar = dynamic(() => import('components/page/Company/CompanyNavBar'), {suspense: true,});
const CompanyInfo = dynamic(() => import('components/page/Company/CompanyInfo'), {suspense: true,});
const CompanySubmenu = dynamic(() => import('components/page/Company/CompanySubmenu'), {suspense: true,});
const CommercialIntro = dynamic(() => import('components/page/Commercial/CommercialIntro'), {suspense: true,});
const CommercialTowImageBox = dynamic(() => import('components/page/Commercial/CommercialTowImageBox'), {suspense: true,});
const CommercialBecomeAPartner = dynamic(() => import('components/page/Commercial/CommercialBecomeAPartner'), {suspense: true,});
const TVAndAudioHead = dynamic(() => import('components/page/TvAndAudio/TVAndAudioHead'), {suspense: true,});
const TVAndAudioTvShopBox = dynamic(() => import('components/page/TvAndAudio/TVAndAudioTvShopBox'), {suspense: true,});
const TVAndAudioIntro = dynamic(() => import('components/page/TvAndAudio/TVAndAudioIntro'), {suspense: true,});
const TVAndAudioLaserIntro = dynamic(() => import('components/page/TvAndAudio/TVAndAudioLaserIntro'), {suspense: true,});
const TVAndAudioSmartChoice = dynamic(() => import('components/page/TvAndAudio/TVAndAudioSmartChoice'), {suspense: true,});
const TVAndAudioFindHisense = dynamic(() => import('components/page/TvAndAudio/TVAndAudioFindHisense'), {suspense: true,});
const TVAndAudioFindProduct = dynamic(() => import('components/page/TvAndAudio/TVAndAudioFindProduct'), {suspense: true,});
const UHDIntro = dynamic(() => import('components/page/UHD/UHDIntro'), {suspense: true,});
const UHDNewsBox = dynamic(() => import('components/page/UHD/UHDNewsBox'), {suspense: true,});
const UHDAbilityBox = dynamic(() => import('components/page/UHD/UHDAbilityBox'), {suspense: true,});
const UHDFindTv = dynamic(() => import('components/page/UHD/UHDFindTv'), {suspense: true,});
const ULEDHead = dynamic(() => import('components/page/ULED/ULEDHead'), {suspense: true,});
const ULEDProducts = dynamic(() => import('components/page/ULED/ULEDProducts'), {suspense: true,});
const ULEDImageAndTextItem = dynamic(() => import('components/page/ULED/ULEDImageAndTextItem'), {suspense: true,});
const ULEDTextBox = dynamic(() => import('components/page/ULED/ULEDTextBox'), {suspense: true,});
const ULEDImageBoxWithBtn = dynamic(() => import('components/page/ULED/ULEDImageBoxWithBtn'), {suspense: true,});
const ULEDAllTech = dynamic(() => import('components/page/ULED/ULEDAllTech'), {suspense: true,});
const ULEDImageAndTextBox = dynamic(() => import('components/page/ULED/ULEDImageAndTextBox'), {suspense: true,});
const ULEDGreatTvTextBox = dynamic(() => import('components/page/ULED/ULEDGreatTvTextBox'), {suspense: true,});
const LaserHead = dynamic(() => import('components/page/Laser/LaserHead'), {suspense: true,});
const LaserImageAndTextBox = dynamic(() => import('components/page/Laser/LaserImageAndTextBox'), {suspense: true,});
const LaserTitleAndSubTitleBox = dynamic(() => import('components/page/Laser/LaserTitleAndSubTitleBox'), {suspense: true,});
const LaserFinedWithImage = dynamic(() => import('components/page/Laser/LaserFinedWithImage'), {suspense: true,});
const DishwashersHead = dynamic(() => import('components/page/Dishwashers/DishwashersHead'), {suspense: true,});
const ProductSupportInfo = dynamic(() => import('components/page/ProductSupport/ProductSupportInfo'), {suspense: true,});
const ProductSupportLinks = dynamic(() => import('components/page/ProductSupport/ProductSupportLinks'), {suspense: true,});
const ProductSupportNewHead = dynamic(() => import('components/page/ProductSupport/ProductSupportNewHead'), {suspense: true,});
const ProductSupportNavBar = dynamic(() => import('components/page/ProductSupport/ProductSupportNavBar'), {suspense: true,});
const ProductSupportVideoBox = dynamic(() => import('components/page/ProductSupport/ProductSupportVideoBox'), {suspense: true,});
const ProductSupportFAQ = dynamic(() => import('components/page/ProductSupport/ProductSupportFAQ'), {suspense: true,});
const ProductSupportRegister = dynamic(() => import('components/page/ProductSupport/ProductSupportRegister'), {suspense: true,});
const ProductSupportReplacement = dynamic(() => import('components/page/ProductSupport/ProductSupportReplacement'), {suspense: true,});
const HomeApplianceFeatures = dynamic(() => import('components/page/HomeAppliances/HomeApplianceFeatures'), {suspense: true,});
const HomeApplianceQA = dynamic(() => import('components/page/HomeAppliances/HomeApplianceQA'), {suspense: true,});
const HomeApplianceTextBoxWithImage = dynamic(() => import('components/page/HomeAppliances/HomeApplianceTextBoxWithImage'), {suspense: true,});
const HomeApplianceTextBox = dynamic(() => import('components/page/HomeAppliances/HomeApplianceTextBox'), {suspense: true,});
const HomeApplianceImageWithBackground = dynamic(() => import('components/page/HomeAppliances/HomeApplianceImageWithBackground'), {suspense: true,});
const CESHomeNavBar = dynamic(() => import('components/page/CES/HomeApplication/CESHomeNavBar'), {suspense: true,});
const CESHomeImageAndText = dynamic(() => import('components/page/CES/HomeApplication/CESHomeImageAndText'), {suspense: true,});
const CESLaserLearnMore = dynamic(() => import('components/page/CES/Laster/CESLaserLearnMore'), {suspense: true,});
const ImageBoxWithPaddingAndBgBlack = dynamic(() => import('components/page/CES/Laster/ImageBoxWithPaddingAndBgBlack'), {suspense: true,});
const CEOLaserLikeBox = dynamic(() => import('components/page/CES/Laster/CEOLasterLikeBox'), {suspense: true,});
const MoreTvHead = dynamic(() => import('components/page/MoreTv/MoreTvHead'), {suspense: true,});
const MoreTvBox = dynamic(() => import('components/page/MoreTv/MoreTvBox'), {suspense: true,});
const MoreTvVideoBox = dynamic(() => import('components/page/MoreTv/MoreTvVideoBox'), {suspense: true,});
const MoreTvAmericaBox = dynamic(() => import('components/page/MoreTv/MoreTvAmericaBox'), {suspense: true,});
const MoreTvLessTalk = dynamic(() => import('components/page/MoreTv/MoreTvLessTalk'), {suspense: true,});
const MoreTvHisensePromise = dynamic(() => import('components/page/MoreTv/MoreTvHisensePromise'), {suspense: true,});
const MoreTvGrabSlider = dynamic(() => import('components/page/MoreTv/MoreTvGrabSlider'), {suspense: true,});
const MoreTvLessTalkForm = dynamic(() => import('components/page/MoreTv/MoreTvLessTalkForm'), {suspense: true,});
const MoreTvExperts = dynamic(() => import('components/page/MoreTv/MoreTvExperts'), {suspense: true,});
const MoreTVNewItemsBox = dynamic(() => import('components/page/MoreTv/MoreTvNewItemsBox'), {suspense: true,});
const MoreTVNewHisensePromise = dynamic(() => import('components/page/MoreTv/MoreTvNewHisensePromise'), {suspense: true,});
const BlogListHead = dynamic(() => import('components/page/BlogList/BlogListHead'), {suspense: true,});
const BlogListSearchBox = dynamic(() => import('components/page/BlogList/BlogListSearchBox'), {suspense: true,});
const BlogListReadArticleBox = dynamic(() => import('components/page/BlogList/BlogListReadArticleBox'), {suspense: true,});
const BlogListLittleReadArticleBox = dynamic(() => import('components/page/BlogList/BlogListLittleReadArticleBox'), {suspense: true,});
const BlogListSoundBarItemsBox = dynamic(() => import('components/page/BlogList/BlogListSoundBarItemsBox'), {suspense: true,});
const BlogListWithBigTitleAndLittleItem = dynamic(() => import('components/page/BlogList/BlogListWithBigTitleAndLittleItem'), {suspense: true,});
const BlogDescriptionBox = dynamic(() => import('components/page/Blog/BlogDescriptionBox'), {suspense: true,});
const BlogImageGalleryBox = dynamic(() => import('components/page/Blog/BlogImageGalleryBox'), {suspense: true,});
const BlogImageAndTextBox = dynamic(() => import('components/page/Blog/BlogImageAndTextBox'), {suspense: true,});
const BlogVideoBox = dynamic(() => import('components/page/Blog/BlogVideoBox'), {suspense: true,});
const BlogTwoImage = dynamic(() => import('components/page/Blog/BlogTwoImage'), {suspense: true,});
const BlogSecondDescriptionBox = dynamic(() => import('components/page/Blog/BlogSecondDescriptionBox'), {suspense: true,});
const BlogEasySlider = dynamic(() => import('components/page/Blog/BlogEasySlider'), {suspense: true,});
const BlogBigImageAndTextBox = dynamic(() => import('components/page/Blog/BlogBigImageAndTextBox'), {suspense: true,});
const BlogDescriptionWithShare = dynamic(() => import('components/page/Blog/BlogDescriptionWithShare'), {suspense: true,});
const BlogHead = dynamic(() => import('components/page/Blog/BlogHead'), {suspense: true,});
const BlogCubeSlider = dynamic(() => import('components/page/Blog/BlogCubeSlider'), {suspense: true,});
const BlogMoreStories = dynamic(() => import('components/page/Blog/BlogMoreStories'), {suspense: true,});
const PDPProductInfoSliderAndText = dynamic(() => import('components/page/PDP/PDPProductInfoSliderAndText'), {suspense: true,});
const PDPNavBar = dynamic(() => import('components/page/PDP/PDPNavBar'), {suspense: true,});
const PDPImageAndInfoGrayBg = dynamic(() => import('components/page/PDP/PDPImageAndInfoGrayBg'), {suspense: true,});
const PDPVideoBox = dynamic(() => import('components/page/PDP/PDPVideoBox'), {suspense: true,});
const PDPImageAndInfoDarkBg = dynamic(() => import('components/page/PDP/PDPImageAndInfoDarkBg'), {suspense: true,});
const PDPImageAndInfoLightGrayBg = dynamic(() => import('components/page/PDP/PDPImageAndInfoLightGrayBg'), {suspense: true,});
const PDMImageAndInfoSilverBg = dynamic(() => import('components/page/PDP/PDMImageAndInfoSilverBg'), {suspense: true,});
const PDPTopFeatures = dynamic(() => import('components/page/PDP/PDPTopFeatures'), {suspense: true,});
const PDPDescriptionSliderWithDarkGray = dynamic(() => import('components/page/PDP/PDPDescriptionSliderWithDarkGray'), {suspense: true,});
const PDPTextAndLongImageBox = dynamic(() => import('components/page/PDP/PDPTextAndLongImageBox'), {suspense: true,});
const PDPReviewsAndAwards = dynamic(() => import('components/page/PDP/PDPReviewsAndAwards'), {suspense: true,});
const PDPReadyToBuyBox = dynamic(() => import('components/page/PDP/PDPReadyToBuyBox'), {suspense: true,});
const PDPChooseULEDTvBox = dynamic(() => import('components/page/PDP/PDPChooseULEDTvBox'), {suspense: true,});
const ListVideoPlayer = dynamic(() => import('components/page/PDP/ListVideoPlayer'), {suspense: true,});
const SponsorshipDescriptionGrayBg = dynamic(() => import('components/page/Sponsorship/SponsorshipDescriptionGrayBg'), {suspense: true,});
const SponsorshipVideoAndTextBox = dynamic(() => import('components/page/Sponsorship/SponsorshipVideoAndTextBox'), {suspense: true,});
const SponsorshipBigImageAndText = dynamic(() => import('components/page/Sponsorship/SponsorshipBigImageAndText'), {suspense: true,});
const SponsorshipImagesWithButton = dynamic(() => import('components/page/Sponsorship/SponsorshipImagesWithButton'), {suspense: true,});
const SponsorshipTitleBox = dynamic(() => import('components/page/Sponsorship/SponsorshipTitleBox'), {suspense: true,});
const SponsorshipTextGradient = dynamic(() => import('components/page/Sponsorship/SponsorshipTextGradient'), {suspense: true,});
const SponsorImageAndText = dynamic(() => import('components/page/Sponsorship/SponsorImageAndText'), {suspense: true,});
const SponsorImageAndLogo = dynamic(() => import('components/page/Sponsorship/SponsorImageAndLogo'), {suspense: true,});
const HeaderGoogleTv = dynamic(() => import('components/page/Day100/HeaderGoogleTv'), {suspense: true,});
const HeaderBanner = dynamic(() => import('components/page/Day100/HeaderBanner'), {suspense: true,});
const ClaimPrize = dynamic(() => import('components/page/Day100/ClaimPrize'), {suspense: true,});
const DoubleWarranty = dynamic(() => import('components/page/Day100/DoubleWarranty'), {suspense: true,});
const EligibleModels = dynamic(() => import('components/page/Day100/EligibleModels'), {suspense: true,});
const ExpertsAdv = dynamic(() => import('components/page/Day100/ExpertsAdv'), {suspense: true,});
const DigitalTrends = dynamic(() => import('components/page/Day100/DigitalTrends'), {suspense: true,});
const FeatureBadges = dynamic(() => import('components/page/Day100/FeatureBadges'), {suspense: true,});
const Guarantee = dynamic(() => import('components/page/Day100/Guarantee'), {suspense: true,});
const HeroBanner = dynamic(() => import('components/page/L9G/HeroBanner'), {suspense: true,});
const ScrollableVideo = dynamic(() => import('components/page/L9G/ScrollableVideo'), {suspense: true,});
const PureColor = dynamic(() => import('components/page/L9G/PureColor'), {suspense: true,});
const ColorFeature = dynamic(() => import('components/page/L9G/ColorFeature'), {suspense: true,});
const LumensOfBrightness = dynamic(() => import('components/page/L9G/LumensOfBrightness'), {suspense: true,});
const SmoothMotion = dynamic(() => import('components/page/L9G/SmoothMotion'), {suspense: true,});
const ScreenSize = dynamic(() => import('components/page/L9G/ScreenSize'), {suspense: true,});
const LightRejection = dynamic(() => import('components/page/L9G/LightRejection'), {suspense: true,});
const DolbyVision = dynamic(() => import('components/page/L9G/DolbyVision'), {suspense: true,});
const DolbyAtmos = dynamic(() => import('components/page/L9G/DolbyAtmos'), {suspense: true,});
const FineTouches = dynamic(() => import('components/page/L9G/FineTouches'), {suspense: true,});
const AndroidTv = dynamic(() => import('components/page/L9G/AndroidTv'), {suspense: true,});
const FeatureBlock = dynamic(() => import('components/page/L9G/FeatureBlock'), {suspense: true,});
const Awards = dynamic(() => import('components/page/L9G/Awards'), {suspense: true,});
const Comments = dynamic(() => import('components/page/L9G/Comments'), {suspense: true,});
const FAQs = dynamic(() => import('components/page/L9G/FAQs'), {suspense: true,});
const Specs = dynamic(() => import('components/page/L9G/Specs'), {suspense: true,});
const Resources = dynamic(() => import('components/page/L9G/Resources'), {suspense: true,});
const Retailers = dynamic(() => import('components/page/L9G/Retailers'), {suspense: true,});
const WhereToBuy = dynamic(() => import('components/page/L9G/WhereToBuy'), {suspense: true,});
const L9GProductDetailsBox = dynamic(() => import('components/page/L9G/L9GProductDetailsBox'), {suspense: true,});
const HomePageMBSlider = dynamic(() => import('components/page/HomePageMB/HomePageMBSlider'), {suspense: true,});
const HomePageMBProductsSlider = dynamic(() => import('components/page/HomePageMB/HomePageMBProductsSlider'), {suspense: true,});
const HomePageMBVideoPlayer = dynamic(() => import('components/page/HomePageMB/HomePageMBVideoPlayer'), {suspense: true,});
const HomePageMBTextedBoxes = dynamic(() => import('components/page/HomePageMB/HomePageMBTextedBoxes'), {suspense: true,});
const HomePageMBTextedBoxesItem = dynamic(() => import('components/page/HomePageMB/HomePageMBTextedBoxesItem'), {suspense: true,});
const HomePageMBDiscovery = dynamic(() => import('components/page/HomePageMB/HomePageMBDiscovery'), {suspense: true,});
const HomePageMBDiscoveryItem = dynamic(() => import('components/page/HomePageMB/HomePageMBDiscoveryItem'), {suspense: true,});
const BlockCategories = dynamic(() => import('components/page/NewHomePage/BlockCategories'), {suspense: true,});
const BlockTVHero = dynamic(() => import('components/page/NewHomePage/BlockTVHero'), {suspense: true,});
const BlockKitchenHero = dynamic(() => import('components/page/NewHomePage/BlockKitchenHero'), {suspense: true,});
const BlockFeatured = dynamic(() => import('components/page/NewHomePage/BlockFeatured'), {suspense: true,});
const BlockHero = dynamic(() => import('components/page/NewHomePage/BlockHero'), {suspense: true,});
const BlockSpotlight = dynamic(() => import('components/page/NewHomePage/BlockSpotlight'), {suspense: true,});
const BlockCards = dynamic(() => import('components/page/NewHomePage/BlockCards'), {suspense: true,});
const ExtendedWarrantyBanner = dynamic(() => import('components/page/ExtendedWarranty/ExtendedWarrantyBanner'), {suspense: true,});
const ExtendedWarrantyFAQ = dynamic(() => import('components/page/ExtendedWarranty/ExtendedWarrantyFAQ'), {suspense: true,});
const ExtendedWarrantyFeatureBlocks = dynamic(() => import('components/page/ExtendedWarranty/ExtendedWarrantyFeatureBlocks'), {suspense: true,});
const ExtendedWarrantyWizard = dynamic(() => import('components/page/ExtendedWarranty/ExtendedWarrantyWizard'), {suspense: true,});
const ExtendedWarrantyTextBlock = dynamic(() => import('components/page/ExtendedWarranty/ExtendedWarrantyTextBlock'), {suspense: true,});
const ExtendedWarrantyProductsSlider = dynamic(() => import('components/page/ExtendedWarranty/ExtendedWarrantyProductsSlider'), {suspense: true,});
const ExtendedWarrantyProductGrid = dynamic(() => import('components/page/ExtendedWarranty/ExtendedWarrantyProductGrid'), {suspense: true,});
const ExtendedWarrantyPaymentStatus = dynamic(() => import('components/page/ExtendedWarranty/ExtendedWarrantyPaymentStatus'), {suspense: true,});
const TelevisionsBlockBanner = dynamic(() => import('components/page/Televisions/TelevisionsBlockBanner'), {suspense: true,});
const TelevisionsBlockCards = dynamic(() => import('components/page/Televisions/TelevisionsBlockCards'), {suspense: true,});
const TelevisionsBlockHero = dynamic(() => import('components/page/Televisions/TelevisionsBlockHero'), {suspense: true,});
const TelevisionsBlockSpotlight = dynamic(() => import('components/page/Televisions/TelevisionsBlockSpotlight'), {suspense: true,});
const TelevisionsTvHero = dynamic(() => import('components/page/Televisions/TelevisionsTvHero'), {suspense: true,});
const PrivacyPolicyTextEditor = dynamic(() => import('components/page/PrivacyPolicy/PrivacyPolicyTextEditor'), {suspense: true,});
const UpgradeL9GForm = dynamic(() => import('components/page/Upgrade/UpgradeL9GForm'), {suspense: true,});
const BeyondLaserBanner = dynamic(() => import('components/page/BeyondLaser/BeyondLaserBanner'), {suspense: true,});
const BeyondLaserHeader = dynamic(() => import('components/page/BeyondLaser/BeyondLaserHeader'), {suspense: true,});
const BeyondLaserMomentsBlock = dynamic(() => import('components/page/BeyondLaser/BeyondLaserMomentsBlock'), {suspense: true,});
const BeyondLaserImageBlock = dynamic(() => import('components/page/BeyondLaser/BeyondLaserImageBlock'), {suspense: true,});
const BeyondLaserTextBlock = dynamic(() => import('components/page/BeyondLaser/BeyondLaserTextBlock'), {suspense: true,});
const BeyondLaserQuoteBlock = dynamic(() => import('components/page/BeyondLaser/BeyondLaserQuoteBlock'), {suspense: true,});
const BeyondLaserIframeBlock = dynamic(() => import('components/page/BeyondLaser/BeyondLaserIframeBlock'), {suspense: true,});
const BeyondLaserFooterBlock = dynamic(() => import('components/page/BeyondLaser/BeyondLaserFooterBlock'), {suspense: true,});
const BeyondLaserFlipDevice = dynamic(() => import('components/page/BeyondLaser/BeyondLaserFlipDevice'), {suspense: true,});
const GoogleTvBanner = dynamic(() => import('components/page/GoogleTv/GoogleTvBanner'), {suspense: true,});
const GoogleTvHero = dynamic(() => import('components/page/GoogleTv/GoogleTvHero'), {suspense: true,});
const GoogleTvProducts = dynamic(() => import('components/page/GoogleTv/GoogleTvProducts'), {suspense: true,});
const GoogleTvTops = dynamic(() => import('components/page/GoogleTv/GoogleTvTops'), {suspense: true,});
const GoogleTvTextBox = dynamic(() => import('components/page/GoogleTv/GoogleTvTextBox'), {suspense: true,});
const GoogleTvFeatureBlocks = dynamic(() => import('components/page/GoogleTv/GoogleTvFeatureBlocks'), {suspense: true,});
const Subscribe = dynamic(() => import('components/common/Subscribe'), {suspense: true,});
const Footer = dynamic(() => import('components/common/Footer'), {suspense: true,})

const Components = {
    ProductsBox:ProductsBox,
TextEditor:TextEditor,
ImageBox:ImageBox,
LetsGetRealTextBox:LetsGetRealTextBox,
Header:Header,
NeedHelpBox:NeedHelpBox,
BreadCrumb:BreadCrumb,
IFrame:IFrame,
UnauthorizedListCommon:UnauthorizedListCommon,
OfferClaimForm:OfferClaimForm,
SimpleImagesList:SimpleImagesList,
PromoBanner:PromoBanner,
AuthorizedRetailersBadge:AuthorizedRetailersBadge,
AuthorizedRetailersFeatures:AuthorizedRetailersFeatures,
AuthorizedRetailersNote:AuthorizedRetailersNote,
AuthorizedRetailersLogos:AuthorizedRetailersLogos,
UnauthorizedList:UnauthorizedList,
LandingSlider:LandingSlider,
LandingProductsBox:LandingProductsBox,
LandingVideoPlayer:LandingVideoPlayer,
ProductsBanner:ProductsBanner,
ProductsGrid:ProductsGrid,
ProductsBannerV2:ProductsBannerV2,
ProductsGridV2:ProductsGridV2,
ProductInfoAndSliderBox:ProductInfoAndSliderBox,
ProductInfoAndSliderBoxV2:ProductInfoAndSliderBoxV2,
ProductTextWithImageBox:ProductTextWithImageBox,
ProductFeatureWithImage:ProductFeatureWithImage,
CompareProduct:CompareProduct,
ProductWhereToBuy:ProductWhereToBuy,
ListImageBox:ListImageBox,
ProductBigScreenTextsBox:ProductBigScreenTextsBox,
ProductFeatureWithParagraph:ProductFeatureWithParagraph,
ProductTextWithIcon:ProductTextWithIcon,
ProductStaticContent:ProductStaticContent,
ProductCategoryBox:ProductCategoryBox,
ProductCategoryBoxV2:ProductCategoryBoxV2,
ProductImageBox:ProductImageBox,
ProductBigContent:ProductBigContent,
ProductFeaturesWithIcon:ProductFeaturesWithIcon,
ProductRelatedItemsBox:ProductRelatedItemsBox,
ProductReviewBox:ProductReviewBox,
ProductNewsBox:ProductNewsBox,
ProductBottomImageBox:ProductBottomImageBox,
ProductDetailsBox:ProductDetailsBox,
ProductFineMeInStore:ProductFineMeInStore,
ProductResourceBox:ProductResourceBox,
ProductPackageHeader:ProductPackageHeader,
ProductPackagesSlider:ProductPackagesSlider,
SmartInfoHead:SmartInfoHead,
ProductFeatureWithImageWithBTN:ProductFeatureWithImageWithBTN,
SmartInfoTvsBox:SmartInfoTvsBox,
SmartInfoTextBox:SmartInfoTextBox,
SmartInfoTextAndImageBox:SmartInfoTextAndImageBox,
SmartInfoInteractBox:SmartInfoInteractBox,
SmartInfoFindHisense:SmartInfoFindHisense,
SmartInfoBetterNewOrOldBox:SmartInfoBetterNewOrOldBox,
SupportHeadIntro:SupportHeadIntro,
SupportCovidBox:SupportCovidBox,
SupportCategoryBox:SupportCategoryBox,
SupportNewHead:SupportNewHead,
ProductsCategoriesWithSearch:ProductsCategoriesWithSearch,
ProductsSupportOptions:ProductsSupportOptions,
SupportNeedAssistance:SupportNeedAssistance,
SupportNewProducts:SupportNewProducts,
SupportNewHeadV2:SupportNewHeadV2,
SupportNeedMoreWithButton:SupportNeedMoreWithButton,
RegisterHead:RegisterHead,
RegisterForm:RegisterForm,
FAQhead:FAQhead,
FAQContentBox:FAQContentBox,
FAQDescriptionWithTwoBox:FAQDescriptionWithTwoBox,
ContactUsHead:ContactUsHead,
ContactUsChat:ContactUsChat,
ContactUsForm:ContactUsForm,
ContactUsNewHead:ContactUsNewHead,
ContactUsNewForm:ContactUsNewForm,
ContactUsPhoneUs:ContactUsPhoneUs,
ContactUsAboutHisense:ContactUsAboutHisense,
CompanyHeaderIntro:CompanyHeaderIntro,
CompanyNavBar:CompanyNavBar,
CompanyInfo:CompanyInfo,
CompanySubmenu:CompanySubmenu,
CommercialIntro:CommercialIntro,
CommercialTowImageBox:CommercialTowImageBox,
CommercialBecomeAPartner:CommercialBecomeAPartner,
TVAndAudioHead:TVAndAudioHead,
TVAndAudioTvShopBox:TVAndAudioTvShopBox,
TVAndAudioIntro:TVAndAudioIntro,
TVAndAudioLaserIntro:TVAndAudioLaserIntro,
TVAndAudioSmartChoice:TVAndAudioSmartChoice,
TVAndAudioFindHisense:TVAndAudioFindHisense,
TVAndAudioFindProduct:TVAndAudioFindProduct,
UHDIntro:UHDIntro,
UHDNewsBox:UHDNewsBox,
UHDAbilityBox:UHDAbilityBox,
UHDFindTv:UHDFindTv,
ULEDHead:ULEDHead,
ULEDProducts:ULEDProducts,
ULEDImageAndTextItem:ULEDImageAndTextItem,
ULEDTextBox:ULEDTextBox,
ULEDImageBoxWithBtn:ULEDImageBoxWithBtn,
ULEDAllTech:ULEDAllTech,
ULEDImageAndTextBox:ULEDImageAndTextBox,
ULEDGreatTvTextBox:ULEDGreatTvTextBox,
LaserHead:LaserHead,
LaserImageAndTextBox:LaserImageAndTextBox,
LaserTitleAndSubTitleBox:LaserTitleAndSubTitleBox,
LaserFinedWithImage:LaserFinedWithImage,
DishwashersHead:DishwashersHead,
ProductSupportInfo:ProductSupportInfo,
ProductSupportLinks:ProductSupportLinks,
ProductSupportNewHead:ProductSupportNewHead,
ProductSupportNavBar:ProductSupportNavBar,
ProductSupportVideoBox:ProductSupportVideoBox,
ProductSupportFAQ:ProductSupportFAQ,
ProductSupportRegister:ProductSupportRegister,
ProductSupportReplacement:ProductSupportReplacement,
HomeApplianceFeatures:HomeApplianceFeatures,
HomeApplianceQA:HomeApplianceQA,
HomeApplianceTextBoxWithImage:HomeApplianceTextBoxWithImage,
HomeApplianceTextBox:HomeApplianceTextBox,
HomeApplianceImageWithBackground:HomeApplianceImageWithBackground,
CESHomeNavBar:CESHomeNavBar,
CESHomeImageAndText:CESHomeImageAndText,
CESLaserLearnMore:CESLaserLearnMore,
ImageBoxWithPaddingAndBgBlack:ImageBoxWithPaddingAndBgBlack,
CEOLaserLikeBox:CEOLaserLikeBox,
MoreTvHead:MoreTvHead,
MoreTvBox:MoreTvBox,
MoreTvVideoBox:MoreTvVideoBox,
MoreTvAmericaBox:MoreTvAmericaBox,
MoreTvLessTalk:MoreTvLessTalk,
MoreTvHisensePromise:MoreTvHisensePromise,
MoreTvGrabSlider:MoreTvGrabSlider,
MoreTvLessTalkForm:MoreTvLessTalkForm,
MoreTvExperts:MoreTvExperts,
MoreTVNewItemsBox:MoreTVNewItemsBox,
MoreTVNewHisensePromise:MoreTVNewHisensePromise,
BlogListHead:BlogListHead,
BlogListSearchBox:BlogListSearchBox,
BlogListReadArticleBox:BlogListReadArticleBox,
BlogListLittleReadArticleBox:BlogListLittleReadArticleBox,
BlogListSoundBarItemsBox:BlogListSoundBarItemsBox,
BlogListWithBigTitleAndLittleItem:BlogListWithBigTitleAndLittleItem,
BlogDescriptionBox:BlogDescriptionBox,
BlogImageGalleryBox:BlogImageGalleryBox,
BlogImageAndTextBox:BlogImageAndTextBox,
BlogVideoBox:BlogVideoBox,
BlogTwoImage:BlogTwoImage,
BlogSecondDescriptionBox:BlogSecondDescriptionBox,
BlogEasySlider:BlogEasySlider,
BlogBigImageAndTextBox:BlogBigImageAndTextBox,
BlogDescriptionWithShare:BlogDescriptionWithShare,
BlogHead:BlogHead,
BlogCubeSlider:BlogCubeSlider,
BlogMoreStories:BlogMoreStories,
PDPProductInfoSliderAndText:PDPProductInfoSliderAndText,
PDPNavBar:PDPNavBar,
PDPImageAndInfoGrayBg:PDPImageAndInfoGrayBg,
PDPVideoBox:PDPVideoBox,
PDPImageAndInfoDarkBg:PDPImageAndInfoDarkBg,
PDPImageAndInfoLightGrayBg:PDPImageAndInfoLightGrayBg,
PDMImageAndInfoSilverBg:PDMImageAndInfoSilverBg,
PDPTopFeatures:PDPTopFeatures,
PDPDescriptionSliderWithDarkGray:PDPDescriptionSliderWithDarkGray,
PDPTextAndLongImageBox:PDPTextAndLongImageBox,
PDPReviewsAndAwards:PDPReviewsAndAwards,
PDPReadyToBuyBox:PDPReadyToBuyBox,
PDPChooseULEDTvBox:PDPChooseULEDTvBox,
ListVideoPlayer:ListVideoPlayer,
SponsorshipDescriptionGrayBg:SponsorshipDescriptionGrayBg,
SponsorshipVideoAndTextBox:SponsorshipVideoAndTextBox,
SponsorshipBigImageAndText:SponsorshipBigImageAndText,
SponsorshipImagesWithButton:SponsorshipImagesWithButton,
SponsorshipTitleBox:SponsorshipTitleBox,
SponsorshipTextGradient:SponsorshipTextGradient,
SponsorImageAndText:SponsorImageAndText,
SponsorImageAndLogo:SponsorImageAndLogo,
HeaderGoogleTv:HeaderGoogleTv,
HeaderBanner:HeaderBanner,
ClaimPrize:ClaimPrize,
DoubleWarranty:DoubleWarranty,
EligibleModels:EligibleModels,
ExpertsAdv:ExpertsAdv,
DigitalTrends:DigitalTrends,
FeatureBadges:FeatureBadges,
Guarantee:Guarantee,
HeroBanner:HeroBanner,
ScrollableVideo:ScrollableVideo,
PureColor:PureColor,
ColorFeature:ColorFeature,
LumensOfBrightness:LumensOfBrightness,
SmoothMotion:SmoothMotion,
ScreenSize:ScreenSize,
LightRejection:LightRejection,
DolbyVision:DolbyVision,
DolbyAtmos:DolbyAtmos,
FineTouches:FineTouches,
AndroidTv:AndroidTv,
FeatureBlock:FeatureBlock,
Awards:Awards,
Comments:Comments,
FAQs:FAQs,
Specs:Specs,
Resources:Resources,
Retailers:Retailers,
WhereToBuy:WhereToBuy,
L9GProductDetailsBox:L9GProductDetailsBox,
HomePageMBSlider:HomePageMBSlider,
HomePageMBProductsSlider:HomePageMBProductsSlider,
HomePageMBVideoPlayer:HomePageMBVideoPlayer,
HomePageMBTextedBoxes:HomePageMBTextedBoxes,
HomePageMBTextedBoxesItem:HomePageMBTextedBoxesItem,
HomePageMBDiscovery:HomePageMBDiscovery,
HomePageMBDiscoveryItem:HomePageMBDiscoveryItem,
BlockCategories:BlockCategories,
BlockTVHero:BlockTVHero,
BlockKitchenHero:BlockKitchenHero,
BlockFeatured:BlockFeatured,
BlockHero:BlockHero,
BlockSpotlight:BlockSpotlight,
BlockCards:BlockCards,
ExtendedWarrantyBanner:ExtendedWarrantyBanner,
ExtendedWarrantyFAQ:ExtendedWarrantyFAQ,
ExtendedWarrantyFeatureBlocks:ExtendedWarrantyFeatureBlocks,
ExtendedWarrantyWizard:ExtendedWarrantyWizard,
ExtendedWarrantyTextBlock:ExtendedWarrantyTextBlock,
ExtendedWarrantyProductsSlider:ExtendedWarrantyProductsSlider,
ExtendedWarrantyProductGrid:ExtendedWarrantyProductGrid,
ExtendedWarrantyPaymentStatus:ExtendedWarrantyPaymentStatus,
TelevisionsBlockBanner:TelevisionsBlockBanner,
TelevisionsBlockCards:TelevisionsBlockCards,
TelevisionsBlockHero:TelevisionsBlockHero,
TelevisionsBlockSpotlight:TelevisionsBlockSpotlight,
TelevisionsTvHero:TelevisionsTvHero,
PrivacyPolicyTextEditor:PrivacyPolicyTextEditor,
UpgradeL9GForm:UpgradeL9GForm,
BeyondLaserBanner:BeyondLaserBanner,
BeyondLaserHeader:BeyondLaserHeader,
BeyondLaserMomentsBlock:BeyondLaserMomentsBlock,
BeyondLaserImageBlock:BeyondLaserImageBlock,
BeyondLaserTextBlock:BeyondLaserTextBlock,
BeyondLaserQuoteBlock:BeyondLaserQuoteBlock,
BeyondLaserIframeBlock:BeyondLaserIframeBlock,
BeyondLaserFooterBlock:BeyondLaserFooterBlock,
BeyondLaserFlipDevice:BeyondLaserFlipDevice,
GoogleTvBanner:GoogleTvBanner,
GoogleTvHero:GoogleTvHero,
GoogleTvProducts:GoogleTvProducts,
GoogleTvTops:GoogleTvTops,
GoogleTvTextBox:GoogleTvTextBox,
GoogleTvFeatureBlocks:GoogleTvFeatureBlocks,
Subscribe:Subscribe,
Footer:Footer
}

export default (block, pim , notification) => {
    if (typeof Components[block.name] !== 'undefined') {
        return React.createElement(Components[block.name], {
            key: block.id,
            data: block,
            pim: pim,
            notification: notification
        })
    }
    // return React.createElement(
    // 	() => <div>The component {block.component} has not been created yet.</div>,
    // 	{ key: block._uid }
    // )
}     
