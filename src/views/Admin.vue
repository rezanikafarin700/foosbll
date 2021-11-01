<template>
  <div class="admin">
    <nav class="navbar navbar-expand-lg navbar-light bg-light rtl">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">پنل مدیریت</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >صفحه اصلی</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link
                  class="link"
                  tag="div"
                  :to="{ path: '/admin/create' }"
                  >افزودن محصول جدید</router-link
                >
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link
                  class="link"
                  tag="div"
                  :to="{ path: '/admin/create-admin' }"
                  >افزودن مدیر جدید</router-link
                >
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Admin",
};
</script>

<style scoped lang="scss">
.admin {
  position: relative;
  height: 100vh;
  overflow-y: scroll;
}
.header {
  background-color: dodgerblue;
  color: #f8f8f8;
  padding: 1rem;
  position: sticky;
  top: 0;

  nav {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .link {
      cursor: pointer;
    }
  }
}
</style>
