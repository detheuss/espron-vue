<template>
  <div class="content">
    <b-container>
      <h5>Feel free to</h5>
      <h1>Contact us</h1>
      <div class="espron-business-card mt-5">
        <img
          src="../assets/Logo/logo-trans.png"
          alt="Espron Projekt"
          class="espron-business-card-logo"
        >
        <div>
          <h3>
            <b-icon
              icon="envelope-open-fill"
              class="espron-bussiness-card-icon"
            ></b-icon> <span class="ml-2"> Email</span>
          </h3>
          <div class="mt-3 mb-5">
            <h5>info@espronprojekt.com</h5>
          </div>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/company/espron-projekt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <b-icon
                icon="linkedin"
                class="espron-bussiness-card-icon"
              ></b-icon><span class="ml-2 espron-bussiness-card-icon">LinkedIn</span>
            </h3>
          </a>
        </div>

      </div>
    </b-container>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  a:hover {
    text-decoration: none !important;
  }
  .espron-bussiness-card-icon {
    color: #595959;
  }
  .espron-bussiness-card-icon:hover {
    color: #898989;
    cursor: pointer;
  }
  .espron-business-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 990px) {
    .espron-business-card {
      flex-direction: column;

      align-items: baseline;
    }
  }
  .espron-business-card-logo {
    margin-bottom: 30px;
    width: 30%;
  }
  @media (max-width: 990px) {
    .espron-business-card-logo {
      margin-bottom: 30px;
      width: 100%;
    }
  }
</style>