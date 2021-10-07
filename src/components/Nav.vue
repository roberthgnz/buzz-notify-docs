<template>
  <nav>
    <h1>BuzzNotify</h1>
    <ul>
      <li>
        <a href="https://github.com/eliutgon/buzz-notify" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/eliutgon" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            />
          </svg>
        </a>
      </li>
      <li>
        <ThemeToggle/>
      </li>
    </ul>
  </nav>
</template>

<script>
import ThemeToggle from '../components/ThemeToggle.vue'

export default {
  components: {
    ThemeToggle
  }
};
</script>


<style scoped>
nav {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

nav ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (min-width: 700px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
  }
  nav ul {
    width: 10%;
  }
}

nav ul li {
  display: inline-block;
  color: #202124;
  margin-right: 1rem;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: #202124;
}

.dark ul li a {
  color: #fff;
}
</style>