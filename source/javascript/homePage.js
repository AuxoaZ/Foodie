const content = document.getElementById("content");

const isUserLoggedIn = () => {
  let getSession = JSON.parse(localStorage.getItem("sessionData"));

  if (getSession != null && getSession.isLoggedIn == true) {
    return `<a href="page/bmi.html"><button type="submit"
            class="border-2 border-cyan-900 text-cyan-900 rounded-sm p-2 text-md md:text-lg md:hover:scale-110 transition duration-150 active:bg-cyan-900 active:text-white">Ke
            Kalkultor
            BMI</button></a>`;
  }

  return `<a href="page/onboarding-page.html"><button type="submit"
            class="border-2 border-cyan-900 text-cyan-900 rounded-sm p-2 text-md md:text-lg md:hover:scale-110 transition duration-150 active:bg-cyan-900 active:text-white">Ke
            Kalkultor
            BMI</button></a>`;
};

content.innerHTML = `<div class="container">
      <div
        class="flex md:justify-around lg:justify-between items-center flex-col-reverse md:flex-row my-12 md:my-20 w-full">
        <div id="home" class="copywrite text-center p-5 md:text-start md:w-1/2">
          <h1 class="text-2xl lg:text-5xl font-semibold text-cyan-900 mb-6">Temukan gaya
            hidup sehat yang
            tepat untukmu dengan
            panduan diet
            terpercaya kami
          </h1>
          <p class="text-slate-500 mb-6 text-sm md:text-md">Ayo ukur indeks massa tubuh anda sekarang!</p>
          ${isUserLoggedIn()}
        </div>
        <div class="hero-img md:block md:w-5/12 lg:block lg:w-2/4">
          <img src="source/images/home/hero-removebg.png">
        </div>
      </div>

      <div id="benefit" class="flex justify-between items-center gap-x-12 my-12 md:my-20 w-full">
        <div class="hidden lg:block lg:w-1/2">
          <img src="source/images/home/benefit-removebg.png">
        </div>
        <div class="benefit w-full text-center lg:w-5/12">
          <h3 class="text-xl text-center lg:text-start font-medium mb-10 md:mb-16 text-cyan-900">Keuntungan dari Kami
          </h3>
          <div class="flex flex-wrap gap-5 mx-10 md:mx-0 md:gap-7 lg:gap-12">
            <div
              class="card border border-cyan-900 p-4 rounded-lg flex flex-col justify-center items-center md:block md:border-0 md:p-0 w-full md:w-40 lg:w-56">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-cyan-900">
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>

              <h4 class="text-lg font-medium text-cyan-900">Lebih Sehat</h4>
              <p class="text-slate-500">Imunitas akan lebih kuat dengan tubuh yang sehat</p>
            </div>
            <div
              class="card border border-cyan-900 p-4 rounded-lg flex flex-col justify-center items-center md:block md:border-0 md:p-0 w-full md:w-40 lg:w-56">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-cyan-900">
                <path fill-rule="evenodd"
                  d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
                  clip-rule="evenodd" />
              </svg>

              <h4 class="text-lg font-medium text-cyan-900">Energi Meningkat</h4>
              <p class="text-slate-500">Dengan banyak energi, maka banyak yang bisa anda lakukan</p>
            </div>
            <div
              class="card border border-cyan-900 p-4 rounded-lg flex flex-col justify-center items-center md:block md:border-0 md:p-0 w-full md:w-40 lg:w-56">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-cyan-900">
                <path fill-rule="evenodd"
                  d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd" />
              </svg>

              <h4 class="text-lg font-medium text-cyan-900">Menjaga Berat Badan</h4>
              <p class="text-slate-500">Tubuh lebih ringan dan tidak mudah lelah</p>
            </div>
            <div
              class="card border border-cyan-900 p-4 rounded-lg flex flex-col justify-center items-center md:block md:border-0 md:p-0 w-full md:w-40 lg:w-56">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-cyan-900">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>

              <h4 class="text-lg font-medium text-cyan-900">Lebih Bahagia</h4>
              <p class="text-slate-500">Hidup sehat meningkatkan kepercayaan diri</p>
            </div>
          </div>
        </div>
      </div>
      <div id="package" class="package flex flex-col justify-between items-center gap-x-12 my-12 md:my-20 w-full">
        <h3 class="text-xl font-medium mb-10 md:mb-16 text-cyan-900">Pilih Paket</h3>
        <div class="md:flex md:justify-around w-full md:gap-x-5">
          <div
            class="plan bg-white text-cyan-900 p-8 lg:p-10 mb-8 md:mb-0 md:w-2/3 lg:w-1/4 rounded-lg drop-shadow-lg flex flex-col justify-between lg:hover:scale-110 duration-150">
            <div class="h-full">
              <p class="text-lg w-full text-center font-medium mb-4">Free</p>
              <p class="mb-4 text-xl text-center font-bold md:text-start md:text-lg lg:text-2xl">Rp 0/bulan</p>
              <ul class="list-disc ">
                <li class="md:text-sm">E-book panduan diet</li>
                <li class="md:text-sm">Akses ke artikel-artikel tentang diet</li>
                <li class="md:text-sm">Newsletter tentang tips dan trik diet</li>
                <li class="md:text-sm">Tidak ada biaya berlangganan</li>
            </div>
            </ul>
            <button type="submit"
              class="p-1.5 w-full text-center mt-10  bg-cyan-900 text-white rounded-md text-md transform opacity-50">
              Pilih
            </button>
          </div>
          <div
            class="plan bg-white text-cyan-900 p-8 lg:p-10 mb-8 md:mb-0 md:w-2/3 lg:w-1/4 rounded-lg drop-shadow-lg flex flex-col justify-between lg:hover:scale-110 duration-150">
            <div class="h-full">
              <p class="text-lg w-full text-center font-medium mb-4">Premium</p>
              <p class="mb-4 text-xl text-center font-bold md:text-start md:text-lg lg:text-2xl">Rp 149.999/bulan
              </p>
              <ul class="list-disc md:text-md">
                <li class="md:text-sm">Semua fitur dari paket Free</li>
                <li class="md:text-sm">Program diet khusus yang dipersonalisasi oleh ahli nutrisi</li>
                <li class="md:text-sm">Video tutorial olahraga</li>
              </ul>
            </div>
            <button type="submit"
              class="p-1.5 w-full text-center mt-10  bg-cyan-900 text-white rounded-md text-md transform opacity-50">
              Pilih
            </button>
          </div>
          <div
            class="plan bg-white text-cyan-900 p-8 lg:p-10 mb-8 md:mb-0 md:w-2/3 lg:w-1/4 rounded-lg drop-shadow-lg flex flex-col justify-between lg:hover:scale-110 duration-150">
            <div class="h-full">
              <p class="text-lg w-full text-center font-medium mb-4">Ultimate</p>
              <p class="mb-4 text-xl text-center font-bold md:text-start md:text-lg lg:text-2xl">Rp 249.999/bulan
              </p>
              <ul class="list-disc md:text-md">
                <li class="md:text-sm">Semua fitur dari paket Premium</li>
                <li class="md:text-sm">Konsultasi dengan ahli nutrisi secara langsung</li>
                <li class="md:text-sm">Dukungan pelanggan yang lebih cepat</li>
                <li class="md:text-sm">Akses ke acara seminar diet eksklusif</li>
              </ul>
            </div>
            <button type="submit"
              class="p-1.5 w-full text-center mt-10  bg-cyan-900 text-white rounded-md text-md transform opacity-50">
              Pilih
            </button>
          </div>
        </div>
      </div>
      <div id="testimony" class="testimony flex flex-col justify-between items-center gap-x-12 md:my-20 w-full">
        <h3 class="text-xl font-medium mb-10 md:mb-16 text-cyan-900">Apa Kata Mereka?</h3>
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-y-7 md:gap-y-0 md:gap-x-10 bg-white p-5 rounded-lg drop-shadow-lg">
          <div class="text-center w-1/2 md:w-1/3">
            <img src="source/images/home/testimony-removebg.png">
          </div>
          <div
            class="w-full text-center md:text-start md:w-1/3 md:pl-12 border-slate-300 md:border-l-2 flex flex-col gap-y-4 md:gap-y-7">
            <h4 class="text-lg font-medium">Eren Yaeger</h4>
            <p>This diet program make me want to rumble the world once again</p>
            <div class="flex justify-center md:justify-start w-full">
              <img src="source/images/icon/star.svg">
              <img src="source/images/icon/star.svg">
              <img src="source/images/icon/star.svg">
              <img src="source/images/icon/star.svg">
              <img src="source/images/icon/star.svg">
            </div>
            <p class="text-sm text-slate-500">2/22/2222</p>
          </div>
        </div>
      </div>
    </div>`;
