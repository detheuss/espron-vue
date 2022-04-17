<template>
  <div class="espron-footer">
    <p>
      <b-icon icon="envelope-open-fill"></b-icon> <span class="ml-2"> info@espronprojekt.com </span>
    </p>
    <a
      href="https://www.linkedin.com/company/espron-projekt/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>
        <b-icon icon="linkedin"></b-icon><span class="ml-2 espron-bussiness-card-icon">LinkedIn</span>
      </p>
    </a>

  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .espron-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    color: #595959;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 15px;
  }
  a {
    color: #595959;
  }
  a:hover {
    color: #898989;
    text-decoration: none;
  }
</style>