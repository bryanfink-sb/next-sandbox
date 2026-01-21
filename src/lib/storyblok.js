import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Page from "@/components/Page";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import NavMain from '@/components/NavMain';
import NavMainItem from '@/components/NavMainItem';
import Hero from '@/components/Hero';
import Article from '@/components/Article';
import ArticleCard from '@/components/ArticleCard';



export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
    components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    nav_main: NavMain,
    nav_main_item: NavMainItem,
    hero: Hero,
    article: Article,
    article_card: ArticleCard,
  },
});