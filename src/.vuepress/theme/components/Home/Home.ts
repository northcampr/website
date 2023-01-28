import { computed, defineComponent } from "vue";
import { usePageFrontmatter } from "@vuepress/client";
import type { HomepageFrontmatter } from "./types";
import NavLink from "../NavLink.vue";
import Hero from "./Hero";
import About from "./About";
import ProductAndProcess from "./ProductAndProcess";
import SuccessStories from "./SuccessStories";
import Conclusion from "./Conclusion";

export default defineComponent({
  name: "Home",
  components: {
    NavLink,
    Hero,
    About,
    ProductAndProcess,
    SuccessStories,
    Conclusion,
  },
  setup() {
    const frontmatter = usePageFrontmatter<HomepageFrontmatter>();
    const heroText = computed(() => {
      return frontmatter.value.heroText;
    });
    const polaroidImage = computed(() => {
      return frontmatter.value.polaroidImage;
    });
    const process = computed(() => {
      return frontmatter.value.process;
    });
    const successStories = computed(() => {
      return frontmatter.value.successStories;
    });
    const callToAction = computed(() => {
      return frontmatter.value.nextMove;
    });

    return {
      heroText,
      polaroidImage,
      process,
      successStories,
      callToAction,
    };
  },
});
