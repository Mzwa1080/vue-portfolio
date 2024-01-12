<template>
    <div>
        <nav class="navbar d-flex  navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid ">
        <RouterLink to="/">
          <img
            class="img-fluid img-nav" src="https://lh3.googleusercontent.com/fife/AGXqzDmFBOWxmm05yJiFHywKb11VXWEsrdETGj-E9-AkZAmtid4yo-AH-fXQTb3HXQ2hevBc0aXu7Yem2zasD6glOXmpBasAnloHMV9U0hn1t5lve3_BmHlm7e1lezSdvOB4972VksAKP2y7oz35hRgRMWRaxfnMPqh1AoIw82j7ri92PqOedltcifB3ZDPnDRTmQphzFFGcby-PpLhLqY4ouRg7JN1E2ceKIdEnTEgS5JFG9hKsixqO_lvwd3__QTyPSXM4bzZBbgRRrNxIEG-ssRVi0i7QckyBjNMkQLgG7U622cCUjiyecwz50EviWm1vNaHsEsSYOWYDdHoyW1MO9V-w1CtGMVbJUp5_eh0PT_R-H7CYBT7AA80HO6pZaomAa6ngffXvlIbiRbKXIoGfLrL-wKoz3bQRxMlG_V0v9lfAFT2VF7a5X9JgWrtMZR0W9a1nNKUgFK6QkH-j-VlIdorkEmlLKodVfCA1VNIhMxmyJd7muuIV8DABQq_l2eA1njrzjC-0WHGyaHt4Slrd_4D2qUlHevf1gJdWokvSS_vuwfuWxLkN-31LZUEB3SU0AeLWSRekKzHvEHQSXruHeXnQLzeRqVgBYRhtYqKx-gkXZIUdbbFGmUm472NJ7uCFBA7XJDf6nZJALkGfsl2NMfMo9IDx8sIk3h0G_dxn7iw5UrhCEId98FRsSlF9xg4Vmu2atSHBgt_uYBI2MMTCC0jEX-6zATJUII8IppIdy0CN3RbBVPj2WeHw0ubA_qKb_0rGSKYrfGv7nk_AQjBSuhHqVWn7CD_JZq_MtTPdF0hP8ASe5kF-0G0SroXwjfhgGmbLlvt2ZAIHHxdTphbR2QawRs66uzqrREfsPeGxDLdJYK5E9oG-XBWmXeh6mUjpJU6GPWgkmAm7u99A38XGuSqEzVGkbyZU-zBr-xYsr49xHqwM2pSTtMC_i8dLCSBfcmc1Z6vpDq8zhZG5mgYF-gpyymGKsU2WOsTOEEbrGcZHX-Zbr-lkF08v7omtkShDpCvF0u3z6Uu_ffYbRLZf9zzkYBYMfLFYqKPJQxMrFXS8IYRW1x8soXGs1ylAiYShpf44o8QvsKWijODx5oakWVYJdjIyCiris52rvYz0otNIkTucP95ep8xra_18Uu0KiWFKE99JgVp5D4gYMgTqUGq9DFkys3_np4eu2G32RwH6QXYhRAR35h5WxgNtTTsjC0IswNnBvniSpcJIVzM0CCRdifpGOQWDfU9KUV1e30r3ZDvhAFWhwODRQeOaFx9FjV-YRPkO-JGsmeUk-WvZF59GKZcWn5w8PMKHzS1Eu2rIjg1EHpvgK-vSMqite2yxJNSjVJmR3nvFhz8o3TSF7Yo5xj03NkBITT0Mvxo7WRcyztJArF50y4rC0lRMQOvYLY-_mbHCTi_x_ergm7gjCeuVALqxbzh40-U66wgC719_tRARH7SZJgbkp6rTJy2nX0XSHkGdMYaQCdreRg-tcYs8Q5F7JkJ_6vE0roOtsI1uva2nnikVL4Tjdg=w1696-h1272-p-k-nu" alt="logo"
          />
        </RouterLink>
        <button
          class="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse  justify-content-end navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link text-white"> Home </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link text-white"> About </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/resume" class="nav-link text-white"> Resume </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/projects" class="nav-link text-white"> Projects </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/testimonials" class="nav-link text-white"> Reviews </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link text-white"> Contact </RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
    export default {
        name : 'NavbarComp'
    }
</script>

<style scoped>

nav{
  box-shadow: .2vw .2vw .2vw .2vw;
  color: white;
}

</style>