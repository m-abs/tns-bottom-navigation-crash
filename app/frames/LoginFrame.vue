<template lang="html">
    <Page>
        <ActionBar title="Login" />

        <GridLayout>
            <Button text="Tap to login" @tap="login" />
        </GridLayout>
    </Page>
</template>

<script>
import MainFrame from "./MainFrame";

export default {
  components: {
    MainFrame
  },
  methods: {
    login: function() {
      this.$navigateTo(MainFrame, { clearHistory: true });
    }
  }
};
</script>