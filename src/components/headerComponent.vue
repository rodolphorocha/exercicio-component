<script setup>
    defineEmits(['show-cart'])
</script>

<template>
<header>
    <nav>
      <h1>
        <RouterLink to="/">
          IFbooks
          <span class="logo-title"> Apreço a livros </span>
        </RouterLink>
      </h1>
      <div class="search-wrapper">
        <input type="text" class="search" placeholder="Buscar..." />
      </div>
      <ul>
        <li><RouterLink to="/termos">Termos</RouterLink></li>
        <li><RouterLink to="/equipe">Equipe</RouterLink></li>
        <li> <RouterLink to="/envio">Envio</RouterLink></li>
        <li><RouterLink to="/devolucoes">Devoluções</RouterLink></li>
      </ul>
      <ul class="icons">
        <li @click="$emit('show-cart')"><span class="mdi mdi-cart"></span></li>
        <li><span class="mdi mdi-heart"></span></li>
        <li><span class="mdi mdi-account"></span></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 8vw;
  border-bottom: 2px solid #27ae6099;

  & a {
    text-decoration: none;
    color: #000;
  }

  & h1 {
    font-size: 1.3rem;
    color: #000;

    & a {
      text-decoration: none;
      color: #000;
      display: flex;
      align-items: center;
    }

    & .logo-title {
      border-left: 1px solid #27ae6099;
      font-size: 0.8rem;
      margin-left: 10px;
      padding-left: 10px;
      color: #27ae6099;
      width: 100px;
      line-height: 1rem;
    }
  }

  & input {
    width: 400px;
    height: 40px;
    border-radius: 5px;
    font-size: 1rem;
    border: 0;
    background-color: #f1f1f1;
    padding: 5px;
  }

  & ul {
    display: flex;
  }

  & ul li {
    list-style: none;
    margin: 0 10px;
    font-size: 1rem;
  }

  & .icons li {
    color: #27ae60;
    font-size: 1.3rem;
  }

  & .search-wrapper {
    position: relative;
  }

  & .search-wrapper::before {
    content: '󰍉'; /* Code glyph para mdi-magnify */
    font-family: 'Material Design Icons';
    font-size: 1.2rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  & .search {
    padding-right: 2rem;
  }
}
</style>
