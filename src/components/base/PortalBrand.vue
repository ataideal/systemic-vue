<template>
  <header class="portal-brand">
    <h1 class="title-1">Portal Systemic</h1>
  </header>
</template>

<script>
export default {
  name: 'PortalBrand',
};
</script>

<style scoped lang="scss">
.portal-brand {
  & {
    display: flex;
    align-self: flex-start;
    justify-items: center;
    align-items: center;
    background: #A2C037;
    border-radius: 0 35px 35px 0;
    padding: .5rem 2rem;
    width: 170px;
    height: 64px;
  }

  > .title-1 {
    margin-bottom: 0;
    font-weight: 200;
    text-transform: uppercase;
    line-height: 1;
    color: #fff;
  }
}
</style>
