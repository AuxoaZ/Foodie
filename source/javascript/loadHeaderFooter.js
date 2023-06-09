let header = document.getElementById("header");
let footer = document.getElementById("footer");

const currentUrl = window.location.href;

header.innerHTML = `
<nav class="fixed top-0 z-50 w-full bg-cyan-900 border-gray-200 ">
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5"
  >
    <a href="${currentUrl.includes("/page") ? "../index.html" : "./index.html"
  }" class="flex items-center">
    <img src="https://i.ibb.co/dmF5XT1/logo-foodie.png" alt="logo-foodie" border="0" class="h-10">
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap text-gray-100"
        >Foodie</span
      >
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-200 hover:text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-cyan-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-cyan-900"
      >
        <li>
          <a
            href="${currentUrl.includes("/page") ? "../index.html" : ""}#home"
            class="navbar-item block py-2 pl-3 pr-4 text-gray-100 hover:underline underline-offset-4 rounded md:bg-transparent md:p-0 "
            aria-current="page"
            >Home</a
          >
        </li>
        <li>
          <a
            href="${currentUrl.includes("/page") ? "../index.html" : ""
  }#benefit"
            class="navbar-item block py-2 pl-3 pr-4 text-gray-100 hover:underline underline-offset-4 rounded md:bg-transparent md:p-0 "
            >Benefit</a
          >
        </li>
        <li>
          <a
            href="${currentUrl.includes("/page") ? "../index.html" : ""
  }#package"
            class="navbar-item block py-2 pl-3 pr-4 text-gray-100 hover:underline underline-offset-4 rounded md:bg-transparent md:p-0 "
            >Package</a
          >
        </li>
        <li>
          <a
            href="${currentUrl.includes("/page") ? "../index.html" : ""
  }#testimony"
            class="navbar-item block py-2 pl-3 pr-4 text-gray-100 hover:underline underline-offset-4 rounded md:bg-transparent md:p-0 "
            >Testimony</a
          >
        </li>
        
        <li id="access">
        <a  href="page/onboarding-page.html"><button type="button" class="text-white font-semibold bg-yellow-500 hover:bg-yellow-400 0 rounded-lg text-sm px-5 py-1.5 text-center mr-2">
        Login</button></a>
        </li>
        </ul>
    </div>
  </div>
</nav>`;

footer.innerHTML = `<footer class="bg-cyan-900 relative bottom-0 w-full">
  <div class="mx-auto w-full max-w-screen-xl text-center p-5 py-6 lg:py-8">
    <span class="text-sm text-gray-300x text-white"
      >© 2023
      <a href="${currentUrl.includes("/page") ? "../index.html" : "./index.html"
  }" class="hover:underline">Foodie</a>. All
      Rights Reserved.
    </span>
  </div>
  </footer>`;
