<template>
  <div style="background-color: #ffc107">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div style="text-align:center;" class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.25rem;
  font-weight: bold;
  color: #343a40;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
}
a.nav-link:hover {
  background: #f8f9fa;
}
</style>