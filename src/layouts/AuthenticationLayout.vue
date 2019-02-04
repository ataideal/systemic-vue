<template>
  <section class="authentication-layout">
    <div class="content">
      <portal-brand />

      <div class="form">
        <slot name="form-header" />
        <slot name="form-content" />
      </div>

      <nav class="navigation mb-4">
        <slot name="navigation" />
      </nav>
    </div>

    <aside >
      <v-img
           src="http://systemic.com.br/wp-content/uploads/2018/05/escola-bilingue.png"
           position="center center"
           aspect-ratio="0.9">

          <systemic-logo />
      </v-img>


    </aside>
  </section>
</template>

<script>
import PortalBrand from '@/components/base/PortalBrand';
import SystemicLogo from '@/components/base/SystemicLogo';

export default {
  name: 'AuthenticationLayout',
  components: {
    PortalBrand,
    SystemicLogo,
  },
  methods: {
  },
};
</script>

<style lang="scss">
.authentication-layout {
    display: grid;
    grid-template-areas: "content sidebar";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    overflow: hidden;

    > .sidebar {
      display: flex;
    }

  > .content {
    & {
      grid-area: content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0 1rem;
      background: #fff;
    }

    > .form {
      & {
        width: 360px;
      }

      > .header {
        text-align: center;

        .icon.-colour {
          margin-bottom: 2rem;
        }
      }

      > .card > .action {
        justify-content: space-around;
      }
    }

    > .navigation {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      > .text {
        color: #7e7e7e;
      }

      > .link {
        & {
          text-transform: none;
        }

        > .text {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
