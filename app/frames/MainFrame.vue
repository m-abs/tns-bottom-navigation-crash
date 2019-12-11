<template lang="html">
<Page actionBarHidden="true">
    <BottomNavigation>
        <TabStrip>
            <TabStripItem>
                <Label text="Overview"></Label>
                <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Info"></Label>
                <Image src.decode="font://&#xf1ea;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="More"></Label>
                <Image src.decode="font://&#xf002;" class="fa t-36"></Image>
            </TabStripItem>
        </TabStrip>

        <TabContentItem>
            <Frame>
                <Overview />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Info />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <More />
            </Frame>
        </TabContentItem>

    </BottomNavigation>
    </Page>
</template>

<script>
import Overview from "../components/Overview";
import Info from "../components/Info";
import More from "../components/More";

export default {
  components: {
    Overview,
    Info,
    More
  }
};
</script>
