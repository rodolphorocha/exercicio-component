<template>

</template>
<style scoped>
footer {
  background-color: #27ae60;
  padding: 2vh 8vw;
  color: #fff;

  .upper-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 100px;
    border-bottom: 2px solid #fff;

    & div {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & .footer-title {
        font-size: 1.2rem;
        font-weight: 700;

        & a {
          text-decoration: none;
          color: #fff;
        }
      }

      & .contact-text {
        font-size: 1.1rem;
        font-weight: 700;
      }
    }
  }

  .lower-footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-size: 0.8rem;
  }

  ul {
    display: flex;
    padding: 0;
    gap: 20px;

    li {
      list-style: none;
      font-size: 1.2rem;
      color: #fff;
    }
  }
}
</style>